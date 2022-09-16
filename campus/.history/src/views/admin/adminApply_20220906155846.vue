<template>
<div class="box">
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="职位 ID"
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
import { mapGetters } from "vuex";
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
    mounted(){
        this.showApplyPos();
    },
    methods:{
        showApplyPos() {
      this.$store
        .dispatch("applyPos")
        .then(() => {
          for (let item in this.applyPos) {
            console.log(this.applyPos[item].pid);
            this.$store
              .dispatch("showIdProject", {
                id: this.allApplyWork[item].pid
          })
              .then(() => {
                // this.resL[item] = this.idProject;
                this.resL.push(this.idProject);
                
                this.resL[item].sid = this.allApplyWork[item].id;
                //   this.totalPage = this.allLike.total;
                //   console.log(this.totalPage);
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
    ...mapGetters(["applyPos"]),
  },
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