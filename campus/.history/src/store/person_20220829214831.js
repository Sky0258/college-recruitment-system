import { Promise } from "core-js";
import {reqSelfInfo} from "../api";
const state = {
    selfInfo:{}
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
   
};
const mutations = {
    SELFINFO(state,selfInfo){
        state.selfInfo = selfInfo;
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
    //查看个人信息
    async getSelfInfo({commit}){
        let result = await reqSelfInfo();
        console.log(result);
        if(result.data.code == 1){
            commit("SELFINFO",result.data.name);
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },


    
}
const getters = {
    selfInfo(state) {
        return state.selfInfo || {};
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