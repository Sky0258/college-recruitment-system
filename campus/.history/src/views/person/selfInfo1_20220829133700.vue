<template>
  <div>
    <el-descriptions class="margin-top" :column="3" border>
      <template slot="extra">
        <el-button type="primary">修改个人信息</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-postcard"></i>
          用户ID
        </template>
        {{this.ruleForm.id}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{this.ruleForm.name}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-edit"></i>
          性别
        </template>
        {{this.ruleForm.sex}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-coordinate"></i>
          政治面貌
        </template>
        {{this.ruleForm.poliStatus}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-message"></i>
          电子邮箱
        </template>
        {{this.ruleForm.email}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        {{this.ruleForm.phone}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-document"></i>
          工作意向
        </template>
        {{this.ruleForm.jobIntension}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-paperclip"></i>
          个人介绍
        </template>
        {{this.ruleForm.describes}}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id: "", //在这里直接写原始信息！！！！ token
        name: "",
        sex: "",
        poliStatus: "",
        phone: "",
        email: "",
        jobIntension: "",
        describes: "",
      },
    };
  },
};
</script>

<style>
</style>