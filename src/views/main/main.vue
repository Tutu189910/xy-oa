<template>
  <div class="main">
    <el-container class="container">
      <el-aside :width="navWidth">
        <main-aside :isCollapse="isCollapse"></main-aside>
      </el-aside>
      <el-container>
        <el-header>
          <main-header @openNav="openNav" @closeNav="closeNav"></main-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import mainAside from './cpns/main-aside.vue'
import MainHeader from './cpns/main-header.vue'
export default {
  components: { mainAside, MainHeader },
  data() {
    return {
      navWidth: '200px',
      isCollapse: null
    }
  },
  methods: {
    openNav(data) {
      this.navWidth = data.navWidth
      this.isCollapse = !data.isCollapse
    },
    closeNav(data) {
      this.navWidth = data.navWidth
      this.isCollapse = !data.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  .container {
    width: 100%;
    height: 100%;
    .el-aside {
      height: 100%;
      background: #293246;
    }
    .el-header {
      display: flex;
      align-items: center;
    }
    .el-main {
      background: #f0f2f5;
      padding: 4px;
    }
  }
}
</style>
