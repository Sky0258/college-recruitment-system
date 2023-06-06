<template>
  <div class="box">
    <el-menu
      default-active="2-1"
      text-color="#144339"
      active-text-color="#f65365"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" @click="home()">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span>招聘信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="recruitment()"><i class="el-icon-edit-outline"></i>
        <span slot="title">修改招聘信息</span></el-menu-item>
          <el-menu-item index="2-2" @click="addRec()"><i class="el-icon-paperclip"></i>
        <span slot="title">添加招聘信息</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2" @click="recruitment()">
        <i class="el-icon-document-copy"></i>
        <span slot="title">招聘信息</span>
      </el-menu-item> -->
      <el-menu-item index="3" @click="adminApply()">
        <i class="el-icon-collection"></i>
        <span slot="title">申请列表</span>
      </el-menu-item>
       <el-menu-item index="4" @click="user()" :v-show="this.selfInfo.rid == 2">
        <i class="el-icon-user"></i>
        <span slot="title">用户信息</span>
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
      },
      addRec() {
        this.$router.push("/addRec");
      },
      recruitment() {
        this.$router.push("/recruitment");
      },
      adminApply() {
        this.$router.push("/adminApply");
      },
      user() {
        this.$router.push("/user");
      }
    },
    computed: {
    ...mapGetters(["selfInfo"]),
  },
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
    margin-left: 0px;
    float: left;
    margin-top: 20px;
}
.el-submenu i {
    font-size: 17px;
    margin-left: 0px;
    float: left;
    margin-top: 20px;
}
.el-submenu span {
    font-size: 15px;
    float: left;
    /* margin-top: 20px; */
    margin-left: 20px;
}
.el-menu-item span {
    font-size: 15px;
    float: left;
    /* margin-top: 20px; */
    margin-left: 20px;
}
</style>