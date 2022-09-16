<template>
  <div class="box">
    <el-table
      :data="
        resL.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="职位 ID" prop="pid" align="center" width="120px"> </el-table-column>
      <el-table-column label="职位名称" prop="pname" align="center" width="180px"> </el-table-column>
      <el-table-column label="申请人" prop="username" align="center" width="140px"> </el-table-column>
      <el-table-column label="email" prop="email" align="center" width="200px"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
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