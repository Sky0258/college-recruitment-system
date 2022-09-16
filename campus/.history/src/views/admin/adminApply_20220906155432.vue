<template>
<div class="box">
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="职位ID"
      prop="pid">
    </el-table-column>
    <el-table-column
      label="职位名称"
      prop="pname">
    </el-table-column>
    <el-table-column
      label="申请人"
      prop="username">
    </el-table-column>
    <el-table-column
      label="email"
      prop="email">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
        {
          pid: "",
          pname: "",
          username: "",
          email: "",
          roleId: ""
        },
      ],
        }
    },
    methods:{
        showApplyPos() {
      this.$store
        .dispatch("applyPos")
        .then(() => {
          this.tableData = this.allUsers;
        })
        .catch(() => {
          this.$message.error("错误！");
        });
    },
    }
}
</script>

<style scoped>
.box .el-table{
    padding: 20px;
}
.el-input.el-input--mini {
    width: 80%;
}
</style>