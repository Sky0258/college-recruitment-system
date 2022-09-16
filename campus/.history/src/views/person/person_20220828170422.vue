<template>
  <div class="common-layout">
    <el-container>
      <el-header>个人中心</el-header>
      <el-container>
        <el-aside width="20%"><person-aside></person-aside></el-aside>
        <el-main></el-main>
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
  height: 110%;
  /* background: url("../home/images/背景图5.png"); */
  background-size: 100% 100%;
  /* position: fixed; */
  /* min-width: 100%;
  min-height: 100%; */
  /* background-attachment: fixed; */
}
</style>