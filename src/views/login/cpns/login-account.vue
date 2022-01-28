<template>
  <div class="login-account">
    <el-form ref="accountForm" :model="formModel" class="demo-ruleForm">
      <el-form-item label="账号" prop="name" :rules="rules.name">
        <el-input v-model="formModel.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="rules.password">
        <el-input v-model="formModel.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-login'
import localCache from '@/util/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const accountForm = ref<InstanceType<typeof ElForm>>()
    const formModel = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const loginAction = (isKeepPassword: boolean) => {
      accountForm.value?.validate((valid) => {
        if (valid) {
          // 1.是否保存密码
          if (isKeepPassword) {
            localCache.setCache('name', formModel.name)
            localCache.setCache('password', formModel.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
        }
        // 2.开启登录验证
        store.dispatch('login/accountLoginAction', { ...formModel })
      })
    }
    return {
      accountForm,
      formModel,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped></style>
