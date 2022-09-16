<template>
  <div class="contain">
    <el-button @click="showAllPosition">点击</el-button>
    <div class="one">
      <!-- 头部导航栏 -->
      <div class="header">
        <span class="left">高校招聘管理系统</span>
        <ul class="right">
          <li><a href="#">主页</a></li>
          <li><a href="#">公告</a></li>
          <li><a href="#">分类</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="http://localhost:10010/#/person">个人中心</a></li>
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
              <a href="#">教学工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li class="left">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon4.png"/>
            <div>
              <a href="#">宣传工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon5.png"/>
            <div>
              <a href="#">技术工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon6.png"/>
            <div>
              <a href="#">管理工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li class="left bottom">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon7.png"/>
            <div>
              <a href="#">勤工俭学</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li class="bottom">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon8.png"/>
            <div>
              <a href="#">写作工作</a>
              <span>200条相关信息</span>
            </div>   
          </li>
          <li class="bottom">
            <img src="https://html.spiderthemes-demos.com/docy/img/new/icon9.png"/>
            <div>
              <a href="#">志愿工作</a>
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
          <div>工作内容：{{item.presponsibility}}</div>
          <div>工作要求：{{item.prequest}}</div>
          <div>工作地点：{{item.workSite}}</div>
        </div>
      </div>
      <el-button type="text" id="msgBtn">点击查看更多 ></el-button>
    </div>
    <!-- 底部信息栏 -->
    <div class="four">
      <div class="footerLeft">
        <h2>高校招聘管理系统</h2>
        <span>为解决高校大学生就业、勤工俭学的需求提供支持</span>
      </div>
      <div class="footerRight">
        <ul>
          <li class="title">Solution</li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/smile2.png" alt="">
            <span>Help Docs</span>
          </li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/doc2.png" alt="">
            <span>Docbuzz</span>
          </li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/house2.png" alt="">
            <span>User Frontend</span>
          </li>
          <li>
            <img src="https://html.spiderthemes-demos.com/docy/img/new/bag2.png" alt="">
            <span>Lightbox</span>
          </li>
        </ul>
        <ul>
          <li class="title">Support</li>
          <li>Help Desk</li>
          <li>Knowledge Base</li>
          <li>Live Chat</li>
          <li>Reports</li>
        </ul>
        <ul>
          <li class="title">About Us</li>
          <li>Testimonials</li>
          <li>Affiliates</li>
          <li>Partners</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
        "id": 6,
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
        "id": 7,
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
        "id": 8,
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
  created() {
    // this.getMenuList();
    this.showAllPosition();
    this.info = this.allPosition;
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
    showAllPosition() {
      this.$store
        .dispatch("showAllPosition",{
          page: 1,
          size: 3
        })
        .then(() => {
        })
        .catch(() => {
          this.$message.error('错误！');
        });
    }
  },
  computed: {
    ...mapGetters(["allPosition"]),
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
  width: 120px;
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
  width: 640px;
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
.three .msgRight div {
  /* font-size: 16px; */
  float: left;
  width: 610px;
  /* margin-top: 6px; */
  text-align: left;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
.three #msgBtn{
  color: #4c4cf1;
  font-weight: 550;
  font-size: 16px;
  margin-right: -720px;
  margin-top: 10px;
}

/* 底部栏目 */
.four {
  width: 100%;
  height: 60vh;
  background: url("./images/主页4背景.png");
  background-size: 100% 60vh;
  display: flex;
}
.footerLeft {
  width: 20%;
  margin: 0 70px;
  margin-top: 130px;
}
.footerLeft h2 {
  color: #232361;
}
.footerLeft span {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  color: #6b7082;
  font-weight: 600;
}
.footerRight {
  display: flex;
  margin-top: 110px;
}
.footerRight ul {
  margin-left: 50px;
}
.footerRight li {
  margin-top: 20px;
  width: 200px;
  text-align: left;
  display: flex;
  color: #6c7688;
}
.footerRight img {
  /* display: block; */
  margin: 0px;
  margin-right: 18px;
  width: 20px;
  height: 20px;
  /* margin-top: 15px; */
}
.footerRight  ul span {
  margin: 0;
  color: #6c7688;
}
.footerRight ul .title {
  font-size: 18px;
  color: #232361;
  font-weight: 600;
  text-align: center;
}
</style>