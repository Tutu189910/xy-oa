<template>
  <div class="base-set">
    <div class="set-title">
      {{ '密码设置' }}
    </div>
    <div class="set-main">
      <el-form
        label-position="top"
        label-width="80px"
        :model="info"
        :rules="rules"
        status-icon
        ref="changePsd"
      >
        <el-form-item label="旧密码" prop="oldPsd">
          <el-input
            type="password"
            show-password
            v-model.trim="info.oldPsd"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input
            type="password"
            show-password
            v-model.trim="info.pass"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="newPsd">
          <el-input
            type="password"
            show-password
            v-model.trim="info.newPsd"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit"
            >修改密码</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { updateUserPsd } from '@/server/main/setting'
export default {
  data() {
    return {
      info: {
        oldPsd: '',
        pass: '',
        newPsd: ''
      },
      rules: {
        oldPsd: [
          { message: '请输入密码', trigger: 'blur', required: true },
          {
            message: '密码由6-16位组成',
            trigger: 'blur',
            pattern: /^[A-Za-z][\w.]{5,17}$/
          }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ],
        newPsd: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.info.pass) {
                callback(new Error('两次输入的密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    async submit() {
      let list = await updateUserPsd({
        ...this.info,
        id: this.$store.getters.getUserInfo.id
      })
      console.log(list)
      if (list.status) {
        this.$notify({
          title: '提示',
          type: 'error',
          message: list.msg
        })
      } else {
        this.$notify({
          title: '提示',
          type: 'success',
          message: list.msg
        })
      }
      this.$store.dispatch('login/setupStore')
    },
    onSubmit() {
      this.$refs['changePsd'].validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          return false
        }
      })
    }
  },
  created() {
    console.log(this.$store.getters.getUserInfo.id)
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
