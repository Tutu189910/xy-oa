<template>
  <div class="main-aside">
    <div class="logo" @click="$router.push('/')">
      <img src="~@/assets/logo.png" alt="" />
      <span v-if="!isCollapse">洗衣管理系统</span>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="currentItme"
      @open="handleOpen"
      @close="handleClose"
      background-color="#293246"
      text-color="#fff"
      active-text-color="#7e9cff"
      :collapse="isCollapse"
    >
      <div v-for="item in menu" :key="item.title">
        <template v-if="item.children">
          <el-submenu :index="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span v-show="!isCollapse">{{ item.title }}</span>
            </template>
            <el-menu-item
              :index="page.id"
              v-for="page in item.children"
              :key="page.title"
              @click="handleItemClick(page.id, page)"
            >
              {{ page.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else-if="!item.children">
          <el-menu-item
            :index="item.id"
            @click="handleItemClick(item.id, item)"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { isPath } from '@/tool/pathTool'

export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menu: this.$store.getters.getUserMuenu,
      currentItme: ''
    }
  },
  computed: {},
  watch: {
    '$store.state.login.userMenu': {
      function() {
        this.menu = this.$store.getters.getUserMenu
      },
      deep: true
    },
    '$route.path'() {
      console.log(this.$route.path, this.menu,isPath(this.menu, this.$route.path))
      this.currentItme = isPath(this.menu, this.$route.path).itemId
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    handleItemClick(current, item) {
      // this.currentItme = current
      if (item.path !== this.$route.path) {
        this.$router.push(item.path ?? '/not-found')
      }
    }
  },
  created() {
    this.$store.dispatch('login/setupStore').then(() => {
      this.menu = this.$store.getters.getUserMenu
      this.currentItme = isPath(this.menu, this.$route.path).itemId
    })
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.main-aside {
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    img {
      display: inline-block;
      width: 40px;
    }
    span {
      margin-left: 10px;
      color: #fff;
      display: block;
    }
  }
  .el-menu {
    border-right: none;
  }
}
</style>
