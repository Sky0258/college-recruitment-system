<template>
  <div class="box">
    <el-table
      :data="
        resL.filter(
          (data) =>
            !search || data.pname.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="职位 ID" prop="pid" align="center" width="120px"> </el-table-column>
      <el-table-column label="职位名称" prop="pname" align="center" width="180px"> </el-table-column>
      <el-table-column label="申请人" prop="username" align="center" width="140px"> </el-table-column>
      <el-table-column label="email" prop="email" align="center" width="220px"> </el-table-column>
      <el-table-column align="left">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入职位名称搜索" />
        </template>
        <template slot-scope="scope">
          
          <el-button
            size="mini"
            type="success"
            @click="handleDelete(scope.$index, scope.row)"
            >学历信息</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
            >获奖情况</el-button
          >
          <el-button
            size="mini"
            type="warning"
            @click="handleDelete(scope.$index, scope.row)"
            >项目经历</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      resL: [
      ],
      search: ""
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
  },
  computed: {
    ...mapGetters(["applyPos", "idProject"]),
  },
};
</script>

<style scoped>
.box .el-table {
  padding: 20px;
}
.el-input.el-input--mini {
  width: 80%;
}
</style>