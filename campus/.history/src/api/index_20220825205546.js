import requests from './request'; 
import axios from "axios";

//注册接口
//export const reqUserRegister = (data)=>requests({url:'/api/account/register',data,method:'post'});
//登录接口
export const reqUserLogin = (data)=>requests({url:'http://119.23.219.2/v2/api-docs/user/login',data,method:'post'});