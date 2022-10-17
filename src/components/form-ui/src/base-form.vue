<template>
  <div class="base-form">
    <div class="form-body">
      <el-form ref="form" :model="formDatasCopy" label-width="90px">
        <el-row :gutter="10">
          <el-col
            v-bind="item.span"
            v-for="item in formConfig.propList"
            :key="item.field"
          >
            <template v-if="item.type === 'input'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-input
                  v-model.trim="formDatasCopy[`${item.field}`]"
                  size="small"
                  @blur="handelChange"
                ></el-input>
              </el-form-item>
            </template>
            <template v-else-if="item.type === 'date'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-date-picker
                  v-model="formDatasCopy[`${item.field}`]"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  size="small"
                  @blur="handelChange"
                >
                </el-date-picker>
              </el-form-item>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-form-item :label="item.label" :label-width="item.labelWidth">
                <el-select
                  v-model="formDatasCopy[`${item.field}`]"
                  placeholder="请选择"
                  size="small"
                  @blur="handelChange"
                >
                  <el-option
                    v-for="item in item.value"
                    :key="item"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-col>
        </el-row>
      </el-form>
      <div>
        <slot name="query"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'formDatas',
    event: 'qury'
  },
  props: {
    formConfig: {
      type: Object,
      require: true
    },
    formDatas: {
      type: Object,
      require: true
    }
  },
  computed: {},
  data() {
    return {
      formDatasCopy: {}
    }
  },
  methods: {
    handelChange() {
      this.$emit('query', this.formDatasCopy)
    }
  },
  created() {
    // console.log(this.formDatas)
    this.formDatasCopy = JSON.parse(JSON.stringify(this.formDatas))
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
    background-color: #fff;
    box-shadow: 0px 1px 10px #00000033;
    margin-bottom: 5px;
  }
  .el-form {
    padding: 8px 10px;
    flex: 1;
    .el-row {
      padding: 0;
      .el-form-item {
        margin-bottom: 0;
        margin: 8px 0;
      }
    }
  }
}
</style>
