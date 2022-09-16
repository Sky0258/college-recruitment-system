<template>
  <div class="contain">
    <div class="one">
      <!-- 头部导航栏 -->
      <div class="header">
        <span class="left">高校招聘管理系统</span>
        <ul class="right">
          <li><a href="#">主页</a></li>
          <li><a href="#">公告</a></li>
          <li><a href="#">分类</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">个人中心</a></li>
        </ul>
      </div>
      <!-- 主体搜索框 -->
      <div class="main">
        <h1>How Can We Help You?</h1>
        <h2>Search here to get the position you need</h2>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="input">
          </el-input>
          <el-button type="primary" round @click="search">Search</el-button>
        </div>
      </div>
    </div>
    <!-- 主体2分类框 -->
    <div class="two">
      <div class="classify">
        <ul>
          <li class="left">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon1.png"/>
            <div>
              <a href="#">校外工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li>
            <img src="	https://html.spiderthemes-demos.com/docy/img/new/icon2.png"/>
            <div>
              <a href="#">校内工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon3.png"/>
            <div>
              <a href="#">校外工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li class="left">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon4.png"/>
            <div>
              <a href="#">校外工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon5.png"/>
            <div>
              <a href="#">校外工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon6.png"/>
            <div>
              <a href="#">校外工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li class="left bottom">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon7.png"/>
            <div>
              <a href="#">校外工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li class="bottom">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon8.png"/>
            <div>
              <a href="#">校外工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li class="bottom">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon9.png"/>
            <div>
              <a href="#">校内工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    search() {
      this.$store
        .dispatch("contentSearch", this.input)
        .then(() => {
        })
        .catch(() => {
          this.$message.error('错误！');
        });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
* {
  margin: 0 auto;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.contain {
  width: 100%;
}
.one {
  width: 100%;
  height: 113vh;
  background: url("./images/背景图5.png");
  background-size: 100% 113vh;
  /* position: fixed; */
  /* min-width: 100%;
  min-height: 100%; */
  /* background-attachment: fixed; */
}

/* 头部 */
.one .header ul {
  display: inline-flex;
}
.one .header li {
  color: white;
  font-size: 1.1rem;
  margin-left: 2rem;
}
.header {
  display: flex;
}
.header .left {
  justify-content: left;
  font-size: 21px;
  font-weight: 600;
  color: white;
  margin-left: 4rem;
  margin-top: 2.5rem;
}
.header .right {
  justify-content: right;
}
.header .right a {
  display: block;
  height: 3.8rem;
  line-height: 6rem;
  color: white;
}
.header .right a:hover {
  border-bottom: 2px solid white;
  transition: all 0.2s ease-out 0s;
}


/* 主体搜索框 */
.one .main h1 {
  color: white;
  margin-top: 10.5rem;
  font-weight: 700;
  font-size: 37px;
}
.one .main h2 {
  color: white;
  font-weight: 100;
  margin-top: 1rem;
}
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

/* 主体分类框 */
.two {
  width: 100%;
  height: 70%;
  background: url("./images/主页2背景.png");
  background-size: 100% 70%;
  position: relative;
}
.two .classify {
  width: 88%;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: -15%;
  left: 6%;
}
.two ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: left; */
}
.two li {
  flex-shrink: 0;
  width: 33%;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  display: flex;
  height: 135px;
}
.two .left {
  border-left: 0px;
}
.two .bottom {
  border-bottom: 0px;
}
.two img {
  width: 50px;
  height: 45px;
  margin: auto 40px;
  margin-right: 20px;
}
.two li div {
  margin-left: 0px;
}
.two li a {
  display: block;
  font-weight: 600;
  margin-top: 42px;
  text-align: left;
  font-size: 18px;
  margin-bottom: 10px;
  color: black;
}
.two li a:hover {
  color: #4c4cf1;
}
.two span {
  color: #5f6368;
  font-size: 14px;
}
</style>