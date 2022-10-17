<template>
  <div class="login-main">
    <el-row :gutter="20" type="flex" align="middle">
      <el-col :span="10">
        <img src="~@/assets/img/login.png" alt="" />
      </el-col>
      <el-col :span="14">
        <login-box></login-box>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import loginBox from './login-box.vue'
export default {
  components: { loginBox }
}
</script>

<style lang="less" scoped>
.login-main {
  width: 560px;
  background: #fff;
  padding: 20px;
  border-radius: 2%;
  box-shadow: 0 4px 20px #00000044;
  display: flex;
  margin-left: 40%;
  img {
    width: 100%;
  }
}
</style>
