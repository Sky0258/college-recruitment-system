<template>
  <div>
    <el-button type="primary" style="margin-right: -500px" @click="addEdu()"
      >+ 添加学历信息</el-button
    >
    <el-dialog
      title="添加学历信息"
      :visible.sync="infoDialogVisible"
      width="35%"
    >
      <el-form
        :model="ruleForm1"
        ref="ruleForm1"
        status-icon
        label-width="80px"
        class="demo-ruleForm"
        hide-required-asterisk
      >
        <el-form-item
          label="用户ID"
          prop="userId"
          :rules="{
            required: true,
            message: '用户ID不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.userId"></el-input>
        </el-form-item>
        <el-form-item
          label="学校名称"
          prop="award"
          :rules="{
            required: true,
            message: '学校名称不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.school"></el-input>
        </el-form-item>
        <el-form-item
          label="学历"
          prop="level"
          :rules="{
            required: true,
            message: '学历不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.level"></el-input>
        </el-form-item>
        <el-form-item
          label="开始时间"
          prop="fromTime"
          :rules="{
            required: true,
            message: '开始时间不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.fromTime"></el-input>
        </el-form-item>
        <el-form-item
          label="结束时间"
          prop="toTime"
          :rules="{
            required: true,
            message: '结束时间不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.toTime"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm1')"
            >确 定</el-button
          >
          <el-button @click="resetForm('ruleForm1')">重置</el-button>
          <el-button @click="infoDialogVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <div v-for="item in this.msg" :key="item.id" class="content">
      <el-descriptions
        style="border-radius: 20px"
        :column="1"
        size="large"
        :contentStyle="contentStyle"
        :labelStyle="labelStyle"
      >
        <el-descriptions-item label="学校名称" style="border-radius: 20px">{{
          item.school
        }}</el-descriptions-item>
        <el-descriptions-item label="学历">{{
          item.level
        }}</el-descriptions-item>
        <el-descriptions-item label="开始时间">{{
          item.fromTime
        }}</el-descriptions-item>
        <el-descriptions-item label="结束时间">{{
          item.toTime
        }}</el-descriptions-item>
      </el-descriptions>
      <div class="btn">
        <el-button type="danger" size="small">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: [
        {
          id: 1,
          userId: 1,
          school: "东莞理工学院",
          level: "本科",
          fromTime: "2020-09-01",
          toTime: "2024-07-01",
        },
      ],
      contentStyle: {
        "font-size": "14px",
        "margin-top": "0px",
      },
      labelStyle: {
        "font-size": "14px",
        "margin-top": "0px",
        "margin-left": "20px",
      },
      infoDialogVisible: false,
      ruleForm1: {
        userId: "",
        awDepartment: "",
        award: "",
        awTime: "",
      },
    };
  },
  mounted(){
    this.showEdu1();
  },
  methods: {
    showEdu1() {
      this.$store
        .dispatch("showEdu")
        .then(() => {
          this.msg = this.showEdu;
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    addEdu() {
      this.infoDialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("addEdu", this.ruleForm1)
            .then(() => {
              this.$message({
                message: "添加成功！",
                type: "success",
              });
              this.showEdu1();
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    deleteMsg(awardId) {
      this.$store
        .dispatch("deleteCampus", {
            id: awardId
        })
        .then(() => {
          this.$message.error("删除成功！");
          this.showCampus1();
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
  },
  computed: {
    ...mapGetters(["showEdu"]),
  },
};
</script>

<style scoped>
.content {
  border: 1px solid #e0e0e0;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 60px;
  width: 75%;
  box-shadow: 0 20px 30px 0 rgb(2 2 48 / 6%);
  padding: 23px 15px 10px 23px;
}
.margin-top {
  background-color: black;
}
.btn {
  border-top: 1px solid #e0e0e0;
  text-align: right;
}
.btn >>> .el-button {
  margin-right: 50px;
  margin-top: 6px;
}
</style>