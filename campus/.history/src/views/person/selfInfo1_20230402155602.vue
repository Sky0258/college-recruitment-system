<template>
  <div class="box">
    <!-- <img src="./images/头像2.jpg" alt=""> -->
    <el-descriptions
      class="margin-top"
      :column="1"
      border
      size="large"
      :labelStyle="labelStyle"
    >
      <!-- <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-postcard"></i>
          用户ID
        </template>
        {{ this.ruleForm.id }}
      </el-descriptions-item> -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ this.ruleForm.name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-edit"></i>
          性别
        </template>
        {{ this.ruleForm.sex }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-coordinate"></i>
          政治面貌
        </template>
        {{ this.ruleForm.poliStatus }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-message"></i>
          电子邮箱
        </template>
        {{ this.ruleForm.email }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        {{ this.ruleForm.phone }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-document"></i>
          工作意向
        </template>
        {{ this.ruleForm.jobIntension }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-paperclip"></i>
          个人介绍
        </template>
        {{ this.ruleForm.describes }}
      </el-descriptions-item>
    </el-descriptions>
    <el-button
      type="primary"
      style="margin: 20px; float: right"
      @click="showInfo"
      >修改个人信息</el-button
    >
    <el-dialog
      title="修改个人信息"
      :visible.sync="infoDialogVisible"
      width="40%"
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
          label="用户名"
          prop="name"
          :rules="{
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.name"></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          prop="sex"
          :rules="{
            required: true,
            message: '性别不能为空',
            trigger: 'blur',
          }"
        >
          <el-input v-model="ruleForm1.sex"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌" prop="poliStatus">
          <el-input v-model="ruleForm1.poliStatus"></el-input>
        </el-form-item>
        <el-form-item
          label="电子邮箱"
          prop="email"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="ruleForm1.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm1.phone"></el-input>
        </el-form-item>
        <el-form-item label="工作意向" prop="jobIntension">
          <el-input v-model="ruleForm1.jobIntension"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍" prop="describes">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
      },
      ruleForm1: {
        id: "",
        userId: "",
        name: "",
        sex: "",
        email: "",
        poliStatus: "",
        phone: "",
        photo: null,
        files: null,
        jobIntension: "",
        describes: "",
      },
      infoDialogVisible: false,
      labelStyle: { width: "110px" },
      imageUrl: "./images/头像2.jpg",
      dialogImageUrl: '',
      dialogVisible3: false
    };
  },
  mounted() {
    this.getSelfInfo();
  },
  methods: {
    open() {
        this.$confirm('初次登录请先完善个人信息', '提示', {
          showCancelButton: false,
          confirmButtonText: '确定',
          type: 'warning',
          center: true
        }).then(() => {
        }).catch(() => {
        });
    },
    getSelfInfo() {
      this.$store
        .dispatch("getSelfInfo")
        .then(() => {
          this.ruleForm = this.selfInfo;
          if(this.selfInfo.name == null) {
            this.open();
          }
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    showInfo() {
      this.ruleForm1 = { ...this.ruleForm };
      this.infoDialogVisible = true;
    },
    resetForm(formName) {
      //   this.$refs[formName].resetFields();
      this.ruleForm1 = { ...this.ruleForm };
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("updateSelfInfo", this.ruleForm1)
            .then(() => {
              this.$message({
                message: "修改个人信息成功！",
                type: "success",
              });
              this.getSelfInfo();
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
   handleAvatarSuccess(res, file) {
      console.log('222222222222222');
      console.log(res);
      this.ruleForm1.photo = res.data[0];
      this.ruleForm.photo = res.data[0];
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    upLoad(){
      let data = "https://img-blog.csdnimg.cn/20201014180756923.png?x-oss-process=image/resize,m_fixed,h_64,w_64";
      // console.log(data);
      this.$store
        .dispatch("upLoad",data)
        .then(() => {
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    }
  },
  computed: {
    ...mapGetters(["selfInfo"]),
  },
};
</script>

<style scoped>
.box {
  width: 70%;
  margin-left: 80px;
  margin-top: 4%;
}
.box img {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin-left: -80px;
  margin-bottom: 5px;
  margin-top: -13px;
}
/* .avatar-uploader >>> .el-upload {
  border: 1px dashed #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  float: left;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 200px;
  height: 150px;
  display: block;
} */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>