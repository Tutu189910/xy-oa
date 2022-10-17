<template>
  <div class="not-found">
    <img src="~@/assets/img/404.svg" alt="" />
    <div class="info">
      <h1>抱歉!</h1>
      <h2>当前页面不存在...</h2>
      <span>请检查您输入的网址是否正确，或点击下面的按钮返回首页</span>
      <el-button type="primary" @click="toHome">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 400px;
  }
  .info {
    h1 {
      font-size: 56px;
      margin-bottom: 20px;
    }
    span {
      display: block;
      margin: 10px 0 20px;
    }
  }
}
</style>
