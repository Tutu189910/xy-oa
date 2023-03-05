<template>
  <div class="base-form">
    <div class="form-body">
      <el-form
        ref="form"
        :model="formDatas"
        :label-width="formConfig.labelWidth ?? '90px'"
      >
        <el-row :gutter="10">
          <el-col
            v-bind="item.span ?? formConfig.colLayout"
            v-for="item in formConfig.propList"
            :key="item.field"
          >
            <template v-if="item.type === 'input'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-input
                  :type="item.type && item.isNum ? 'number' : item.type"
                  v-model.lazy="formDatas[`${item.field}`]"
                  size="small"
                  :max="item.max"
                  :min="item.min"
                  @keyup.enter.native="keyUpFun"
                >
                  <template slot="append" v-if="item.endText">{{
                    item.endText
                  }}</template></el-input
                >
              </el-form-item>
            </template>
            <template v-if="item.type === 'textarea'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-input
                  type="textarea"
                  :rows="item.rows"
                  placeholder="请输入内容"
                  v-model.lazy="formDatas[`${item.field}`]"
                >
                </el-input>
              </el-form-item>
            </template>
            <template v-if="item.type === 'password'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-input
                  :type="item.type"
                  v-model.lazy="formDatas[`${item.field}`]"
                  size="small"
                  :placeholder="item.placeholder ?? ''"
                ></el-input>
              </el-form-item>
            </template>
            <template v-if="item.type === 'swicth'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-switch
                  v-model="formDatas[`${item.field}`]"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :active-value="1"
                  :inactive-value="0"
                >
                </el-switch>
              </el-form-item>
            </template>
            <template v-if="item.type === 'daterange'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-date-picker
                  v-model.lazy="formDatas[`${item.field}`]"
                  :type="item.type"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  size="small"
                  value-format="yyyy-MM-dd HH:mm:ss"
                >
                </el-date-picker>
              </el-form-item>
            </template>
            <template v-if="item.type === 'select'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-select
                  v-model.lazy="formDatas[`${item.field}`]"
                  placeholder="请选择"
                  size="small"
                  :type="item.type"
                >
                  <el-option
                    v-for="(value, key) in item.value"
                    :key="key"
                    :label="key"
                    :value="value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'formDatas',
    event: ['change', 'query']
  },
  props: {
    formConfig: {
      type: Object,
      require: true
    },
    baseDatas: {
      type: Object,
      require: true
    }
  },
  computed: {},
  data() {
    return {
      // formDatasCopy: {}
      formDatas: {}
    }
  },
  watch: {
    formDatas: {
      handler(newData) {
        this.$emit('change', newData)
      },
      deep: true
    },
    baseDatas: {
      handler(newData) {
        this.formDatas = newData
      },
      deep: true
    }
  },
  methods: {
    keyUpFun() {
      this.$emit('query', this.formDatas)
    },
    clear() {
      this.formDatas = {}
    }
    // log() {
    //   return [this.formDatasCopy, this.formDatas]
    // }
  },
  created() {
    // console.log(this.formDatas)
    // this.formDatasCopy = JSON.parse(JSON.stringify(this.formDatas))
    this.formDatas = JSON.parse(JSON.stringify(this.baseDatas ?? {}))
  }
}
</script>

<style lang="less" scoped>
.base-form {
  .form-body {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .el-form {
    padding: 8px 10px;
    flex: 1;
    .el-row {
      padding: 0;
      /deep/.el-date-editor--daterange {
        width: 100%;
      }
      .el-form-item {
        margin-bottom: 0;
        margin: 8px 0;
      }
    }
  }
}
</style>
