<template>
  <div>
    <el-button type="primary" style="margin-right: -500px" @click="showAward()"
      >+ 添加获奖经历</el-button
    >
    <el-dialog
      title="添加获奖经历"
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
          label="获奖名称"
          prop="award"
          :rules="{
            required: true,
            message: '获奖名称不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.award"></el-input>
        </el-form-item>
        <el-form-item
          label="主办单位"
          prop="awDepartment"
          :rules="{
            required: true,
            message: '获奖名称不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.awDepartment"></el-input>
        </el-form-item>
        <el-form-item
          label="获奖时间"
          prop="awTime"
          :rules="{
            required: true,
            message: '获奖时间不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.awTime"></el-input>
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
        <el-descriptions-item label="获奖名称" style="border-radius: 20px">{{
          item.award
        }}</el-descriptions-item>
        <el-descriptions-item label="主办单位">{{
          item.awDepartment
        }}</el-descriptions-item>
        <el-descriptions-item label="获奖时间">{{
          item.awTime
        }}</el-descriptions-item>
      </el-descriptions>
      <div class="btn">
        <el-button type="danger" size="small" @click="deleteMsg(item.id)"
          >删除</el-button
        >
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
  mounted() {
    this.showCampus1();
  },
  methods: {
    showCampus1() {
      this.$store
        .dispatch("showCampus")
        .then(() => {
          this.msg = this.showCampus;
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    showAward() {
      this.infoDialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("addCampus", this.ruleForm1)
            .then(() => {
              this.$message({
                message: "添加成功！",
                type: "success",
              });
              this.showCampus1();
              this.infoDialogVisible = false;
              this.resetForm();
            })
            .catch(() => {
              // this.$message.error("错误！");
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
    ...mapGetters(["showCampus"]),
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