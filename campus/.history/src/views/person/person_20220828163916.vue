<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.common-layout {
  height: 100%;
  width: 100%;
}
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  width: 100%;
  height: 20%;
}
.el-main {
  /* background-color: #f4f5f5; */
  color: #333; 
  text-align: center;
  /* line-height: 160px; */
  width: 100%;
}
</style>