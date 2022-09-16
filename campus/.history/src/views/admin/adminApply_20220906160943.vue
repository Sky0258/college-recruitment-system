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
      <el-table-column label="职位 ID" prop="pid"> </el-table-column>
      <el-table-column label="职位名称" prop="pname"> </el-table-column>
      <el-table-column label="申请人" prop="username"> </el-table-column>
      <el-table-column label="email" prop="email"> </el-table-column>
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
        {
          pid: "",
          pname: "",
          username: "",
          email: "",
          roleId: "",
        },
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
            console.log(this.applyPos[item].pid);
            this.$store
              .dispatch("showIdProject", {
                id: this.applyPos[item].pid,
              })
              .then(() => {
                console.log('nnnnnnnnnnnnnnnnn');
                console.log(this.idProject);
                // this.resL[item] = this.idProject;
                this.resL.push(this.applyPos[item]);

                this.resL[item].pname = this.idProject.pname;
                //   this.totalPage = this.allLike.total;
                //   console.log(this.totalPage);
              })
              .catch(() => {
                console.log('ssssssssss');
                this.$message.error("错误！");
              });
          }
        })
        .catch(() => {
            console.log('ccccccccccccccc');
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