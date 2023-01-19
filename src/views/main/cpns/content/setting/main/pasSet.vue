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
      >
        <el-form-item label="旧密码" prop="oldPass">
          <el-input type="password" v-model.trim="info.oldPass"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model.trim="info.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model.trim="info.checkPass"></el-input>
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
export default {
  data() {
    return {
      info: {
        oldPass: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        oldPass: [
          { message: '请输入密码', trigger: 'blur', required: true },
          {
            message: '密码由6-12位组成',
            trigger: 'blur',
            regexp: '/^[0-9A-Za-z]$/'
          }
        ],
        pass: [
          { message: '请输入密码', trigger: 'blur', required: true },
          {
            message: '密码由6-12位组成',
            trigger: 'blur',
            regexp: '/^[0-9A-Za-z]$/'
          }
        ],
        checkPass: [
          { message: '请再次输入密码', trigger: 'blur', required: true },
          {
            message: '密码由6-12位组成',
            trigger: 'blur',
            regexp: '/^[0-9A-Za-z]$/'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('a')
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
