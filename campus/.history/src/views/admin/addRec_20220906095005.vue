<template>
  <div class="box">
    <el-form
      :model="ruleForm1"
      ref="ruleForm1"
      label-width="80px"
      class="demo-ruleForm"
      hide-required-asterisk
    >
      <el-form-item
        label="工作名称"
        prop="pname"
        :rules="{
          required: true,
          message: '工作名称不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="ruleForm1.pname"></el-input>
      </el-form-item>
      <el-form-item
        label="工作分类"
        prop="pclassify"
        :rules="[
          {
            required: true,
            message: '请输入该招聘信息的类别',
            trigger: 'blur',
          },
        ]"
      >
        <el-input v-model="ruleForm1.pclassify"></el-input>
      </el-form-item>
      <el-form-item
        label="工作部门"
        prop="pdepartment"
        :rules="{
          required: true,
          message: '工作部门不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="ruleForm1.pdepartment"></el-input>
      </el-form-item>
      <el-form-item
        label="是否校内"
        prop="pflag"
        :rules="[
          {
            required: true,
            message: '请输入该工作是否为校内工作，校外为1，校内为2',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="ruleForm1.pflag"
          placeholder="校外为1，校内为2"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="工作描述"
        prop="pdescribe"
        :rules="{
          required: true,
          message: '工作描述不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="ruleForm1.pdescribe"></el-input>
      </el-form-item>
      <el-form-item
        label="人员要求"
        prop="prequest"
        :rules="{
          required: true,
          message: '人员要求不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="ruleForm1.prequest"></el-input>
      </el-form-item>
      <el-form-item
        label="工作职责"
        prop="presponsibility"
        :rules="{
          required: true,
          message: '工作职责不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="ruleForm1.presponsibility"></el-input>
      </el-form-item>
      <el-form-item
        label="工作地点"
        prop="pworkSite"
        :rules="{
          required: true,
          message: '工作地点不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="ruleForm1.pworkSite"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm1')"
          >确认修改</el-button
        >
        <el-button @click="resetForm('ruleForm1')">重置</el-button>
        <el-button @click="infoDialogVisible = false">取 消</el-button>
      </el-form-item>
    </el-form>
    <img src="./images/poster2.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm1: {
        id: "",
        pclassify: "",
        pdepartment: "",
        pdescribe: "",
        pflag: "",
        pname: "",
        prequest: "",
        presponsibility: "",
        pworkSite: "",
      },
    };
  },
  methods:{
     resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
};
</script>

<style scoped>
.box {
  width: 90%;
  /* border: 1px solid #e0e0e0; */
  /* background-color: #fff; */
  border-radius: 15px;
  text-align: center;
  margin-left: 60px;
  display: flex;
  height: 99%;
}
.el-form {
  width: 60%;
  background-color: #fff;
  border-radius: 15px;
  /* margin: 20px auto 0; */
  border: 1px solid #e0e0e0;
  padding: 28px 40px;
  margin-right: 30px;
}
.el-form-item {
  margin-bottom: 19px;
}
img {
  width: 40%;
  height: 102%;
  margin-right: 35px;
}
</style>