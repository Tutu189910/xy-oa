<template>
  <div class="base-set">
    <div class="set-title">
      {{ '基本设置' }}
    </div>
    <div class="set-main">
      <el-form label-position="top" label-width="80px" :model="info">
        <el-form-item label="用户名">
          <el-input v-model="info.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="info.nickname"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="info.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit"
            >修改信息</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    }
  },
  created() {
    this.info = this.$store.state.login.uesrInfo
  }
}
</script>

<style scoped lang='less'>
.base-set {
  .set-title {
    font-size: 22px;
    font-weight: 400;
  }
  .set-main {
    .el-form {
      margin-top: 20px;
      width: 60%;
      max-width: 400px;
      /deep/ .el-form-item__label {
        line-height: 0;
      }
      /deep/ .el-form--label-top .el-form-item__label {
        padding: 0 0 4px;
      }
      .el-form-item {
        margin-bottom: 20px;
      }
      /deep/ .el-form-item__content {
        height: 30px;
        .el-input__inner {
          height: 30px;
        }
      }
    }
  }
}
</style>
