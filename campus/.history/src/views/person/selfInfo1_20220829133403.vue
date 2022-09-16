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
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-edit"></i>
        性别
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-coordinate"></i>
        政治面貌
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-message"></i>
        电子邮箱
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-document"></i>
        工作意向
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-paperclip"></i>
        个人介绍
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
  </el-descriptions>
  
  </div>
</template>

<script>
export default {
    data:{
        return {
        ruleForm: {
        id: "", //在这里直接写原始信息！！！！ token
        name: "",
        sex: "",
        poliStatus: "",
        phone:"",
        email:"",
        jobIntension:"",
        describes: "",
      },
        }
    }
}
</script>

<style>

</style>