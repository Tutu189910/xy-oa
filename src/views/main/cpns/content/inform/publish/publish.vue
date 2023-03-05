<template>
  <div class="publish">
    <div class="publish-title">{{ title }}</div>
    <div class="publish-main">
      <el-form
        label-position="right"
        label-width="90px"
        :model="form"
        :rules="rules"
        ref="addInform"
        status-icon
      >
        <el-form-item label="标题：" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="定时发布：">
          <el-switch v-model="isDate_created"></el-switch>
        </el-form-item>
        <el-form-item label="选择日期：" v-show="isDate_created">
          <el-date-picker
            v-model="form.date_created"
            type="datetime"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="内容：" prop="info">
          <el-input type="textarea" v-model="form.info"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit"
            >发布</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { addInform } from '@/server/main/inform/inform'
// import { getRigths, setRigths } from '@/server/main/vipUser'
export default {
  data() {
    return {
      title: '发布通知',
      isDate_created: false,
      form: {},
      rules: {
        title: [{ message: '请输入标题', trigger: 'blur', required: true }],
        info: [{ message: '请输入内容', trigger: 'blur', required: true }]
      }
    }
  },
  computed: {},
  watch: {
    '$route.path'() {}
  },
  methods: {
    async onSubmit() {
      this.$refs['addInform'].validate((valid) => {
        if (!valid) {
          return false
        }
      })
      await addInform({
        ...this.form,
        author: this.$store.getters['getNickname']
      })
        .then((e) => {
          if (!e.status) {
            this.$notify({
              title: '提示',
              type: 'success',
              message: '发布成功'
            })
            this.form = {}
          } else {
            this.$notify({
              title: '提示',
              type: 'error',
              message: '发布失败'
            })
          }
        })
        .catch(() => {
          this.$notify({
            title: '提示',
            type: 'error',
            message: '发布失败'
          })
        })
    }
  },
  created() {
    // getRigths().then((res) => {
    //   console.log(res)
    //   this.itemData = res.data.result
    // })
  }
}
</script>

<style lang="less" scoped>
.publish {
  height: 100%;
  display: flex;
  flex-direction: column;
  .publish-title {
    padding: 8px 10px;
    font-size: 20px;
    line-height: 1.5em;
    background-color: #fff;
    box-shadow: 0px 1px 2px #00000033;
  }
  .publish-main {
    padding: 12px 10px;
    margin: 4px;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 1px 2px #00000033;
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
