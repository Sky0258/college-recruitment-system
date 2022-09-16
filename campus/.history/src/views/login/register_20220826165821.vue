<template>
  <div class="box">
    <!-- 路由跳转到登录 -->
    <div class="msg">
      <span>已经有账号了？点击下方按钮跳转登录</span><br />
      <el-button type="primary" @click="login">登录</el-button>
    </div>

    <!-- 注册表单 -->
    <div class="form">
      <h2>用户注册</h2>
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="76px"
        class="demo-ruleForm"
        label-position="left"
        id="loginForm"
        :rules="rules"
        hide-required-asterisk
      >
        <el-form-item
          label="姓名"
          prop="name"
          :rules="{
            required: true,
            message: '名字不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
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
        <el-form-item
          label="密码"
          prop="password"
          :rules="{
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          }"
        >
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            show-password
            auto-complete="new-password"
          ></el-input>
        </el-form-item>
        <!-- 注册表单按钮 -->
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
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        password: "",
        checkPass: "",
        email:""
      },
      rules: {
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("userRegister", this.ruleForm)
            .then(() => {
              console.log("11111111");
            })
            .catch(() => {
              this.$message.error("注册失败！");
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
  background: url("./images/背景7.png");
  background-size: 100% 100%;
  position: fixed;
  background-attachment: fixed;
}
.form {
  width: 27%;
  height: 70%;
  float: left;
  margin-left: 10vw;
  margin-top: 10%;
}
h2 {
  font-size: 26px;
  margin-bottom: 2rem;
}
#loginForm >>> .el-form-item__label {
  font-size: 16px;
  font-weight: 700;
}
#loginForm >>> .el-button {
  font-size: 15px;
  border-radius: 10px;
}
.msg {
  color: #fff;
  font-size: 17px;
  display: inline;
  margin-top: 3rem;
  width: 30%;
  float: right;
  margin-right: 4rem;
}
.msg >>> .el-button {
  background: rgb(0, 0, 0, 0);
  border: 2px solid white;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 550;
  margin-top: 1rem;
}
</style>