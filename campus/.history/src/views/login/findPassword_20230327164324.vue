<template>
  <div class="box">
    <div class="title">
      <el-button type="text" @click="back()"
        ><i class="el-icon-d-arrow-left"> 返回主页</i></el-button
      >
      <span> | 找回密码</span>
    </div>
    <div class="content">
      <!-- 步骤条 -->
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="身份认证"></el-step>
        <el-step title="设置操作"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <!-- 步骤1 -->
      <div v-show="active == 0" class="one">
        <el-form
          :model="ruleForm"
          class="demo-ruleForm"
          label-position="top"
          hide-required-asterisk
        >
        <el-form-item
          prop="email"
          label="请输入您的邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        </el-form>
      </div>
      <div v-show="active == 1">22222</div>
      <div v-show="active == 2">3333333</div>
      <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      ruleForm: {
        email:""
      },
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    back() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* 页头 */
.title {
  height: 100px;
  line-height: 100px;
  box-shadow: 0px 0px 10px #c0c4cc;
}
.title .el-button {
  float: left;
  margin-top: 32px;
  margin-left: 50px;
}
.title i {
  font-size: 20px;
  color: #5f6368;
}
.title i:hover {
  color: #409eff;
}
.title span {
  font-size: 30px;
  float: left;
  margin-left: 10px;
}
/* 页头 */

/* 主体部分 */
.content {
  width: 65%;
  margin: 50px auto;
}

.content .one {
    width: 50%;
    margin: 50px auto;
}
.one .el-form-item__label {
    float: left;
    font-size: 17px;
}
/* 主体部分 */
</style>