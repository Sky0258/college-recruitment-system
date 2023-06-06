<template>
  <div class="box">
    <div class="title">
        <el-button type="text" @click="back()"><i class="el-icon-d-arrow-left"> 返回主页</i></el-button>
        <span> | 找回密码</span>
    </div>
    <div class="content">
        <el-steps :active="1">
  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这段就没那么长了"></el-step>
</el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      back(){
        this.$router.push("/login");
      }
    }
  }
</script>

<style scoped>
/* 页头 */
.title {
    height: 100px;
    line-height: 100px;
    box-shadow: 0px 0px 10px #c0c4cc;
}
.title .el-button {
    float: left;
    margin-top: 32px;
    margin-left: 50px;
}
.title i {
  font-size: 20px;
  color: #5f6368;
}
.title i:hover {
    color: #409eff;
}
.title span {
    font-size: 30px;
    float: left;
    margin-left: 10px;
}
/* 页头 */


/* 主体部分 */
.content {
    width: 30%;
    margin: 50px auto;
}

/* 主体部分 */
</style>