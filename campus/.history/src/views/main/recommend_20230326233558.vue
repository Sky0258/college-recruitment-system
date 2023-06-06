<template>
  <div class="box">
    <!-- 头部区域 -->
    <div class="header">
    <el-button type="text" @click="back()"><i class="el-icon-d-arrow-left"> 返回主页</i></el-button>
    <div class="title">为你推荐</div> 
    </div>

    <!-- 分隔线 -->
    <el-divider>根据您的收藏列表，为您精准推荐适合的职位信息</el-divider>
    <div class="three">
      <div class="message" v-for="item in info" :key="item.id">
        <div class="msgRight">
          <el-button type="text" id="special" @click="show1(item)"
            ><h2>
              {{ item.pdepartment }} | {{ item.pclassify }} | {{ item.pname }}
            </h2></el-button
          >
          <div>工作内容：{{ item.presponsibility }}</div>
          <div>工作要求：{{ item.prequest }}</div>
          <div>工作地点：{{ item.pworkSite }}</div>
          <el-button type="danger" size="small" id="like" @click="deletePos(item)"
            >删除</el-button
          >
          <el-button
            type="primary"
            size="small"
            id="submit"
            @click="update(item)"
            >修改信息</el-button
          >
        </div>
        <el-dialog
          title="招聘详情信息"
          :visible.sync="dialogVisible1"
          width="40%"
          style="box-shadow: 0"
          v-if="cur == item.id"
        >
          <el-descriptions :column="1" size="large" :labelStyle="labelStyle">
            <el-descriptions-item label="职位ID">{{
              item.id
            }}</el-descriptions-item>
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
      <el-dialog
          title="修改招聘信息"
          :visible.sync="infoDialogVisible"
          :append-to-body="true"
          width="40%"
        >
          <el-form
            :model="ruleForm1"
            ref="ruleForm1"
            label-width="80px"
            class="demo-ruleForm"
            hide-required-asterisk
          >
            <el-form-item label="职位 ID " prop="id">
              <el-input v-model="ruleForm1.id" disabled></el-input>
            </el-form-item>
            <el-form-item
              label="工作名称"
              prop="pname"
              :rules="{
                required: true,
                message: '工作名称不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.pname"></el-input>
            </el-form-item>
            <el-form-item
              label="工作分类"
              prop="pclassify"
              :rules="[
                {
                  required: true,
                  message: '请输入该招聘信息的类别',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input v-model="ruleForm1.pclassify"></el-input>
            </el-form-item>
            <el-form-item
              label="工作部门"
              prop="pdepartment"
              :rules="{
                required: true,
                message: '工作部门不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.pdepartment"></el-input>
            </el-form-item>
            <el-form-item
              label="工作描述"
              prop="pdescribe"
              :rules="{
                required: true,
                message: '工作描述不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.pdescribe"></el-input>
            </el-form-item>
            <el-form-item
              label="人员要求"
              prop="prequest"
              :rules="{
                required: true,
                message: '人员要求不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.prequest"></el-input>
            </el-form-item>
            <el-form-item
              label="工作职责"
              prop="presponsibility"
              :rules="{
                required: true,
                message: '工作职责不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.presponsibility"></el-input>
            </el-form-item>
            <el-form-item
              label="工作地点"
              prop="pworkSite"
              :rules="{
                required: true,
                message: '工作地点不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.pworkSite"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm1')"
                >确认修改</el-button
              >
              <el-button @click="resetForm()">重置</el-button>
              <el-button @click="infoDialogVisible = false">取 消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
    </div>
    <!-- 主体内容 -->
    <div class="content">
       <div class="left">
        <div class="left-title">全部职位类别</div>
        <ul>
            <li>校外</li>
            <li>校内</li>
            <li>教育</li>
            <li>销售</li>
            <li>技术</li>
            <li>管理</li>
            <li>勤工俭学</li>
            <li>写作</li>
            <li>志愿</li>
        </ul>
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
      ],
      ruleForm1: {
        email: "",
        phone: "",
        pid: "",
        username: "",
      },
      dialogVisible1: false,
      labelStyle: { width: "60px" },
      totalPage: 1,
      currentPage1: 1,
      cur:"",
      infoDialogVisible: false
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
    back(){
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
     apply(workId) {
      this.infoDialogVisible = true;
      this.ruleForm1.pid = workId;
    },
    deleteLike(pid) {
      this.$confirm("此操作将取消收藏该职位申请, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store
            .dispatch("deleteLike", {
              id: pid
            })
            .then(() => {
              this.$message({
                type: "success",
                message: "取消成功!",
              });
              location.reload();
            })
            .catch(() => {
              this.$message.error("取消失败！");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消该操作",
          });
        });
    },
    resetForm(formName) {
      this.$refs[formName][0].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName][0].validate((valid) => {
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
li {
    list-style: none;
}
.box {
  width: 100%;
  height: 140%;
  background: url("./images/推荐背景图.png");
  background-size: 100% 100%;
  background-position: 100%;
  margin: 0;
  position: relative;
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

/* 主体部分 */
.el-divider--horizontal {
    margin: 8px 0;
}
.el-divider__text {
    color: gray;
}
.content {
   display: flex;
}

.content .left {
    width: 270px;
    height: 200px;
    padding: 20px;
    margin: 25px;
    border: 1px solid #c0c4cc;
    border-radius: 20px;
}
.content .left div {
    text-align: left;
    margin: 7px;
}
.content .left ul {
    padding: 0;
    margin: 0;
}
.content .left li {
    padding: 9px;
    background-color: #f8f8f8d1;
    color: #666666;
    border-radius: 10px;
    font-size: 14px;
    float: left;
    overflow: hidden;
    margin: 9px;
    
}

/* 分页器 */
.footer {
    position: absolute;
    bottom: 10px;
    left: 35%;
}
</style>