import { Promise } from "core-js";
import {reqSendCode, reqUserLogin,reqUserRegister } from "../api";
const state = {
    message:{},
    token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
   
};
const mutations = {
    MESSAGE(state,message){
        state.message = message;
    }
    // USERLOGIN(state,token){
    //     state.token = token;
    // },
    // GETUSERINFO(state,userInfo){
    //     state.userInfo = userInfo;
    // },
    // GETUSERINFO1(state,userInfo1){
    //     state.userInfo1 = userInfo1;
    // }
};

const actions = {
    //登录
    async userLogin({commit},data){
        console.log("登录！！！！！！");
        let result = await reqUserLogin(data);
        // console.log(result);
        if(result.data.code == 1){
             // commit("USERLOGIN",result.data.data);      还有用户信息要commit
             localStorage.setItem("TOKEN",result.data.msg);
            return "ok";
        }else{
            commit("MESSAGE",result.data.msg);
            return Promise.reject(new Error('faile'));
        }
    },

    //注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user);
        console.log(result);
        if(result.data.code == 1){
            console.log('注册成功！');
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    // 忘记密码发送邮箱验证码
    async sendCode({commit},data){
        let result = await reqSendCode(data);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },
    
}
const getters = {
    // token(state){
    //     return state.token;
    // },
    // userInfo(state){
    //     return state.userInfo || {};
    // },
    // userInfo1(state){
    //     return state.userInfo1 || {};
    // },
    message(state) {
        return state.message;
    }
    
};
export default{
    state,
    mutations,
    actions,
    getters
}