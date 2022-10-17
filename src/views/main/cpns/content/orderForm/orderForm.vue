<template>
  <div class="orderForm">
    <div class="form-title">{{ formConfig.title }}</div>
    <base-form
      class="form-query"
      :formConfig="formConfig"
      v-model="formDatas"
      @query="changeForm"
    >
      <template #query>
        <el-button
          round
          type="primary"
          icon="el-icon-search"
          size="small"
          @click="queryOrderList"
        >
          查询
        </el-button>
      </template>
    </base-form>
    <base-table
      class="form-table"
      :tableConfig="tableConfig"
      :tableData="tableDate"
    >
      <template #handle>
        <el-table-column label="操作" :min-width="100" align="center">
          <template slot-scope="scope">
            <span>
              <el-button
                type="primary "
                size="mini"
                @click="deleteOrder(scope.row)"
                >修改</el-button
              >
              <el-button
                type="danger"
                size="mini"
                @click="deleteOrder(scope.row)"
                >取衣</el-button
              >
            </span>
          </template>
        </el-table-column>
      </template>
    </base-table>
  </div>
</template>

<script>
import baseForm from '@/components/form-ui/src/base-form.vue'
import { queryOrder } from '@/server/main/order'
import BaseTable from '@/components/base-table/src/base-table.vue'
import formConfig from './form.config'
import tableConfig from './tabel.config'

export default {
  components: { baseForm, BaseTable },
  data() {
    return {
      formConfig,
      tableConfig,
      formDatas: {}
    }
  },
  computed: {
    tableDate() {
      const datas = this.$store.state.order.orderList
      for (let item of datas.result) {
        switch (item.clothes_status) {
          case 0:
            item.clothes_status = '未完成'
            break
          case 1:
            item.clothes_status = '已取衣'
            break
        }
        switch (item.clothes_type) {
          case '0':
            item.clothes_type = '精洗'
            break
          case '1':
            item.clothes_type = '干洗'
            break
          case '2':
            item.clothes_type = '熨烫'
            break
        }
      }
      return datas
    }
  },
  methods: {
    changeForm(data) {
      this.formDatas = { ...data }
    },
    queryOrderList() {
      queryOrder(this.formDatas)
    },
    deleteOrder(row) {
      console.log(row.id)
    }
  },
  created() {
    for (let value of this.formConfig.propList) {
      this.formDatas[`${value.field}`] = ''
    }
    this.$store.dispatch('order/getOrderList')
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.orderForm {
  width: 100%;
  .form-title {
    padding: 8px 10px;
    // margin-bottom: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 1.5em;
    background-color: #fff;
    box-shadow: 0px 1px 2px #00000033;
  }
  .form-query {
    .el-button {
      height: 35px;
      margin: 10px;
    }
  }
}
</style>
