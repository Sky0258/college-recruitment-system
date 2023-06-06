<template>
  <div class="box">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.username.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      
    >
      <el-table-column label="ID" prop="uid" align="center"
      header-align="center" width="90px"> </el-table-column>
      <el-table-column label="username" prop="username" align="center"
      header-align="center" width="190px"> </el-table-column>
      <el-table-column label="email" prop="email" align="center"
      header-align="center" width="210px"> </el-table-column>
      <el-table-column label="权限" prop="roleId" :formatter="getStatus" align="center"
      header-align="center" width="210px"> </el-table-column>
      <el-table-column align="left">
        <template slot="header" slot-scope="scope" width="200px">
          <el-input v-model="search" size="mini" placeholder="输入用户名搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="warning" style="margin-left: 50px" @click="showRole(scope.$index, scope.row)"
            >修改用户权限</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
          title="修改用户权限"
          :visible.sync="infoDialogVisible"
          width="32%"
        >
          <el-form
            :model="ruleForm1"
            ref="ruleForm1"
            label-width="80px"
            class="demo-ruleForm"
            hide-required-asterisk
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm1.username" disabled></el-input>
            </el-form-item>
            <el-form-item label="用户权限" prop="roleId">
              <el-select v-model="ruleForm1.roleId" placeholder="请选择" :formatter="getStatus">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
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
</template>

<script>
export const Status = { 1: "普通用户", 2: "管理员",3:"公司招聘者" };
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.showUsers();
  },
  data() {
    return {
      tableData: [
        {
          uid: "",
          username: "",
          password: "",
          email: "",
          roleId: ""
        },
      ],
      search: "",
      infoDialogVisible: false,
      ruleForm1: {
        username: "",
        roleId: ""
      },
      options: [{
          value: '1',
          label: '普通用户'
        }, {
          value: '2',
          label: '管理员'
        }, {
          value: '3',
          label: '公司招聘者'
        }],
        value: '',
    };
  },
  methods: {
    getStatus(row, column, cellValue) {
      return Status[cellValue];
    },
    showUsers() {
      this.$store
        .dispatch("showUsers")
        .then(() => {
          this.tableData = this.allUsers;
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("changeUser", this.ruleForm1)
            .then(() => {
              this.$message({
                message: "修改成功！",
                type: "success",
              });
              this.showUsers();
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
    showRole(index, row) {
      this.ruleForm1 = {...row};
      this.infoDialogVisible = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  computed: {
    ...mapGetters(["allUsers"]),
  },
};
</script>

<style scoped>
.box .el-table{
    padding: 20px;
}
.el-input.el-input--mini {
    width: 80%;
}
</style>