<template>
  <div class="box">
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

<style>
</style>