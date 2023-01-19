<template>
  <div class="main-header">
    <div class="breadcrumb">
      <i class="el-icon-s-fold" v-if="isCollapse" @click="closeAside"></i>
      <i class="el-icon-s-unfold" v-else @click="openAside"></i>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>{{ pathTitle }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="myAccount">
      <el-dropdown :hide-on-click="false" @command="handleClick">
        <span class="el-dropdown-link">
          <el-avatar size="small"> {{ userAvatar }} </el-avatar>
          <el-link :underline="false">{{ userName }}</el-link>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的信息</el-dropdown-item>
          <el-dropdown-item divided command="outPut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { removeLocal } from '@/tool/localTool'
import { isPath } from '@/tool/pathTool'

export default {
  emits: ['openNav', 'closeNav'],
  data() {
    return {
      isCollapse: true
    }
  },
  computed: {
    userName() {
      return this.$store.state.login.uesrInfo.nickname
    },
    userAvatar() {
      return this.userName[0]
    },
    pathTitle() {
      const { itemTitle } = isPath(
        this.$store.state.login.uesrMenu,
        this.$route.path
      )
      return itemTitle
    }
  },
  methods: {
    handleClick(command) {
      if (command === 'outPut') {
        removeLocal('token')
        this.$router.replace('/login')
        this.$store.commit('login/changeToken', '')
      }
    },
    openAside() {
      this.isCollapse = !this.isCollapse
      this.$emit('openNav', {
        isCollapse: this.isCollapse,
        navWidth: '200px'
      })
    },
    closeAside() {
      this.isCollapse = !this.isCollapse
      this.$emit('closeNav', {
        isCollapse: this.isCollapse,
        navWidth: '64px'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .breadcrumb {
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      margin-right: 20px;
    }
  }
  .myAccount {
    margin-right: 20px;
    .el-dropdown-link {
      display: flex;
      align-items: center;
      .el-link {
        font-size: 16px;
        margin-left: 4px;
      }
    }
  }
}
</style>
