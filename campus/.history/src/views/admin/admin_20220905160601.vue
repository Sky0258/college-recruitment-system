<template>
  <el-container id="content">
    <el-header><admin-header></admin-header></el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import adminHeader from './adminHeader.vue'
export default {
    components:{
        adminHeader,
    }
};
</script>

<style scoped>
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.el-header,
.el-footer {
  height: 30%;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 160px;
}

body >>> .el-container {
  margin-bottom: 40px;
  height: 100%;
}
</style>