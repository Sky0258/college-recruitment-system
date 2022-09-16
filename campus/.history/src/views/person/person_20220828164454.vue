<template>
  <div class="common-layout">
    <el-container>
      <el-header>个人中心</el-header>
      <el-container>
        <el-aside width="20%"><person-aside></person-aside></el-aside>
        <el-main>Main</el-main>
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

</style>