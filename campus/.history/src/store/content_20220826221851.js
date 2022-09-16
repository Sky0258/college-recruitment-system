import { Promise } from "core-js";
import {reqUserLogin,reqUserRegister } from "../api";
const state = {
    //message:""
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
   
};
const mutations = {
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
    //搜索
    async contentSearch({commit},data){
        let result = await reqUserRegister(data);
        console.log(result);
        if(result.data.code == 1){
            console.log('注册成功！');
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
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