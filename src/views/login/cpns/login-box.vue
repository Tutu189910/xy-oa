<template>
  <div class="login-box">
    <h2>洗衣后台系统</h2>
    <el-form
      :model="loginInfo"
      status-icon
      ref="loginInfo"
      :rules="rules"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="loginInfo.username"
          autocomplete="off"
          :autofocus="!loginInfo.username"
          @keyup.enter.native="login"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginInfo.password"
          :autofocus="loginInfo.password === ''"
          autocomplete="off"
          show-password
          @keyup.enter.native="login"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="keepInfor">
      <el-checkbox v-model="loginInfo.isKeep">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="login">立即登录</el-button>
  </div>
</template>

<script>
import { getLocal, setLocal } from '@/tool/localTool'

export default {
  props: {},
  data() {
    return {
      loginInfo: {
        username: '',
        password: '',
        isKeep: false
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 8,
            message: '错误的用户名',
            trigger: 'blur',
            regexp: '/^[a-zA-Z0-9]{2,8}$/'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            message: '密码由6-12位组成',
            trigger: 'blur',
            regexp: '/^[0-9A-Za-z]$/'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      if (this.loginInfo.isKeep) {
        this.$store.dispatch('login/yLogin', this.loginInfo)
        setLocal('loginInfo', this.loginInfo)
      } else {
        this.$store.dispatch('login/yLogin', this.loginInfo)
        this.loginInfo = { ...this.loginInfo, password: '' }
        setLocal('loginInfo', this.loginInfo)
      }
    },
    loginOk() {
      this.$notify({
        title: '成功',
        message: '即将跳转主页',
        type: 'success',
        center: true
      })
    },
    loginErr() {
      this.$notify({
        title: '错误',
        message: '用户名或密码不正确',
        type: 'error',
        center: true
      })
    }
  },
  created() {
    if (getLocal('loginInfo')) {
      this.loginInfo = getLocal('loginInfo')
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  text-align: center;
  width: 100%;
  h2 {
    margin-bottom: 20px;
  }
  .el-button {
    width: 100%;
  }
  .keepInfor {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
}
</style>
