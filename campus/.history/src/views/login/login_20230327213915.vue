<template>
  <div class="box">
    <!-- 路由跳转到注册 -->
    <div class="msg">
      <span>还没有账号？点击下方按钮进行注册</span><br />
      <el-button type="primary" @click="register">注册</el-button>
    </div>

    <!-- 登录表单 -->
    <div class="form">
      <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="left"
        id="loginForm"
        hide-required-asterisk
      >
        <el-form-item
          label="name"
          prop="name"
          :rules="{
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="password"
          prop="password"
          :rules="{
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          }"
        >
          <el-input
            type="password"
            show-password
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="checkCode"
          prop="checkCode"
          :rules="{
            required: true,
            message: '验证码不能为空',
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="ruleForm.checkCode"
            style="width: 8.7rem; float: left"
          ></el-input>
          <img :src="address" alt="" style="float: right" @click="check()" />
        </el-form-item>
        <!-- 登录表单按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <router-link :to="{path:'/findPassword'}">忘记密码，点击验证</router-link>
      </el-form>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      address: "/api/user/checkCode",
      ruleForm: {
        name: "",
        password: "",
        checkCode: "",
      },
    };
  },
  methods: {
    register() {
      this.$router.push("/register");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("userLogin", this.ruleForm)
            .then(() => {
              this.$message({
                message: "登录成功！",
                type: "success",
              });
              // 根据 token 获取用户信息
              this.$store
                .dispatch("getSelfInfo")
                .then(() => {
                  if(selfInfo.roleId == 1){
                    this.$router.push("/homePage");
                  }else {
                    this.$router.push("/admin");
                  }
                })
                .catch(() => {
                  this.$message.error("错误！");
                });
              
            })
            .catch(() => {
              this.$message.error(this.message);
              this.check();
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
    check() {
      this.address = "/api/user/checkCode?time" + Date.now();
    },
  },
  computed: {
    ...mapGetters(["message","selfInfo"]),
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
  margin-top: 4rem;
  width: 30%;
  float: left;
  margin-left: 4rem;
}
.msg >>> .el-button {
  background: rgb(0, 0, 0, 0);
  border: 2px solid white;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 550;
  margin-top: 1rem;
}

.form a {
  float: right;
  font-size: 14px;
  color: #5f6368;
  text-decoration: none;
}
</style>