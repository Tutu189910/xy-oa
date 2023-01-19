<template>
  <div class="orderForm">
    <div class="form-title">{{ formConfig.title }}</div>
    <page-search :formConfig="formConfig" v-model="formDatas"></page-search>
    <base-table
      class="form-table"
      :tableConfig="tableConfig"
      :tableData="tableData"
    >
      <template #handle>
        <el-table-column label="操作" :min-width="100" align="center">
          <template slot-scope="scope">
            <span>
              <el-button
                type="primary "
                size="mini"
                @click="updateOrder(scope.row)"
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
import BaseTable from '@/components/base-table/src/base-table.vue'
import formConfig from './form.config'
import tableConfig from './tabel.config'
import dayjs from 'dayjs'
import PageSearch from '@/components/page-search'

export default {
  components: { BaseTable, PageSearch },
  data() {
    return {
      formConfig,
      tableConfig,
      formDatas: {}
    }
  },
  computed: {
    tableData: {
      set(v) {
        this.tableData = v
      },
      get() {
        const datas = this.$store.state.order.orderList

        console.log(datas.clothes_getTime)
        if (datas) {
          for (let item of datas.result) {
            item.clothes_getTime = dayjs(item.clothes_getTime).format(
              'YYYY-MM-DD HH:mm'
            )
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
        return null
      }
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
    },
    updateOrder(row) {
      console.log(row)
    },
    deleteOrder(row) {
      this.$confirm('是否取衣，结束订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$store.dispatch('order/deleteOrder', { id: row.id })
          this.$message({
            type: 'success',
            message: '取衣成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  created() {
    for (let value of this.formConfig.propList) {
      this.formDatas[`${value.field}`] = ''
    }
    this.$store.dispatch('order/getOrderList')
    console.log(this.formConfig)
  },
  mounted() {
    this.$store.dispatch('order/setupStore')
  }
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
}
</style>
