<template>
  <div>
    <el-button type="primary" style="margin-right: -500px" @click="addProject()"
      >+ 添加项目经历</el-button
    >
    <el-dialog
      title="添加项目经历"
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
        <!-- <el-form-item
          label="用户ID"
          prop="userId"
          :rules="{
            required: true,
            message: '用户ID不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.userId"></el-input>
        </el-form-item> -->
        <el-form-item
          label="项目名称"
          prop="projectName"
          :rules="{
            required: true,
            message: '项目名称不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.projectName"></el-input>
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
        <el-form-item
          label="项目描述"
          prop="describes"
          :rules="{
            required: true,
            message: '项目描述不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.describes"></el-input>
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
        <el-descriptions-item label="项目名称" style="border-radius: 20px">{{
          item.projectName
        }}</el-descriptions-item>
        <el-descriptions-item label="开始时间">{{
          item.fromTime
        }}</el-descriptions-item>
        <el-descriptions-item label="结束时间">{{
          item.toTime
        }}</el-descriptions-item>
        <el-descriptions-item label="项目描述">{{
          item.describes
        }}</el-descriptions-item>
      </el-descriptions>
      <div class="btn">
        <el-button type="danger" size="small" @click="deleteMsg(item.id)">删除</el-button>
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
  methods: {
    showProject1() {
      this.$store
        .dispatch("showProject")
        .then(() => {
          this.msg = this.showProject;
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    addProject() {
      this.infoDialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("addProject", this.ruleForm1)
            .then(() => {
              this.$message({
                message: "添加成功！",
                type: "success",
              });
              this.showProject1();
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
        .dispatch("deleteProject", {
          id: awardId,
        })
        .then(() => {
          this.$message.error("删除成功！");
          this.showProject1();
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
  },
  computed: {
    ...mapGetters(["showProject"]),
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