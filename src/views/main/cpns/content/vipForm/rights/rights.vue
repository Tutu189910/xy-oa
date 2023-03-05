<template>
  <div class="rights">
    <div class="rights-title">{{ title }}</div>
    <el-container class="rights-main">
      <el-aside width="160px">
        <el-menu :default-active="'1'" mode="vertical">
          <el-menu-item
            v-for="item in itemData"
            :key="item.vip_type"
            :index="item.vip_type"
            @click="handleItemClick(item.vip_type)"
            >{{ item.type_name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="set-title">
          {{ '修改权益' }}
        </div>
        <div class="set-main">
          <el-form
            label-position="top"
            label-width="80px"
            :model="activeData"
            :rules="rules"
            status-icon
            ref="setRigths"
          >
            <el-form-item label="会员类型" prop="type_name">
              <el-input v-model="activeData.type_name"></el-input>
            </el-form-item>
            <el-form-item label="折扣力度" prop="discount">
              <el-input v-model="activeData.discount"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="onSubmit"
                >修改权益</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getRigths, setRigths } from '@/server/main/vipUser'
export default {
  data() {
    return {
      title: '会员权益',
      activeItem: '1',
      itemData: {},
      rules: {
        type_name: [
          { message: '请输入会员类型', trigger: 'blur', required: true }
        ],
        discount: [
          { message: '请输入折扣力度', trigger: 'blur', required: true },
          {
            message: '请输入正确的折扣格式',
            trigger: 'blur',
            pattern: /^[0-9]{1}(.[0-9]){0,1}$/
          }
        ]
      }
    }
  },
  computed: {
    activeData() {
      return this.itemData[this.activeItem - 1] ?? {}
    }
  },
  watch: {
    '$route.path'() {}
  },
  methods: {
    handleItemClick(v) {
      this.activeItem = v + ''
    },
    async onSubmit() {
      this.$refs['setRigths'].validate((valid) => {
        if (!valid) {
          return false
        }
      })
      await setRigths(this.activeData)
        .then((e) => {
          if (!e.status) {
            this.$notify({
              title: '提示',
              type: 'success',
              message: '修改成功'
            })
          } else {
            this.$notify({
              title: '提示',
              type: 'error',
              message: '修改失败'
            })
          }
        })
        .catch(() => {
          this.$notify({
            title: '提示',
            type: 'error',
            message: '修改失败'
          })
        })
    }
  },
  created() {
    getRigths().then((res) => {
      console.log(res)
      this.itemData = res.data.result
    })
  }
}
</script>

<style lang="less" scoped>
.rights {
  height: 100%;
  display: flex;
  flex-direction: column;
  .rights-title {
    padding: 8px 10px;
    font-size: 20px;
    line-height: 1.5em;
    background-color: #fff;
    box-shadow: 0px 1px 2px #00000033;
  }
  .rights-main {
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
  .set-title {
    font-size: 22px;
    font-weight: 400;
  }
  .set-main {
    .el-form {
      margin-top: 20px;
      width: 60%;
      max-width: 400px;
      /deep/ .el-form-item__label {
        line-height: 0;
      }
      /deep/ .el-form--label-top .el-form-item__label {
        padding: 0 0 4px;
      }
      .el-form-item {
        margin-bottom: 20px;
      }
      /deep/ .el-form-item__content {
        height: 30px;
        .el-input__inner {
          height: 30px;
        }
      }
    }
  }
}
</style>
