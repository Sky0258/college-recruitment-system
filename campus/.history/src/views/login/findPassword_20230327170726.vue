<template>
  <div class="box">
    <div class="title">
      <el-button type="text" @click="back()"
        ><i class="el-icon-d-arrow-left"> 返回登录页</i></el-button
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
        <el-button style="margin-top: 15px" @click="sub1(ruleForm)" type="primary">点击发送验证码</el-button>
        </el-form>
      </div>

      <!-- 步骤2 -->
      <div v-show="active == 1" class="two">
        <el-form
        :model="ruleForm1"
        ref="ruleForm1"
        class="demo-ruleForm"
        :rules="rules"
        label-position="left"
        label-width="60px"
        hide-required-asterisk
      >
        <el-form-item
          label="用户名"
          prop="username"
          :rules="{
            required: true,
            message: '名字不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="code"
          :rules="{
            required: true,
            message: '验证码不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.code" autocomplete="off"></el-input>
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
            v-model="ruleForm1.password"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm1.checkPass"
            show-password
            auto-complete="new-password"
          ></el-input>
        </el-form-item>
        <!-- 注册表单按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button>
        </el-form-item>
      </el-form>
      </div>
      <div v-show="active == 2">3333333</div>
      
    </div>
  </div>
</template>

<script>
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
      active: 0,
      ruleForm: {
        email:""
      },
      ruleForm1: {
        username: "",
        code:"",
        password: "",
        checkPass: "",
      },
      rules: {
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    sub1(ruleForm){
        if (this.active++ > 2) this.active = 0;
        console.log(ruleForm.email);
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

.content .one,.two{
    width: 50%;
    margin: 50px auto;
}
.one .el-form--label-top>>>.el-form-item__label {
    float: left;
    font-size: 17px;
    font-weight: 800;
}

/* 主体部分 */
</style>