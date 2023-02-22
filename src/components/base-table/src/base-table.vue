<template>
  <div class="base-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      v-bind="tableConfig.tabelStyle"
    >
      <el-table-column
        v-if="tableConfig.isIndex"
        type="index"
        width="50"
        align="center"
      >
      </el-table-column>
      <el-table-column
        :label="item.title"
        :min-width="item.width"
        v-for="item in tableConfig.propList"
        :key="item.prop"
        align="center"
      >
        <template #default="scope">
          <slot :name="item.slotName" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
      <slot name="handle"></slot>
      <slot name="foot"></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableConfig: {
      type: [Object, Array],
      require: true
    },
    tableData: {
      type: [Object, Array],
      require: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang='less'>
.base-table {
  box-shadow: 0px 1px 10px #00000033;
  margin-bottom: 5px;
  .el-tabel {
  }
}
</style>
