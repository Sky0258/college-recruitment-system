<template>
  <el-container id="content">
    <el-header><admin-header></admin-header></el-header>
    <el-container>
      <el-aside width="240px"><admin-aside></admin-aside></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import adminHeader from './adminHeader.vue'
import adminAside from  './adminAside.vue'
export default {
    components:{
        adminHeader,
        adminAside
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
  background-color: #fbf6f0;
}
.el-header {
  /* background-color: #b3c0d1; */
  /* color: #333; */
  /* line-height: 80px; */
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 30px 60px 0 rgb(2 2 48 / 8%);
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #fbf6f0;
  color: #333;
  line-height: 160px;
}

body >>> .el-container {
  margin-bottom: 40px;
  height: 100%;
}
</style>