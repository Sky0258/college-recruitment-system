<template>
  <div class="box">
    <el-menu
      default-active="1"
      text-color="#144339"
      active-text-color="#f65365"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" @click="home()">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      home() {
        this.$router.push("/homePage");
      }
    }
}
</script>

<style scoped>
.box{
    height: 100%;
}
.box >>> .el-menu {
    height: 100%;
}
.el-menu-item.is-active {
    background-color: #f3f6f9;
}
.el-menu-item:hover {
  background-color: #f3f6f9;
}
.el-menu-item i {
    font-size: 17px;
    margin-left: 20px;
    float: left;
    margin-top: 20px;
}
.el-menu-item span {
    font-size: 15px;
    float: left;
    /* margin-top: 20px; */
    margin-left: 25px;
}
</style>