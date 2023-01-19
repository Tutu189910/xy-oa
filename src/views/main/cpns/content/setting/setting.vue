<template>
  <div class="setting">
    <div class="setting-title">{{ title }}</div>
    <el-container class="setting-main">
      <el-aside width="160px">
        <el-menu :default-active="activeSet" mode="vertical">
          <el-menu-item
            index="1"
            @click="handleItemClick('/main/setting/baseSet')"
            >基本设置
          </el-menu-item>
          <el-menu-item
            index="2"
            @click="handleItemClick('/main/setting/pasSet')"
            >安全设置</el-menu-item
          >
        </el-menu>
      </el-aside>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '个人设置',
      activeSet: '1'
    }
  },
  methods: {
    handleItemClick(page) {
      if (page !== this.$route.path) {
        this.$router.push(page ?? '/not-found')
      }
    }
  },
  created() {
    this.activeSet = this.$route.path == '/main/setting/baseSet' ? '1' : '2'
  }
}
</script>

<style lang="less" scoped>
.setting {
  height: 100%;
  display: flex;
  flex-direction: column;
  .setting-title {
    padding: 8px 10px;
    font-size: 20px;
    line-height: 1.5em;
    background-color: #fff;
    box-shadow: 0px 1px 2px #00000033;
  }
  .setting-main {
    padding: 12px 10px;
    margin: 4px;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 1px 2px #00000033;
    .el-menu {
      border-right: solid 2px #cdcdcdcd;
      .el-menu-item {
        height: 48px;
        line-height: 48px;
      }
      .el-menu-item.is-active {
        border-left: solid 6px #0080ff;
      }
    }
    .el-main {
      padding: 0 20px;
    }
  }
}
</style>
