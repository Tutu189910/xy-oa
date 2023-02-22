<template>
  <div class="page-search">
    <el-row
      type="flex"
      justify="space-between"
      align="middle"
      style="width: 100%; flex-wrap: wrap"
    >
      <el-col v-bind="{ sm: 24, md: 24, lg: 20, xl: 20 }">
        <base-form
          class="form-query"
          :formConfig="formConfig"
          @change="changeData"
          @query="queryList"
          ref="form"
        ></base-form>
      </el-col>
      <el-col v-bind="{ sm: 24, md: 24, lg: 4, xl: 4 }">
        <template>
          <div class="form-btn">
            <el-button
              round
              :type="formConfig.btns[0].type"
              :icon="formConfig.btns[0].icon"
              :size="formConfig.btns[0].size"
              @click="queryList"
            >
              {{ formConfig.btns[0].title }}
            </el-button>
            <el-button
              round
              :type="formConfig.btns[1].type"
              :icon="formConfig.btns[1].icon"
              :size="formConfig.btns[1].size"
              @click="addList"
            >
              {{ formConfig.btns[1].title }}
            </el-button>
          </div>
        </template>
      </el-col>
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
      formData: {}
    }
  },
  methods: {
    // changeForm(data) {
    //   this.formDatas = { ...data }
    //   this.queryList()
    // },
    changeData(data) {
      this.formData = { ...data }
    },
    queryList() {
      this.$emit('queryList', this.formData)
      this.$refs['form'].clear()
    },
    addList() {
      this.$emit('addList')
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
