<template>
  <div class="login-account">
    <el-form ref="phoneForm" :model="formModel" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phone" :rules="rules.phone">
        <el-input
          v-model.number="formModel.phone"
          type="text"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="验证码"
        prop="identifyCode"
        :rules="rules.identifyCode"
      >
        <div class="code">
          <el-input
            v-model="formModel.identifyCode"
            type="text"
            autocomplete="off"
          ></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/phone-login'

export default defineComponent({
  setup() {
    const store = useStore()
    const phoneForm = ref<InstanceType<typeof ElForm>>()
    const formModel = reactive({
      phone: '',
      identifyCode: ''
    })
    const loginAction = () => {
      store.dispatch('login/phoneLoginAction', 'phone')
    }
    return {
      phoneForm,
      formModel,
      loginAction,
      rules
    }
  }
})
</script>

<style scoped>
.code {
  display: flex;
}
</style>
