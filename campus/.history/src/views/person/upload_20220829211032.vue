<template>
  <div class="box">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.box {
    margin-top: 120px;
    float: left;
    margin-left: 200px;
}
</style>