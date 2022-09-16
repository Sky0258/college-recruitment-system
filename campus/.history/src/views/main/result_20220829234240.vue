<template>
  <div class="box">
    <!-- 搜索框 -->
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input"> </el-input>
      <el-button type="primary" round @click="search">Search</el-button>
    </div>
    <!-- 信息框 -->
    <div class="message" v-for="item in info" :key="item.id">
        <div class="msgLeft">
          ID - {{item.id}}
        </div>
        <div class="msgRight">
          <a href="#"><h2>{{item.pdepartment}} | {{item.pclassify}} | {{item.pname}}</h2></a>
          <div>工作内容：{{item.presponsibility}}</div>
          <div>工作要求：{{item.prequest}}</div>
          <div>工作地点：{{item.workSite}}</div>
          <el-button type="warning" icon="el-icon-star-off" circle size="small" id="star" plain></el-button>
          <el-button type="primary" size="small" id="submit">立即投递</el-button>
        </div>  
      </div>
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