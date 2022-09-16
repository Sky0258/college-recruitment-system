<template>
  <div class="box">
    <!-- 搜索框 -->
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input"> </el-input>
      <el-button type="primary" round @click="search">Search</el-button>
    </div>
    <!-- 信息框 -->
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  width: 100%;
  height: 100%;
  background: url("../person/images/背景2.png");
  background-size: 90% 100%;
  background-position: 70%;
  margin: 0;
}
</style>