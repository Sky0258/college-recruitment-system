<template>
  <div class="box">
    <div class="title">
        <el-page-header @back="goBack" content="找回密码"></el-page-header>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.el-page-header {
    font-size: 30px;
}
</style>