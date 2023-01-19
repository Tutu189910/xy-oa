<template>
  <div class="base-card">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>{{ title }}</span>
      </div>
      <div class="card-main">
        <slot name="main"></slot>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang='less'>
.base-card {
  .box-card {
    /deep/ .el-card__header {
      padding: 6px 12px;
    }
    /deep/ .el-card__body {
      padding: 12px;
    }
    .card-main {
      font-size: 28px;
      font-weight: 600;
    }
  }
}
</style>
