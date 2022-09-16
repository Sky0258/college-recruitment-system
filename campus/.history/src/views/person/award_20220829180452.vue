<template>
  <div>
    <div v-for="item in this.msg" :key="item.id">
      <el-descriptions class="margin-top" :column="1" size="large" :contentStyle="contentStyle">
        <el-descriptions-item label="获奖名称"
          >{{item.award}}</el-descriptions-item
        >
        <el-descriptions-item label="主办单位"
          >{{item.awDepartment}}</el-descriptions-item
        >
        <el-descriptions-item label="获奖时间">{{item.awTime}}</el-descriptions-item>
      </el-descriptions>
      <div class="btn"><el-button type="danger">删除</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: [
        {
          id: 1,
          userId: 1,
          awDepartment: null,
          award: "没获过奖",
          awTime: null,
        },
        {
          id: 4,
          userId: 1,
          awDepartment: "东莞理工",
          award: "蓝桥杯省赛二等奖",
          awTime: "大二",
        },
      ],
      contentStyle:{
        font-size: 17px;
      }
    };
  },
};
</script>

<style scoped>

</style>