<template>
  <div class="allInform">
    <div class="form-title">{{ formConfig.title }}</div>
    <page-search
      :formConfig="formConfig"
      v-model="formDatas"
      @queryList="queryVipUserList"
    ></page-search>
    <base-table
      class="form-table"
      :tableConfig="tableConfig"
      :tableData="tableData"
    >
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
      <template #info="info">
        {{ info.row.info }}
      </template>
      <template #date_created="date_created">
        {{ flitTime(date_created.row.date_created) }}
      </template>
      <template #handle>
        <el-table-column label="操作" :min-width="80" align="center">
          <template slot-scope="scope">
            <span class="btns">
              <el-button
                type="primary "
                size="mini"
                @click="updateOrder(scope.row)"
                >修改</el-button
              >
              <el-button
                :disabled="!scope.row.status"
                type="danger"
                size="mini"
                @click="deleteVipUser(scope.row)"
                >删除</el-button
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
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.$store.state.vipUser.vipUserList.result.length"
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
      pageSize: 10,
      currentPage: 1,
      dialogVisible: false,
      msgboxTitle: ''
    }
  },
  computed: {
    tableData: {
      set() {},
      get() {
        const datas = this.$store.getters['inform/getInform'].result.slice(
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
    queryVipUserList(Datas) {
      if (Datas.date_created) {
        Datas = {
          ...Datas,
          start_Time: Datas.getDate[0],
          over_Time: Datas.getDate[1]
        }
      }
      this.$store.dispatch('inform/queryInform', Datas)
      this.tableData = this.$store.getters['inform/getInform']
      this.currentPage = 1
    },
    handleClose(done) {
      let confirmConfig = {
        title: '提示',
        type: 'warning',
        message: '修改取消!'
      }
      this.$confirm(`是否取消修改?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
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
      this.msgboxTitle = '通知详情'
    },
    handleYep() {
      const t = this.$refs['msgbox'].formDatas
      const datas = {}
      Object.keys(t).forEach((e) => {
        if (e != 'date_created') datas[e] = t[e]
      })
      this.$store
        .dispatch('inform/updateInform', {
          ...datas,
          author: this.$store.getters['getNickname']
        })
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
      this.dialogVisible = false
    },
    deleteVipUser(row) {
      this.$confirm('是否注删除该通知?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$store
            .dispatch('inform/deleteInform', { id: row.id })
            .then(() => {
              this.$notify({
                title: '提示',
                type: 'success',
                message: '删除成功!'
              })
            })
            .catch(() => {
              this.$notify({
                title: '提示',
                type: 'error',
                message: '删除失败!'
              })
            })
        })
        .catch(() => {
          this.$notify({
            title: '提示',
            type: 'warning',
            message: '取消删除!'
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
    this.$store.dispatch('inform/setupStore')
  }
}
</script>

<style lang="less" scoped>
.allInform {
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
