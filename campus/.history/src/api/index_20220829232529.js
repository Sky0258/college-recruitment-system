import requests from './request'; 
import axios from "axios";

//注册接口
//export const reqUserRegister = (data)=>requests({url:'/api/account/register',data,method:'post'});
//登录接口
export const reqUserLogin = (data)=>requests({url:'/api/user/login',params:data,method:'post'});

//注册接口
export const reqUserRegister = (data)=>requests({url:'/api/user/register',data,method:'post'});

//搜索接口
export const reqContentSearch = (data)=>requests({url:'/api/pos/likeByCondition',data,method:'get'});

//查看全部岗位接口
export const reqAllPosition = (data)=>requests({url:'/api/pos/showAll',params:data,method:'get'});

//查看个人信息接口
export const reqSelfInfo = ()=>requests({url:'/api/info/showAll',method:'get'});

//修改个人信息
export const reqUpdateInfo = (data)=>requests({url:'/api/info/update',data:data,method:'post'});

//查看在校经历
export const reqShowCampus = ()=>requests({url:'/api/campus/showCam',method:'get'});

//增加在校经历
export const reqAddCampus = (data)=>requests({url:'/api/campus/addCampus',data:data,method:'post'});

//删除在校经历
export const reqDeleteCampus = (data)=>requests({url:'/api/campus/deleteCam',params:data,method:'get'});

//查看学历
export const reqShowEdu = ()=>requests({url:'/api/edu/showAll',method:'get'});

//添加学历
export const reqAddEdu = (data)=>requests({url:'/api/edu/add',data:data,method:'post'});

//添加项目经历
export const reqAddCampus = (data)=>requests({url:'/api/campus/addCampus',data:data,method:'post'});





