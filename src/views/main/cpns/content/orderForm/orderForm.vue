<template>
  <div class="orderForm">
    <div class="form-title">{{ formConfig.title }}</div>
    <page-search
      :formConfig="formConfig"
      v-model="formDatas"
      @queryList="queryOrderList"
      @addList="addOrderList"
    ></page-search>
    <base-table
      class="form-table"
      :tableConfig="tableConfig"
      :tableData="tableData"
    >
      <template #id="id">
        <el-tag>
          {{ id.row.clothes_id }}
        </el-tag>
      </template>
      <template #status="status">
        <el-button
          round
          size="mini"
          :type="status.row.clothes_status ? 'success' : 'danger'"
        >
          {{ status.row.clothes_status ? '已取衣' : '未完成' }}
        </el-button>
      </template>
      <template #type="type">
        {{ fliterType(type.row.clothes_type) }}
      </template>
      <template #colour="colour">
        {{ colour.row.clothes_color }}
      </template>
      <template #getTime="getTime">
        {{ flitTime(getTime.row.clothes_getTime) }}
      </template>
      <template #price="price">
        <el-tag type="success" style="min-width: 80px">
          {{ price.row.ordercol_price + '元' }}</el-tag
        >
      </template>
      <template #handle>
        <el-table-column label="操作" :min-width="100" align="center">
          <template slot-scope="scope">
            <span class="btns">
              <el-button
                type="primary "
                size="mini"
                @click="updateOrder(scope.row)"
                >修改</el-button
              >
              <el-button
                :disabled="!!scope.row.clothes_status"
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
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.$store.state.order.orderList.result.length"
      >
      </el-pagination>
    </div>
    <el-dialog
      :title="msgboxTitle"
      :visible.sync="dialogVisible"
      width="26%"
      :before-close="handleClose"
    >
      <base-msgbox
        :msgboxConfig="msgboxConfig"
        :msgboxDatas="msgboxDatas"
        ref="msgbox"
      ></base-msgbox>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleYep">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import BaseTable from '@/components/base-table/src/base-table.vue'
import formConfig from './form.config'
import tableConfig from './tabel.config'
import msgboxConfig from './msgbox.config'
import dayjs from 'dayjs'
import PageSearch from '@/components/page-search'
import BaseMsgbox from '@/components/base-msgbox/src/base-msgbox.vue'

export default {
  components: { BaseTable, PageSearch, BaseMsgbox },
  data() {
    return {
      formConfig,
      tableConfig,
      msgboxConfig,
      formDatas: {},
      msgboxDatas: {},
      pageSize: 5,
      currentPage: 1,
      dialogVisible: false,
      msgboxTitle: ''
      // tableData: this.$store.state.order.orderList.result
    }
  },
  computed: {
    tableData: {
      set() {},
      get() {
        const datas = this.$store.state.order.orderList.result.slice(
          this.currentPage * this.pageSize - this.pageSize,
          this.currentPage * this.pageSize
        )
        return datas
      }
    }
  },
  methods: {
    changeForm(data) {
      this.formDatas = { ...data }
    },
    queryOrderList(Datas) {
      if (Datas.getDate) {
        Datas = {
          ...Datas,
          start_Time: Datas.getDate[0],
          over_Time: Datas.getDate[1]
        }
      }
      this.$store.dispatch('order/queryOrder', Datas)
      this.tableData = this.$store.state.order.orderList
      this.currentPage = 1
    },
    addOrderList() {
      this.msgboxDatas = {}
      this.dialogVisible = true
      this.msgboxTitle = '收衣'
    },
    handleClose(done) {
      let confirmConfig = {}
      if (this.msgboxTitle == '收衣') {
        confirmConfig = {
          title: '提示',
          type: 'warning',
          message: '收衣取消!'
        }
      } else {
        confirmConfig = {
          title: '提示',
          type: 'warning',
          message: '取消修改！'
        }
      }
      this.$confirm(
        `是否取消${this.msgboxTitle == '收衣' ? '收衣' : '修改'}?`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }
      )
        .then(() => {
          this.$notify(confirmConfig)
          this.dialogVisible = false
          done()
        })
        .catch(() => {})
    },
    updateOrder(row) {
      this.msgboxDatas = row
      this.dialogVisible = true
      this.msgboxTitle = '订单详情'
    },
    handleYep() {
      const t = this.$refs['msgbox'].formDatas
      if (this.msgboxTitle === '订单详情') {
        console.log(this.$refs['msgbox'].formDatas)
        this.$store
          .dispatch('order/updateOrder', t)
          .then(() => {
            this.$notify({
              title: '提示',
              type: 'success',
              message: '修改成功!'
            })
          })
          .catch(() => {
            this.$notify({
              title: '提示',
              type: 'error',
              message: '修改失败!'
            })
          })
      }
      if (this.msgboxTitle === '收衣') {
        console.log(this.$refs['msgbox'].formDatas)
        this.$store
          .dispatch('order/addOrder', {
            ...t,
            clothes_getTime: Date.now()
          })
          .then(() => {
            this.$notify({
              title: '提示',
              type: 'success',
              message: '收衣成功!'
            })
          })
          .catch(() => {
            this.$notify({
              title: '提示',
              type: 'error',
              message: '收衣失败!'
            })
          })
      }
      this.dialogVisible = false
    },
    deleteOrder(row) {
      this.$confirm('是否取衣，结束订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$store
            .dispatch('order/deleteOrder', { id: row.id })
            .then(() => {
              this.$notify({
                title: '提示',
                type: 'success',
                message: '取衣成功!'
              })
            })
            .catch(() => {
              this.$notify({
                title: '提示',
                type: 'error',
                message: '取衣失败!'
              })
            })
        })
        .catch(() => {
          this.$notify({
            title: '提示',
            type: 'warning',
            message: '取消取衣!'
          })
        })
    },
    flitTime(date) {
      return dayjs(date).format('YYYY年MM月DD日 HH:mm')
    },
    fliterType(t) {
      let type
      switch (t) {
        case '0':
          type = '精洗'
          break
        case '1':
          type = '干洗'
          break
        case '2':
          type = '熨烫'
          break
      }
      return type
    },
    handleSizeChange(val) {
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    }
  },
  created() {
    this.$store.dispatch('order/getOrderList')
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
.block {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 4px 20px;
  background-color: #fff;
  box-shadow: 0px 1px 2px #00000033;
  margin-top: -5px;
  margin-bottom: 5px;
}
/deep/.el-dialog {
  min-width: 360px;
  .el-dialog__body {
    margin: 0;
    padding: 0 20px;
  }
}
.btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 16px;
  .el-button {
    margin-left: 0;
  }
}
</style>
