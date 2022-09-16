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
export const reqAllPosition = ()=>requests({url:''})
