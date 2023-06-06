<template>
  <div class="box">
    <div class="title">
        <el-button type="text" @click="back()"><i class="el-icon-d-arrow-left"> 返回主页</i></el-button>
        <span> | 找回密码</span>
    </div>
    <div class="content">
        <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
.title span {
    font-size: 30px;
    float: left;
    margin-left: 10px;
}
</style>