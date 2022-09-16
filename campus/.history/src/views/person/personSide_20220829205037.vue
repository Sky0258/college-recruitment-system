<template>
  <div class="tac">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="homePage"
      >
       <el-menu-item index="homePage" route="/selfInfo1" @click="selfIfo()" style="margin-top: 20px">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="2" @click="award()">
        <i class="el-icon-medal"></i>
        <span slot="title">获奖情况</span>
      </el-menu-item>
      <el-menu-item index="3" @click="level()">
        <i class="el-icon-document-copy"></i>
        <span slot="title">学历信息</span>
      </el-menu-item>
      <el-menu-item index="4" @click="project()">
        <i class="el-icon-box"></i>
        <span slot="title">项目信息</span>
      </el-menu-item>
      <el-menu-item index="5" @click="upload()">
        <i class="el-icon-upload"></i>
        <span slot="title">上传简历</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    mounted(){
        this.selfIfo();
    },
    methods: {
      selfIfo(){
        this.$router.push('/selfInfo1');
      },
      award(){
        this.$router.push('/award');
      },
      level(){
        this.$router.push('/level');
      },
      project(){
        
      },
      upload(){
        this.$router.push('/upload');
      }
    }
  }
</script>
<style scoped>
.tac {
    width: 100%;
    height: 321px;
    margin: 0;
    margin-top: 40%;
    background-color: #fff;
    padding: 0;
}
</style>