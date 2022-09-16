<template>
  <div class="contain">
    <div class="one">
      <!-- 头部导航栏 -->
      <div class="header">
        <span class="left">高校招聘管理系统</span>
        <ul class="right">
          <li>主页</li>
          <li>公告</li>
          <li>分类</li>
          <li>关于我们</li>
          <li>个人中心</li>
        </ul>
      </div>
    </div>
    <div class="two">
      <h2>11111111111111122222222</h2>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
* {
  margin: 0 auto;
  padding: 0;
}
ul {
  list-style: none;
}
.one {
  width: 100vw;
  height: 100vh;
  background: url("./images/背景图2.png");
  background-size: 100vw 100vh;
  /* position: fixed; */
  /* min-width: 100%;
  min-height: 100%; */
  /* background-attachment: fixed; */
}
.one .header ul {
  display: inline-flex;
}
.one .header li{
  color: white;
  font-size: 3vh;
}
.header {
  display: flex;
}
.header .left{
  justify-content: left;
  font-size: 19px;
  font-weight: 600;
  color: white;
  margin-left: 4rem;
  margin-top: 2.5rem;
}
.header .right {
  justify-content: right;
}
h2 {
  /* color: white; */
}

</style>