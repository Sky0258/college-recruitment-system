<template>
  <div class="box">
    <el-page-header @back="goBack" content="找回密码"></el-page-header>
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
</style>