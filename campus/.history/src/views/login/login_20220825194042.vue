<template>
  <div class="box">
    <div class="form">
        <h3>登录</h3>
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="pass" :rules="{
            required: true,
            message: '账号不能为空',
            trigger: 'blur',
          }">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  background: url("./images/背景4.png");
  background-size: 100% 100%;
  position: fixed;
  background-attachment: fixed;
}
.form {
    width: 28%;
    height: 70%;
    float: right;
    margin-right: 10vw;
    margin-top: 10%;
}
</style>