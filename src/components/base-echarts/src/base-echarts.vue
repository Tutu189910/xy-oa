<template>
  <div class="base-echarts" ref="base"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    setting: {
      typeof: Object,
      require: true
    }
  },
  mounted() {
    const echartsInstance = echarts.init(this.$refs.base)
    echartsInstance.setOption(this.setting)
  }
}
</script>

<style scoped lang='less'>
.base-echarts {
  width: 100%;
  height: 400px;
}
</style>
