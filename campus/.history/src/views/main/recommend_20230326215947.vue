<template>
  <div class="box">
    <div class="header">
    <el-button type="text" @click="back()"><i class="el-icon-d-arrow-left"> 返回主页</i></el-button>
    <div class="title">收藏列表</div>
    </div>
    <!-- 信息框 -->
    <div class="three">
      <div class="message" v-for="item in info" :key="item.id">
        <!-- <div class="msgLeft">ID - {{ item.id }}</div> -->
        <div class="msgRight">
          <el-button type="text" id="special" @click="show1(item)"
            ><h2>
              {{ item.pdepartment }} | {{ item.pclassify }} | {{ item.pname }}
            </h2></el-button
          >
          <div>工作内容：{{ item.pdepartment }}</div>
          <div>工作要求：{{ item.prequest }}</div>
          <div>工作地点：{{ item.pworkSite }}</div>
          <el-button
            type="danger"
            icon="el-icon-star-off"
            size="small"
            id="like"
            @click="deleteLike(item.id)"
          >取消收藏</el-button>
          <el-button type="primary" size="small" id="submit" @click="apply(item.id)"
            >立即投递</el-button
          >
        </div>
        <el-dialog
          title="招聘详情信息"
          :visible.sync="dialogVisible1"
          width="40%"
          style="box-shadow:0"
          v-if="cur == item.id"
        >
          <el-descriptions :column="1" size="large" :labelStyle="labelStyle">
            <el-descriptions-item label="职位名称">{{
              item.pname
            }}</el-descriptions-item>
            <el-descriptions-item label="职位分类">{{
              item.pclassify
            }}</el-descriptions-item>
            <el-descriptions-item label="工作地点">{{
              item.pworkSite
            }}</el-descriptions-item>
            <el-descriptions-item label="工作要求">{{
              item.prequest
            }}</el-descriptions-item>
            <el-descriptions-item label="工作部门">{{
              item.pdepartment
            }}</el-descriptions-item>
            <el-descriptions-item label="工作描述">{{
              item.pdescribe
            }}</el-descriptions-item>
             <el-descriptions-item label="工作职责">{{
              item.presponsibility
            }}</el-descriptions-item>
          </el-descriptions>
        </el-dialog>
        <el-dialog
          title="提交工作申请"
          :visible.sync="infoDialogVisible"
          width="40%"
        >
          <el-form
            :model="ruleForm1"
            ref="ruleForm1"
            label-width="80px"
            class="demo-ruleForm"
            hide-required-asterisk
          >
            <el-form-item
              label="用户名"
              prop="username"
              :rules="{
                required: true,
                message: '用户名不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.username"></el-input>
            </el-form-item>
            <el-form-item
              label="电子邮箱"
              prop="email"
              :rules="[
                {
                  required: true,
                  message: '请输入邮箱地址',
                  trigger: 'blur',
                },
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="ruleForm1.email"></el-input>
            </el-form-item>
            <el-form-item
              label="手机号码"
              prop="phone"
              :rules="{
                required: true,
                message: '手机号码不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.phone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm1')"
                >提交申请</el-button
              >
              <el-button @click="resetForm('ruleForm1')">重置</el-button>
              <el-button @click="infoDialogVisible = false">取 消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="footer">
      <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      hide-on-single-page
      background
      :page-size="6"
      layout="total, prev, pager, next"
      :total="totalPage">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>