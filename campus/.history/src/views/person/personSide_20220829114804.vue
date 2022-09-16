<template>
  <div class="tac">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="1"
      >
       <el-menu-item index="homePage" @click="selfIfo()">
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
  </div>
</template>
<script>
  export default {
    methods: {
      selfIfo(){
        this.$router.push('/selfInfo');
      }
    }
  }
</script>
<style scoped>
.tac {
    width: 100%;
    height: 300px;
    margin: 0;
    /* margin-top: 40%; */
    background-color: black;
    padding: 0;
}
</style>