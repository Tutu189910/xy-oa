<template>
  <div class="base-table">
    <el-table
      :data="tableData.result"
      style="width: 100%"
      v-bind="tableConfig.tabelStyle"
    >
      <el-table-column
        :label="item.title"
        :min-width="item.width"
        v-for="(item, key) in tableConfig.propList"
        :key="key"
        align="center"
      >
        <template slot-scope="scope">
          <i
            :class="item.iClass"
            style="margin-right: 4px"
            v-if="item.iClass"
          ></i>
          <el-tag type="success" v-if="item.isTab">{{ scope.row[key] }}</el-tag>
          <span v-else>{{ scope.row[key] }}</span>
        </template>
      </el-table-column>
      <slot name="handle"></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableConfig: {
      type: Object,
      require: true
    },
    tableData: {
      type: Object,
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
