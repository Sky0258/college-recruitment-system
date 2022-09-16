import { Promise } from "core-js";
import {reqUserLogin,reqCheckCode } from "../api";
const state = {
    message:""
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
   
};
const mutations = {
    MESSAGE(state,message){
        state.message = message;
    },
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
        let result = await reqUserLogin(data);
        // console.log(result);
        if(result.data.code == 1){
             // commit("USERLOGIN",result.data.data);      还有用户信息要commit
            return "ok";
        }else{
            commit("MESSAGE",result.data.msg);
            return Promise.reject(new Error('faile'));
        }
    },

    //登录
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        // console.log(result);
        if(result.data.code == 1){
            return "ok";
        }else{
            // commit("MESSAGE",result.data.msg);
            return Promise.reject(new Error('faile'));
        }
    },

    
}
const getters = {
    message(state){
        return state.message;
    }
    // token(state){
    //     return state.token;
    // },
    // userInfo(state){
    //     return state.userInfo || {};
    // },
    // userInfo1(state){
    //     return state.userInfo1 || {};
    // },
    
};
export default{
    state,
    mutations,
    actions,
    getters
}