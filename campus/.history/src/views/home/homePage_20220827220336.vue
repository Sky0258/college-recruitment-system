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
    </div>
    <!-- 主页3招聘信息框 -->
    <div class="three">
      <h1>Recruitment Information Details</h1>
      <div class="message" v-for="item in info" :key="item.id">
        <div class="msgLeft">
          ID - {{item.id}}
        </div>
        <div class="msgRight">
          <a href="#"><h2>{{item.pdepartment}} | {{item.pclassify}} | {{item.pname}}</h2></a>
          <span>工作内容：{{item.presponsibility}}</span><br>
          <span>工作要求：{{item.prequest}}</span><br><br>
          <span>工作地点：{{item.workSite}}</span><br>
        </div>
      </div>
      <el-button type="text" id="msgBtn">点击查看更多 ></el-button>
    </div>
    <!-- 底部信息栏 -->
    <div class="four"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      info:[{
        "id": 5,
        "workSite": "东华学车",
        "flag": 2,
        "pdescribe": "发传单",
        "pdepartment": "校内",
        "presponsibility": "发完所分配的传单，并向同学们介绍公司的优惠",
        "pclassify": "销售",
        "prequest": "有耐心，认真",
        "pname": "东华学车宣传员"
      },
      {
        "id": 5,
        "workSite": "东华学车",
        "flag": 2,
        "pdescribe": "发传单",
        "pdepartment": "校内",
        "presponsibility": "发完所分配的传单，并向同学们介绍公司的优惠",
        "pclassify": "销售",
        "prequest": "有耐心，认真",
        "pname": "东华学车宣传员"
      },
      {
        "id": 5,
        "workSite": "东华学车",
        "flag": 2,
        "pdescribe": "发传单",
        "pdepartment": "校内",
        "presponsibility": "发完所分配的传单，并向同学们介绍公司的优惠",
        "pclassify": "销售",
        "prequest": "有耐心，认真",
        "pname": "东华学车宣传员"
      },
      {
        "id": 5,
        "workSite": "东华学车",
        "flag": 2,
        "pdescribe": "发传单",
        "pdepartment": "校内",
        "presponsibility": "发完所分配的传单，并向同学们介绍公司的优惠",
        "pclassify": "销售",
        "prequest": "有耐心，认真",
        "pname": "东华学车宣传员"
      }
      ]
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
  height: 70vh;
  background: url("./images/主页2背景.png");
  background-size: 100vw 70vh;
  position: relative;
}
.two .classify {
  width: 88%;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: -20%;
  left: 6%;
  box-shadow: 0 30px 60px 0 rgb(2 2 48 / 8%);

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
  letter-spacing: 1px;
  margin-bottom: 10px;
  color: black;
}
.two li a:hover {
  color: #4c4cf1;
}
.two span {
  color: #5f6368;
  font-size: 14px;
  letter-spacing: 1px;
}

/* 主页招聘信息框 */
.three {
  width: 100%;
  height: 161vh;
  background: url("./images/主页3背景5.png");
  background-size: 100vw 161vh;
  margin-top: 30px;
}
.three h1 {
  color: #0d0d75;
  margin-bottom: 50px;
}
.three .message {
  width: 70%;
  height: 180px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 30px 0 rgb(2 2 48 / 6%);
  display: flex;
  margin-top: 30px;
  border: 1px solid #e0e0e0;
}
.three .msgLeft {
  width: 13%;
  height: 67%;
  border-radius: 67%;
  background-color: #f4f4fe;
  margin: 3% 35px 0 50px;
  font-size: 25px;
  line-height: 120px;
  color: #0d0d75;
}
.three .msgRight {
  font-size: 16px;
  margin-left: 20px;
  letter-spacing: 1px;
}
.three .message a{
  color: #232361;
}
.three .message a:hover {
  color: #4c4cf1;
}
.three .msgRight h2 {
  margin-top: 25px;
  text-align: left;
  font-size: 24px;
  margin-bottom: 10px;
}
.three .msgRight span {
  /* font-size: 16px; */
  float: left;
  margin-top: 6px;
}
.three #msgBtn{
  color: #4c4cf1;
  font-weight: 550;
  font-size: 16px;
  margin-right: -720px;
  margin-top: 10px;
}

.four {
  width: 100%;
  height: 100%;
  background: url("./images/主页4背景.png");
  /* background-size: 100% 100%; */
}
</style>