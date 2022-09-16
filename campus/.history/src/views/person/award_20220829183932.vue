<template>
  <div>
    <el-button type="primary" plain style="margin-right: 0px">+ 添加获奖经历</el-button>
    <div v-for="item in this.msg" :key="item.id" class="content">
      <el-descriptions style="border-radius: 20px;" :column="1" size="large" :contentStyle="contentStyle" :labelStyle="labelStyle">
        <el-descriptions-item label="获奖名称" style="border-radius: 20px;"
          >{{item.award}}</el-descriptions-item
        >
        <el-descriptions-item label="主办单位"
          >{{item.awDepartment}}</el-descriptions-item
        >
        <el-descriptions-item label="获奖时间">{{item.awTime}}</el-descriptions-item>
      </el-descriptions>
      <div class="btn"><el-button type="danger" size="small">删除</el-button></div>
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
        'margin-top': '0px'
      },
      labelStyle: {
        'font-size': '15px',
        'margin-top': '0px',
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
    margin-left: 60px;
    width: 75%;
    box-shadow: 0 20px 30px 0 rgb(2 2 48 / 6%);
    padding: 23px 15px 10px 23px;
}
.margin-top {
    background-color: black;
}
.btn {
    border-top: 1px solid #e0e0e0;
    text-align: right;
}
.btn >>> .el-button {
    margin-right: 50px;
    margin-top: 6px;
}
</style>