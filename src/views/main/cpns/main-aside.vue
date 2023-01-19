<template>
  <div class="main-aside">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="" />
      <span v-if="!isCollapse">洗衣管理系统</span>
    </div>
    <el-menu
      :default-active="currentItme"
      @open="handleOpen"
      @close="handleClose"
      background-color="#293246"
      text-color="#fff"
      active-text-color="#7e9cff"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <div v-for="item in menu" :key="item.title">
        <template v-if="item.children"
          ><el-submenu :index="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span v-show="!isCollapse">{{ item.title }}</span>
            </template>
            <el-menu-item
              :index="page.id"
              v-for="page in item.children"
              :key="page.title"
              @click="handleItemClick(page)"
            >
              {{ page.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else-if="!item.children">
          <el-menu-item :index="item.id" @click="handleItemClick(item)">
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
      menu: this.$store.state.login.uesrMenu
    }
  },
  computed: {
    currentItme() {
      const { itemId } = isPath(
        this.$store.state.login.uesrMenu,
        this.$route.path.split('/').slice(0, 3).join('/')
      )
      return itemId
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    handleItemClick(item) {
      if (item.path !== this.$route.path) {
        this.$router.push(item.path ?? '/not-found')
      }
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
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
