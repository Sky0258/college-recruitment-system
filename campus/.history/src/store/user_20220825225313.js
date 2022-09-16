import { Promise } from "core-js";
import {reqUserLogin } from "../api";
const state = {
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
    // message:"",
};
const mutations = {
    // MESSAGE(state,message){
    //     state.message = message;
    // },
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
    //注册
    // async userRegister({commit},user){
    //    let result = await reqUserRegister(user);
    //    if(result.data.code == 200){
    //        return 'ok';
    //    }else{
    //     return Promise.reject(new Error("faile"));
    //    }
    // },
    //登录
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        if(result.code == 1){
            console.log('result');
            // commit("USERLOGIN",result.data.data);
            // localStorage.setItem("TOKEN",result.data.data);
            return "ok";
        }else{
            // commit("MESSAGE",result.data.msg);
            return Promise.reject(new Error('faile'));
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
    // message(state){
    //     return state.message;
    // }
};
export default{
    state,
    mutations,
    actions,
    getters
}