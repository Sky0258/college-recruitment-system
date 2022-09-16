<template>
  <div>
    <el-row class="tac">
  <el-col :span="12">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="1"
      >
       <el-menu-item index="1">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-medal"></i>
        <span slot="title">获奖情况</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document-copy"></i>
        <span slot="title">学历信息</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-upload"></i>
        <span slot="title">上传简历</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </div>
</template>
<script>
  export default {
    methods: {
      
    }
  }
</script>
<style scoped>
.tac {
    width: 100%;
    /* height: 1000px; */
    margin-top: 10%;
}
</style>