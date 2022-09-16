<template>
  <div class="box">
    <el-table
      v-loading="loading"
      :data="
        resL.filter(
          (data) =>
            !search || data.pname.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="职位 ID" prop="pid" align="center" width="120px">
      </el-table-column>
      <el-table-column
        label="职位名称"
        prop="pname"
        align="center"
        width="180px"
      >
      </el-table-column>
      <el-table-column
        label="申请人"
        prop="username"
        align="center"
        width="140px"
      >
      </el-table-column>
      <el-table-column label="email" prop="email" align="center" width="220px">
      </el-table-column>
      <el-table-column align="left">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入职位名称搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="Campus(scope.row)"
            >学历信息</el-button
          >
          <el-button size="mini" type="primary" @click="Award(scope.row)"
            >获奖情况</el-button
          >
          <el-button size="mini" type="warning" @click="Project(scope.row)"
            >项目经历</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="申请人学历信息"
      :visible.sync="dialogVisible1"
      width="60%"
      :before-close="handleClose"
    >
      <el-table :data="tableData1" style="width: 100%">
        <el-table-column
          prop="school"
          label="学校"
          width="170px"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="level"
          label="学历情况"
          width="140px"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="fromTime" label="开始时间" align="center">
        </el-table-column>
        <el-table-column prop="toTime" label="结束时间" align="center">
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog
      title="申请人获奖情况"
      :visible.sync="dialogVisible2"
      width="60%"
      :before-close="handleClose"
    >
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="award" label="获奖名称" align="center">
        </el-table-column>
        <el-table-column prop="awDepartment" label="主办单位" align="center">
        </el-table-column>
        <el-table-column prop="awTime" label="获奖时间" align="center">
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog
      title="申请人项目经历"
      :visible.sync="dialogVisible3"
      width="60%"
      :before-close="handleClose"
    >
      <el-table :data="tableData3" style="width: 100%">
        <el-table-column
          prop="projectName"
          label="项目名称"
          align="center"
          width="160px"
        >
        </el-table-column>
        <el-table-column
          prop="fromTime"
          label="开始时间"
          align="center"
          width="140px"
        >
        </el-table-column>
        <el-table-column
          prop="toTime"
          label="结束时间"
          align="center"
          width="140px"
        >
        </el-table-column>
        <el-table-column prop="describes" label="项目简介" align="center">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      resL: [],
      search: "",
      tableData1: [],
      tableData2: [],
      tableData3: [],
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      loading: true
    };
  },
  mounted() {
    this.showApplyPos();
  },
  methods: {
    showApplyPos() {
      this.$store
        .dispatch("applyPos")
        .then(() => {
          for (let item in this.applyPos) {
            this.$store
              .dispatch("showIdProject", {
                id: this.applyPos[item].pid,
              })
              .then(() => {
                console.log(this.idProject);
                this.resL.push(this.applyPos[item]);
                this.resL[item].pname = this.idProject.pname;
                this.loading = false;
              })
              .catch(() => {
                this.$message.error("错误！");
              });
          }
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    Campus(row) {
      this.dialogVisible1 = true;
      console.log(row.userId);
      this.$store
        .dispatch("adminEdu", {
          uid: row.userId,
        })
        .then(() => {
          this.tableData1 = this.adminEdu;
        })
        .catch(() => {
          this.$message.error("获取学历信息错误！");
        });
    },
    Award(row) {
      this.dialogVisible2 = true;
      this.$store
        .dispatch("adminAward", {
          uid: row.userId,
        })
        .then(() => {
          this.tableData2 = this.adminAward;
        })
        .catch(() => {
          this.$message.error("获取“获奖经历”错误！");
        });
    },
    Project(row) {
      this.dialogVisible3 = true;
      this.$store
        .dispatch("adminProject", {
          uid: row.userId,
        })
        .then(() => {
          this.tableData3 = this.adminProject;
        })
        .catch(() => {
          this.$message.error("获取“获奖经历”错误！");
        });
    },
  },
  computed: {
    ...mapGetters([
      "applyPos",
      "idProject",
      "adminEdu",
      "adminAward",
      "adminProject",
    ]),
  },
};
</script>

<style scoped>
.box > .el-table {
  padding: 20px;
}
.el-input.el-input--mini {
  width: 80%;
}
</style>