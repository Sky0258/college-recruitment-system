<template>
  <div class="contain">
    <div class="one" id="top">
      <!-- 头部导航栏 -->
      <div class="header">
        <span class="left">如梦之舟就业引航系统</span>
        <ul class="right">
          <li v-show="this.selfInfo.rid != 1"><router-link :to="{path:'/admin'}">后台系统</router-link></li>
          <!-- <li><router-link href="#classify">分类</router-link></li> -->
          <li class="recommend"><router-link :to="{path:'/recommend'}">为你推荐</router-link></li>
          <!-- <li><router-link href="#about">关于我们</router-link></li> -->
          <li><router-link :to="{path:'/Like'}">收藏列表</router-link></li>
          <li><router-link :to="{path:'/apply'}">申请列表</router-link></li>
          <li><router-link :to="{path:'/person'}">个人中心</router-link></li>
          <li>
            <el-tooltip
              class="item"
              effect="dark"
              content=" 点击注销登录 "
              placement="bottom"
            >
             <el-button id="spe" round @click="close()"
              >欢迎你,{{ this.selfInfo.name }}</el-button
            >
            </el-tooltip>
          </li>
        </ul>
      </div>
      <!-- 主体搜索框 -->
      <div class="main">
        <h1>How Can We Help You?</h1>
        <h2>Search here to get the position you need</h2>
        <div class="search" id="classify">
          <el-input placeholder="请输入内容" v-model="input"> </el-input>
          <el-button type="primary" round @click="search()">Search</el-button>
        </div>
      </div>
    </div>
    <!-- 主体2分类框 -->
    <div class="two">
      <div class="classify">
        <ul>
          <li class="left">
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/icon1.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >校外工作</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
          <li>
            <img
              src="	https://html.spiderthemes-demos.com/docy/img/new/icon2.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >校内工作</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
          <li>
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/icon3.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >教育工作</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
          <li class="left">
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/icon4.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >销售工作</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
          <li>
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/icon5.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >技术工作</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
          <li>
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/icon6.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >管理工作</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
          <li class="left bottom">
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/icon7.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >勤工俭学</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
          <li class="bottom">
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/icon8.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >写作工作</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
          <li class="bottom">
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/icon9.png"
            />
            <div>
              <el-button type="text" @click="seeMore($event)"
                >志愿工作</el-button
              >
              <span>200条相关信息</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 主页3招聘信息框 -->
    <div class="three" id="Message">
      <h1>Recruitment Information Details</h1>
      <div class="message" v-for="item in info" :key="item.id">
        <div class="msgLeft">ID - {{ item.id }}</div>
        <div class="msgRight">
          <el-button id="special" type="text" @click="show1(item)"
            ><h2>
              {{ item.pdepartment }} | {{ item.pclassify }} | {{ item.pname }}
            </h2></el-button
          >
          <div>工作内容：{{ item.presponsibility }}</div>
          <div>工作要求：{{ item.prequest }}</div>
          <div>工作地点：{{ item.pworkSite }}</div>
          <el-button
            type="warning"
            icon="el-icon-star-off"
            size="small"
            id="like"
            @click="likeIt(item)"
            >收藏</el-button
          >
          <el-button
            type="primary"
            size="small"
            id="submit"
            @click="apply(item.id)"
            >立即投递</el-button
          >
        </div>
        
      </div>
      <el-dialog
          title="招聘详情信息"
          :visible.sync="dialogVisible"
          width="40%"
        >
          <el-descriptions :column="1" size="large" :labelStyle="labelStyle">
            <el-descriptions-item label="职位名称">{{
              info1.pname
            }}</el-descriptions-item>
            <el-descriptions-item label="职位分类">{{
              info1.pclassify
            }}</el-descriptions-item>
            <el-descriptions-item label="工作地点">{{
              info1.pworkSite
            }}</el-descriptions-item>
            <el-descriptions-item label="工作要求">{{
              info1.prequest
            }}</el-descriptions-item>
            <el-descriptions-item label="工作部门">{{
              info1.pdepartment
            }}</el-descriptions-item>
            <el-descriptions-item label="工作描述">{{
              info1.pdescribe
            }}</el-descriptions-item>
            <el-descriptions-item label="工作职责">{{
              info1.presponsibility
            }}</el-descriptions-item>
          </el-descriptions>
        </el-dialog>
        <el-dialog
          id="submitDialog"
          title="提交工作申请"
          :visible.sync="infoDialogVisible"
          width="35%"
        >
          <el-form
            :model="ruleForm1"
            ref="ruleForm1"
            label-width="80px"
            class="demo-ruleForm"
            hide-required-asterisk
          >
            <el-form-item
              label="用户名"
              prop="username"
            >
              <el-input v-model="ruleForm1.username" disabled></el-input>
            </el-form-item>
            <el-form-item
              label="电子邮箱"
              prop="email"
              id="dialogItem"
              :rules="[
                {
                  required: true,
                  message: '请输入邮箱地址',
                  trigger: 'blur',
                },
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="ruleForm1.email"></el-input>
            </el-form-item>
            <el-form-item
              label="手机号码"
              prop="phone"
              id="dialogItem"
              :rules="{
                required: true,
                message: '手机号码不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.phone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm1')" id="dialogButton"
                >提交申请</el-button
              >
              <el-button @click="resetForm('ruleForm1')" id="dialogButton">重置</el-button>
              <el-button @click="infoDialogVisible = false" id="dialogButton">取 消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      <el-button type="text" id="msgBtn" @click="showMore()"
        >点击查看更多 ></el-button
      >
    </div>
    <!-- 底部信息栏 -->
    <div class="four" id="about">
      <div class="footerLeft">
        <h2>如梦之舟就业引航系统</h2>
        <span>为解决高校大学生就业、勤工俭学的需求提供支持</span>
      </div>
      <div class="footerRight">
        <ul>
          <li class="title">Solution</li>
          <li>
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/smile2.png"
              alt=""
            />
            <span>Help Docs</span>
          </li>
          <li>
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/doc2.png"
              alt=""
            />
            <span>Docbuzz</span>
          </li>
          <li>
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/house2.png"
              alt=""
            />
            <span>User Frontend</span>
          </li>
          <li>
            <img
              src="https://html.spiderthemes-demos.com/docy/img/new/bag2.png"
              alt=""
            />
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
      info: [
        {
          id: "1",
          pworkSite: "",
          flag: "",
          pdescribe: "",
          pdepartment: "",
          presponsibility: "",
          pclassify: "",
          prequest: "",
          pname: "",
        },
      ],
      info1: {
        id: "",
        pworkSite: "",
        flag: "",
        pdescribe: "",
        pdepartment: "",
        presponsibility: "",
        pclassify: "",
        prequest: "",
        pname: "",
      },
      ruleForm1: {
        email: "",
        phone: "",
        pid: "",
        username: "",
      },
      cur: "",
      labelStyle: { width: "60px" },
      dialogVisible: false,
      infoDialogVisible: false,
      workId: "",
    };
  },
  mounted() {
    this.showAllPosition();
    this.info = this.allPosition;
    this.getSelfInfo();
  },
  methods: {
    getSelfInfo() {
      this.$store
        .dispatch("getSelfInfo")
        .then(() => {
          this.ruleForm = this.selfInfo;
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    search() {
      this.$store
        .dispatch("contentSearch", {
          pClassify: this.input,
        })
        .then(() => {
          this.$router.push("/searchRes");
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    showAllPosition() {
      this.$store
        .dispatch("showAllPosition", {
          page: 1,
          size: 4,
        })
        .then(() => {})
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    seeMore(event) {
      let val = event.currentTarget.innerHTML.match(
        /(<span>=?)(\S*)(?=<\/span>)/
      )[2];
      console.log(val.substr(0, 2));
      this.$store
        .dispatch("contentSearch", {
          pClassify: val.substr(0, 2),
        })
        .then(() => {
          this.$router.push("/searchRes");
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    showMore() {
      this.$router.push("/result");
    },
    show1(item) {
      // console.log(item);
      this.info1 = item;
      this.cur = item.id;
      console.log(this.info1);
      this.dialogVisible = true;
    },
    close1() {
      this.dialogVisible = false;
    },
    apply(workId) {
      this.infoDialogVisible = true;
      this.ruleForm1.pid = workId;
      this.ruleForm1.username  = this.selfInfo.name;
    },
    resetForm(formName) {
      this.$refs[formName][0].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("addWork", this.ruleForm1)
            .then(() => {
              this.$message({
                message: "申请成功！",
                type: "success",
              });
              this.infoDialogVisible = false;
            })
            .catch(() => {
              this.$message.error("错误！");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    likeIt(item) {
      this.$store
        .dispatch("addLike", {
          pid: item.id,
        })
        .then(() => {
          this.$message({
            message: "收藏成功！",
            type: "success",
          });
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    close() {
      this.$message({
            message: "注销成功！",
            type: "success",
          });
       this.$router.push("/login");
    }
  },
  computed: {
    ...mapGetters(["allPosition", "selfInfo"]),
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
  margin-right: 0;
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

.header .right .recommend a {
  color: white;
  font-family: "华文彩云";
  font-size: 26px;
  text-shadow:  0px 0px 10px black;
}

.header .right #spe {
  color: #4c4cf1;
  font-size: 14px;
  font-weight: 550;
  letter-spacing: 0.5px;
  margin-top: 25px;
  margin-right: 35px;
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
.main >>> .el-input {
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
.two li .el-button {
  display: block;
  font-weight: 600;
  margin-top: 33px;
  text-align: left;
  font-size: 18px;
  letter-spacing: 1px;
  /* margin-bottom: 10px; */
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
  height: 190px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 30px 0 rgb(2 2 48 / 6%);
  display: flex;
  margin-top: 30px;
  border: 1px solid #e0e0e0;
}
.three .msgLeft {
  width: 120px;
  height: 65%;
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
.three .message #special {
  color: #232361;
  width: 100%;
  margin: 0;
  padding: 0;
}
.three .message #special:hover {
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
  margin-top: 6px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.three .msgRight >>> #submit {
  display: block;
  padding: 10px;
  float: right;
  margin-right: 20px;
}
.three .msgRight >>> #like {
  display: block;
  padding: 10px;
}
.three .msgRight >>> #star {
  margin-right: 80px;
  float: right;
  /* background-color: red; */
}
.three #msgBtn {
  color: #4c4cf1;
  font-weight: 550;
  font-size: 16px;
  margin-right: -720px;
  margin-top: 10px;
}
.three .message >>> .el-dialog__wrapper {
  transition-duration: 0.3s;
}
.three #like {
  float: right;
  margin-right: 15px;
}

#submitDialog #dialogItem {
  margin-top: 10px;
}
#submitDialog>>>.el-button {
  display: block;
  padding: 10px;
  margin-top: 10px;
  float: left;
}
/* 底部栏目 */
.four {
  width: 100%;
  height: 60vh;
  background: url("./images/主页4背景1.png");
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
.footerRight ul span {
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