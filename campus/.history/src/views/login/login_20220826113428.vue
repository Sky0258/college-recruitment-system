<template>
  <div class="box">
    <div class="form">
        <h2>登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="left"
        id="loginForm"
        hide-required-asterisk
      >
        <el-form-item label="name" prop="name" :rules="{
            required: true,
            message: '账号不能为空',
            trigger: 'blur',
          }">
          <el-input
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password"
          :rules="{
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          }">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="checkCode" prop="checkCode" :rules="{
            required: true,
            message: '验证码不能为空',
            trigger: 'blur',
          }">
          <el-input v-model="ruleForm.checkCode" style="width: 8.7rem;float: left"></el-input>
        <img src="/api/user/checkCode" alt="" style="float: right">
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
import axios from "axios"
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        name:"",
        password:"",
        checkCode:""
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        let data = {
            checkCode: "92E2",
            name: "Sky",
            password: "123456"
        };
        if (valid) {
          this.$store.dispatch("userLogin", this.ruleForm)
                .then(() => {
                    console.log('11111111');
                })
            .catch(() => {
              this.$message.error('登陆失败！');
            //   this.check();
            });
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
  background: url("./images/背景8.png");
  background-size: 100% 100%;
  position: fixed;
  background-attachment: fixed;
}
.form {
    width: 27%;
    height: 70%;
    float: right;
    margin-right: 10vw;
    margin-top: 10%;
}
h2 {
    font-size: 26px;
    margin-bottom: 3rem;
}
#loginForm >>> .el-form-item__label {
    font-size: 16px;
    font-weight: 700;
}
</style>