<template>
  <div>
    <div>
        <el-descriptions class="margin-top" :column="1" size="large">
        <el-descriptions-item label="获奖名称">kooriookami</el-descriptions-item>
        <el-descriptions-item label="主办单位">18100000000</el-descriptions-item>
        <el-descriptions-item label="获奖时间">苏州市</el-descriptions-item> 
        <template>
            <el-button type="primary" size="small">操作</el-button>
        </template>
        </el-descriptions>
        <div><el-button type="primary" size="small">操作</el-button></div>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:{
                []
            }
        }
    }
}
</script>

<style>

</style>