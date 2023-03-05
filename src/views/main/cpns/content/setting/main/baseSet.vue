<template>
  <div class="base-set">
    <div class="set-title">
      {{ '基本设置' }}
    </div>
    <div class="set-main">
      <el-form
        label-position="top"
        label-width="80px"
        :model="info"
        :rules="rules"
        status-icon
        ref="changeInfo"
      >
        <el-form-item label="用户名">
          <el-input v-model="info.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="nickname">
          <el-input v-model="info.nickname"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="info.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit"
            >修改信息</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { updateUserInfo } from '@/server/main/setting'
export default {
  data() {
    return {
      info: {},
      rules: {
        nickname: [
          { message: '请输入姓名', trigger: 'blur', required: true },
          {
            message: '请输入正确的姓名',
            trigger: 'blur',
            pattern: /[\u4e00-\u9fa5a-zA-Z]{2,12}$/
          }
        ],
        phone: [
          {
            message: '请输入正确的手机号',
            trigger: 'blur',
            pattern: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
          }
        ]
      }
    }
  },
  created() {
    this.info = JSON.parse(JSON.stringify(this.$store.getters.getUserInfo))
  },
  methods: {
    async submit() {
      await updateUserInfo(this.info).then((list) => {
        if (list.status) {
          this.$notify({
            title: '提示',
            type: 'error',
            message: '修改失败'
          })
        } else {
          this.$notify({
            title: '提示',
            type: 'success',
            message: '修改成功'
          })
        }
      })

      this.$store.dispatch('login/setupStore')
    },
    onSubmit() {
      this.$refs['changeInfo'].validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.base-set {
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
