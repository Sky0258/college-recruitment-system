<template>
  <div class="box">
    <div class="header">
        <el-button type="text" @click="back()"><i class="el-icon-d-arrow-left"> 返回主页</i></el-button>
    <div class="title">收藏列表</div>
    </div>
    
    <!-- 信息框 -->
    <div class="three">
      <div class="message" v-for="item in info" :key="item.id">
        <!-- <div class="msgLeft">ID - {{ item.id }}</div> -->
        <div class="msgRight">
          <el-button type="text" id="special" @click="show1(item)"
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
          >收藏</el-button>
          <el-button type="primary" size="small" id="submit"
            >立即投递</el-button
          >
        </div>
        <el-dialog
          title="招聘详情信息"
          :visible.sync="dialogVisible1"
          width="40%"
          style="box-shadow:0"
          v-if="cur == item.id"
        >
          <el-descriptions :column="1" size="large" :labelStyle="labelStyle">
            <el-descriptions-item label="职位名称">{{
              item.pname
            }}</el-descriptions-item>
            <el-descriptions-item label="职位分类">{{
              item.pclassify
            }}</el-descriptions-item>
            <el-descriptions-item label="工作地点">{{
              item.pworkSite
            }}</el-descriptions-item>
            <el-descriptions-item label="工作要求">{{
              item.prequest
            }}</el-descriptions-item>
            <el-descriptions-item label="工作部门">{{
              item.pdepartment
            }}</el-descriptions-item>
            <el-descriptions-item label="工作描述">{{
              item.pdescribe
            }}</el-descriptions-item>
             <el-descriptions-item label="工作职责">{{
              item.presponsibility
            }}</el-descriptions-item>
          </el-descriptions>
        </el-dialog>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="footer">
      <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      hide-on-single-page
      background
      :page-size="6"
      layout="total, prev, pager, next"
      :total="totalPage">
    </el-pagination>
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
          id: "",
          workSite: "",
          flag: "",
          pdescribe: "",
          pdepartment: "",
          presponsibility: "",
          pclassify: "",
          prequest: "",
          pname: "",
        },
      ],
      dialogVisible1: false,
      labelStyle: { width: "60px" },
      totalPage: 1,
      currentPage1: 1,
      cur:"",
    };
  },
  mounted() {
    this.showAllLike();
    this.info = this.allLike.records;
  },
  methods:{
    showAllLike() {
      this.$store
        .dispatch("showAllLike", {
          page: 1,
          size: 6,
        })
        .then(() => {
          this.info = this.allLike.records;
          this.totalPage = this.allLike.total;
          console.log(this.totalPage);
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    handleCurrentChange(val) {
      this.$store
        .dispatch("showAllLike", {
          page: val,
          size: 6,
        })
        .then(() => {
          this.info = this.allLike;
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    show1(item){
      this.cur = item.id;
      this.dialogVisible1 = true;
    },
    back() {
      this.$router.push("/homePage");
    },
    likeIt(item) {
      this.$store
        .dispatch("addLike",{
          pid: item.id
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
  },
  computed: {
    ...mapGetters(["allLike"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.box {
  width: 100%;
  height: 100%;
  background: url("../person/images/背景2.png");
  background-size: 90% 100%;
  background-position: 70%;
  margin: 0;
}
/* 标题 */
.header {
    display: flex;
}
.header i {
  font-size: 20px;
  color: #5f6368;
  float: left;
  margin-right: 420px;
  margin-left: 50px;
}
.header i:hover {
  color: #409eff;
}
.title {
    line-height: 60px;
    font-size: 28px;
    color: #0d0d75;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 2px;
}
/* 招聘信息框 */
.three {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.three .message {
  width: 45%;
  height: 143px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 30px 0 rgb(2 2 48 / 6%);
  display: flex;
  margin-top: 10px;
  margin-left: 30px;
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
  margin-top: 10px;
  text-align: left;
  font-size: 18px;
  margin-bottom: 3px;
}
.three .msgRight div {
  font-size: 14px;
  float: left;
  width: 520px;
  margin-top: 4px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.three .msgRight >>> #submit {
  float: right;
  margin-right: 20px;
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
  margin-top: 0px;
}
.three #like {
  float: right;
  margin-right: 30px;
}
/* 分页器 */
.footer {
    position: absolute;
    bottom: 10px;
    left: 35%;
}
</style>