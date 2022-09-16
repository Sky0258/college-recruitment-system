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

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: url("../person/images/背景2.png");
  background-size: 90% 100%;
  background-position: 70%;
  margin: 0;
}

/* 搜索框 */
.main .search {
  display: flex;
  justify-content: left;
  margin-top: 1rem;
  margin: 0;
}
.main >>> .el-input{
  width: 46%;
  margin: 0 0 0 20rem;
}
.main >>> .el-input__inner {
  width: 100%;
  height: 3.5rem;
  border-radius: 3.5rem;
  border: 0px;
  margin-top: 2rem;
  font-size: 16px;
  padding-left: 35px;
}
.main >>> .el-button {
  height: 3.5rem;
  border-radius: 3.5rem;
  width: 9.5%;
  font-size: 16px;
  font-weight: 700;
  background-color: #0d0d75;
  border: 0;
  margin-top: 2rem;
  margin-left: 10px;
}
</style>