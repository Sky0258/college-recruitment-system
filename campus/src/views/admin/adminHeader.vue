<template>
  <div class="box">
    <h3>如梦之舟就业引航后台系统</h3>
    <div class="right">
        <i class="el-icon-bell"></i>
        <i class="el-icon-chat-line-square"></i>
        <el-tooltip
              class="item"
              effect="dark"
              content=" 点击注销登录 "
              placement="bottom"
            >
             <el-button id="spe" round @click="close()"
              >欢迎你,{{ this.selfInfo.username }}</el-button
            >
            </el-tooltip>

    </div>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    methods:{
        close(){
            this.$router.push("/login"); 
        }
    },
    computed: {
      ...mapGetters(["selfInfo"]),
    },
}
</script>

<style scoped>
.box {
    height: 100%;
    margin: 0;
    padding: 0;
    display: inline-flex;
    width: 100%;
}
h3 {
   margin-right: auto;
   color: #5f6468;
}
.box .right i{
  font-size: 25px;
  font-weight: 600;
  margin-top: 14px;
  margin-right: 20px;
  color: #5f6468;
}
.box .right #spe {
  color: #3636cd;
  font-size: 14px;
  font-weight: 550;
  letter-spacing: 0.5px;
  margin-right: 35px;
  margin-top: -5px;
}
</style>