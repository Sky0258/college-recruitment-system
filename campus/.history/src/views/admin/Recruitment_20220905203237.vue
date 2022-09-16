<template>
  <div class="three">
    <div class="message" v-for="item in info" :key="item.id">
      <div class="msgLeft">ID - {{ item.id }}</div>
      <div class="msgRight">
        <el-button id="special" type="text" @click="show1(item)"
          ><h2>
            {{ item.pdepartment }} | {{ item.pclassify }} | {{ item.pname }}
          </h2></el-button
        >
        <div>工作内容：{{ item.presponsibility }}</div>
        <div>工作要求：{{ item.prequest }}</div>
        <div>工作地点：{{ item.pworkSite }}</div>
        <el-button
          type="warning"
          icon="el-icon-star-off"
          size="small"
          id="like"
          @click="likeIt(item)"
          >收藏</el-button
        >
        <el-button
          type="primary"
          size="small"
          id="submit"
          @click="apply(item.id)"
          >立即投递</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            info: [
        {
          id: "1",
          pworkSite: "",
          flag: "",
          pdescribe: "",
          pdepartment: "",
          presponsibility: "",
          pclassify: "",
          prequest: "",
          pname: "",
        },
      ],
        }
    }
};
</script>

<style scoped>
.three {
  width: 100%;
  height: 161vh;
  background-size: 100vw 161vh;
  margin-top: 30px;
}
.three h1 {
  color: #0d0d75;
  margin-bottom: 50px;
}
.three .message {
  width: 100%;
  height: 190px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 30px 0 rgb(2 2 48 / 6%);
  display: flex;
  margin-top: 30px;
  border: 1px solid #e0e0e0;
}
.three .msgLeft {
  width: 120px;
  height: 65%;
  border-radius: 67%;
  background-color: #f4f4fe;
  margin: 3% 35px 0 50px;
  font-size: 25px;
  line-height: 120px;
  color: #0d0d75;
}
.three .msgRight {
  font-size: 16px;
  margin-left: 20px;
  letter-spacing: 1px;
  width: 640px;
}
.three .message #special {
  color: #232361;
  width: 100%;
  margin: 0;
  padding: 0;
}
.three .message #special:hover {
  color: #4c4cf1;
}
.three .msgRight h2 {
  margin-top: 25px;
  text-align: left;
  font-size: 24px;
  margin-bottom: 10px;
}
.three .msgRight div {
  /* font-size: 16px; */
  float: left;
  width: 610px;
  margin-top: 6px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.three .msgRight >>> #submit {
  float: right;
  margin-right: 20px;
}
.three .msgRight >>> #star {
  margin-right: 80px;
  float: right;
  /* background-color: red; */
}
.three #msgBtn {
  color: #4c4cf1;
  font-weight: 550;
  font-size: 16px;
  margin-right: -720px;
  margin-top: 10px;
}
.three .message >>> .el-dialog__wrapper {
  transition-duration: 0.3s;
}
.three #like {
  float: right;
  margin-right: 15px;
}

</style>