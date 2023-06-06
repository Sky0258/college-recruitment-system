<template>
  <div class="box">
    <div class="title">
        <el-button type="text" @click="back()"><i class="el-icon-d-arrow-left"> 返回主页</i></el-button>
        <span> | 找回密码</span>
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
.title span {
    font-size: 30px;
    float: left;
    margin-left: 100px;
}
</style>