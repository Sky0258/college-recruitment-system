import requests from './request'; 
import axios from "axios";

//注册接口
//export const reqUserRegister = (data)=>requests({url:'/api/account/register',data,method:'post'});
//登录接口
export const reqUserLogin1 = (data)=>requests({url:'/api/user/login',params:data,method:'post'});

export const reqUserLogin = ()=>requests({url:'/user/checkCode',method:'get'});