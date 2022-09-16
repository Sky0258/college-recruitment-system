<template>
  <div class="common-layout">
    <el-page-header @back="goBack" content="详情页面">
</el-page-header>
    <el-container>
      <el-header>个人中心</el-header>
       <!-- <el-divider></el-divider> -->
      <el-container>
        <el-aside width="20%"><person-aside></person-aside></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import personAside from './personSide.vue'
export default {
    components:{
        personAside
    }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.common-layout {
  width: 100%;
  height: 100%;
  background: url("./images/背景2.png");
  background-size: 90% 100%;
  background-position: 70%;
  margin: 0;
}
.common-layout .el-contain {
    height: 100%;
}
.el-aside {
    height: 100%;
}
.el-header {
    line-height: 60px;
    font-size: 28px;
    color: #0d0d75;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 2px;
    /* border-bottom: 1px solid #e0e0e0; */
}
</style>