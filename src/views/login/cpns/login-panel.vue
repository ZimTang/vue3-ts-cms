<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentTab" type="card" stretch @tab-click="tabClick">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><user-filled /></el-icon>
            账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>
            手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="action-control" v-show="showActionControl">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="submit" class="submit-btn"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserFilled, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  setup() {
    const currentTab = ref('account')
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const showActionControl = ref(true)
    const tabClick = () => {
      showActionControl.value = currentTab.value === 'phone' ? false : true
    }
    // 登录
    const submit = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }
    return {
      currentTab,
      isKeepPassword,
      accountRef,
      phoneRef,
      showActionControl,
      tabClick,
      submit
    }
  },
  components: {
    UserFilled,
    Iphone,
    LoginAccount,
    LoginPhone
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .action-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .submit-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
