<template>
  <div class="page-search">
    <el-row type="flex" justify="end" align="middle">
      <el-col v-bind="{ sm: 24, md: 24, lg: 20, xl: 20 }">
        <base-form
          class="form-query"
          :formConfig="formConfig"
          v-model="formDatas"
          @query="changeForm"
        ></base-form>
      </el-col>
      <el-col v-bind="{ sm: 24, md: 24, lg: 4, xl: 4 }"
        ><div class="form-btn">
          <el-button
            round
            type="primary"
            icon="el-icon-search"
            size="small"
            @click="queryOrderList"
          >
            查询
          </el-button>
          <slot>
            <el-button round type="success" icon="el-icon-plus" size="small">
              收衣
            </el-button></slot
          >
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import baseForm from '@/base-ui/form'
export default {
  props: {
    formConfig: {
      type: Object,
      require: true
    }
  },
  components: { baseForm },
  data() {
    return {
      formDatas: {}
    }
  },
  methods: {
    changeForm(data) {
      this.formDatas = { ...data }
    },
    queryOrderList() {
      const queryLoad = {
        query_name: this.formDatas.query_name ?? 0,
        query_phone: this.formDatas.query_phone ?? 0,
        start_Time: this.formDatas.getDate[0] ?? 0,
        over_Time: this.formDatas.getDate[1] ?? 0
      }
      console.log(this.formDatas)
      this.$store.dispatch('order/queryOrder', queryLoad)
      this.tableData = this.$store.state.order.orderList
    }
  }
}
</script>

<style scoped lang='less'>
.page-search {
  display: flex;
  background-color: #fff;
  box-shadow: 0px 1px 10px #00000033;
  margin-bottom: 5px;
  .form-btn {
    display: flex;
    justify-items: center;
    justify-content: center;
    .el-button {
      height: 35px;
      margin: 10px;
    }
    .el-button [type='success'] {
      width: 100px;
    }
  }
}
</style>
