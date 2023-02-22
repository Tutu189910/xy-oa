<template>
  <div class="vipUserForm">
    <div class="form-title">{{ formConfig.title }}</div>
    <page-search
      :formConfig="formConfig"
      v-model="formDatas"
      @queryList="queryAccountList"
      @addList="addAccountList"
    ></page-search>
    <base-table
      class="form-table"
      :tableConfig="tableConfig"
      :tableData="tableData"
    >
      <template #level="level">
        <el-tag>
          {{ level.row.level }}
        </el-tag>
      </template>
      <template #status="status">
        <el-switch
          :value="status.row.status"
          :inactive-value="0"
          :active-value="1"
          active-color="#13ce66"
          inactive-color="#ff4949"
          disabled
        >
        </el-switch>
      </template>
      <template #lastLogin="lastLogin">
        {{ flitTime(lastLogin.row.lastLogin) }}
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
                @click="deleteVipUser(scope.row)"
                >禁用</el-button
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
        :total="this.$store.state.account.accountList.result.length"
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
        const datas = this.$store.state.account.accountList.result.slice(
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
    queryAccountList(Datas) {
      if (Datas.getDate) {
        Datas = {
          ...Datas,
          start_Time: Datas.getDate[0],
          over_Time: Datas.getDate[1]
        }
      }
      this.$store.dispatch('vipUser/queryVipUser', Datas)
      this.tableData = this.$store.state.order.orderList
      this.currentPage = 1
    },
    addAccountList() {
      this.msgboxDatas = {}
      this.dialogVisible = true
      this.msgboxTitle = '新增'
    },
    handleClose(done) {
      let confirmConfig = {}
      if (this.msgboxTitle == '新增') {
        confirmConfig = {
          title: '提示',
          type: 'warning',
          message: '新增取消!'
        }
      } else {
        confirmConfig = {
          title: '提示',
          type: 'warning',
          message: '取消修改！'
        }
      }
      this.$confirm(
        `是否取消${this.msgboxTitle == '新增' ? '新增' : '修改'}?`,
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
      this.msgboxTitle = '账号详情'
    },
    handleYep() {
      const t = this.$refs['msgbox'].formDatas
      if (this.msgboxTitle === '账号详情') {
        console.log(this.$refs['msgbox'].formDatas)
        this.$store
          .dispatch('account/updateAccount', t)
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
      if (this.msgboxTitle === '新增') {
        console.log(this.$refs['msgbox'].formDatas)
        this.$store
          .dispatch('account/addAccount', {
            ...t,
            password: '123456'
          })
          .then(() => {
            this.$notify({
              title: '提示',
              type: 'success',
              message: '新增成功!'
            })
          })
          .catch(() => {
            this.$notify({
              title: '提示',
              type: 'error',
              message: '新增失败!'
            })
          })
      }
      this.dialogVisible = false
    },
    deleteVipUser(row) {
      this.$confirm('是否注销该账号?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$store
            .dispatch('vipUser/deleteVipUser', { id: row.id })
            .then(() => {
              this.$notify({
                title: '提示',
                type: 'success',
                message: '注销成功!'
              })
            })
            .catch(() => {
              this.$notify({
                title: '提示',
                type: 'error',
                message: '注销失败!'
              })
            })
        })
        .catch(() => {
          this.$notify({
            title: '提示',
            type: 'warning',
            message: '取消注销!'
          })
        })
    },
    flitTime(date) {
      return dayjs(date).format('YYYY年MM月DD日 HH:mm')
    },
    handleSizeChange(val) {
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    }
  },
  created() {
    // this.$store.dispatch('account/getAccountList')
    this.$store.dispatch('account/setupStore')
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.vipUserForm {
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
