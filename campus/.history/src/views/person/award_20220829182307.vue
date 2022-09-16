<template>
  <div>
    <div v-for="item in this.msg" :key="item.id" class="content">
      <el-descriptions class="margin-top" :column="1" size="large" :contentStyle="contentStyle" :labelStyle="labelStyle">
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
      contentStyle: {
        'font-size': '15px',
        'margin-top': '10px'
      },
      labelStyle: {
        'font-size': '15px',
        'margin-top': '10px',
        'margin-left': '20px'
      }
    };
  },
};
</script>

<style scoped>
.content {
    border: 1px solid #e0e0e0;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 50px;
    width: 80%;
}
</style>