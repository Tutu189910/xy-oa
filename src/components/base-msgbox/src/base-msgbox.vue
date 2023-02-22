<template>
  <div class="msgbox">
    <base-form
      :formConfig="msgboxConfig"
      :baseDatas="formDatas"
      @query="changeForm"
      @change="changeForm"
    >
    </base-form>
  </div>
</template>

<script>
import baseForm from '@/base-ui/form'
export default {
  components: { baseForm },
  props: {
    msgboxConfig: {
      type: Object,
      require: true
    },
    msgboxDatas: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      formDatas: this.msgboxDatas
    }
  },
  watch: {
    msgboxDatas: function (newV) {
      this.formDatas = JSON.parse(JSON.stringify(newV))
    }
  },
  beforeCreate() {},
  methods: {
    changeForm(newV) {
      this.formDatas = newV
    },
    handleAxios(type) {
      console.log(this)
      let payload = this.formDatas
      if (type === '订单详情') {
        console.log(payload)
        // this.$store.dispatch('order/updateOrder', payload)
      }
    }
  }
}
</script>

<style scoped lang='less'>
</style>
