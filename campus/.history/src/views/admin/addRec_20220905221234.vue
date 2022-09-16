<template>
  <div class="box">
    <el-form
            :model="ruleForm1"
            ref="ruleForm1"
            label-width="80px"
            class="demo-ruleForm"
            hide-required-asterisk
          >
            <el-form-item label="职位 ID " prop="id">
              <el-input v-model="ruleForm1.id" disabled></el-input>
            </el-form-item>
            <el-form-item
              label="工作名称"
              prop="pname"
              :rules="{
                required: true,
                message: '工作名称不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.pname"></el-input>
            </el-form-item>
            <el-form-item
              label="工作分类"
              prop="pclassify"
              :rules="[
                {
                  required: true,
                  message: '请输入该招聘信息的类别',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input v-model="ruleForm1.pclassify"></el-input>
            </el-form-item>
            <el-form-item
              label="工作部门"
              prop="pdepartment"
              :rules="{
                required: true,
                message: '工作部门不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.pdepartment"></el-input>
            </el-form-item>
            <el-form-item
              label="工作描述"
              prop="pdescribe"
              :rules="{
                required: true,
                message: '工作描述不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.pdescribe"></el-input>
            </el-form-item>
            <el-form-item
              label="人员要求"
              prop="prequest"
              :rules="{
                required: true,
                message: '人员要求不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.prequest"></el-input>
            </el-form-item>
            <el-form-item
              label="工作职责"
              prop="presponsibility"
              :rules="{
                required: true,
                message: '工作职责不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.presponsibility"></el-input>
            </el-form-item>
            <el-form-item
              label="工作地点"
              prop="pworkSite"
              :rules="{
                required: true,
                message: '工作地点不能为空',
                trigger: 'blur',
              }"
            >
              <el-input v-model="ruleForm1.pworkSite"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm1')"
                >确认修改</el-button
              >
              <el-button @click="resetForm('ruleForm1')">重置</el-button>
              <el-button @click="infoDialogVisible = false">取 消</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm1: {
        id: 0,
        pclassify: "string",
        pdepartment: "string",
        pdescribe: "string",
        pflag: 0,
        pname: "string",
        prequest: "string",
        presponsibility: "string",
        pworkSite: "string",
      },
        }
    }
}
</script>

<style scoped>
.box {
    width: 50%;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    border-radius: 15px;
    text-align: center;
}
.el-form {
    width: 80%;
    margin: 10px 0 auto;
}
.el-form-item {
    margin-bottom: 15px;
}
</style>