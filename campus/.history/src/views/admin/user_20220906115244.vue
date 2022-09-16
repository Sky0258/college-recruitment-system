<template>
  <div class="box">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
      
    >
      <el-table-column label="ID" prop="uid" align="center"
      header-align="center" width="80px"> </el-table-column>
      <el-table-column label="username" prop="username" align="center"
      header-align="center" width="180px"> </el-table-column>
      <el-table-column label="email" prop="email" align="center"
      header-align="center" width="210px"> </el-table-column>
      <el-table-column label="password" prop="password" align="center"
      header-align="center" width="200px"> </el-table-column>
      <el-table-column align="left">
        <template slot="header" slot-scope="scope" width="200px">
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
        },
      ],
      search: "",
    };
  },
  methods: {
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
    handleEdit(index, row) {
      console.log(index, row);
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
    width: ;
}
</style>