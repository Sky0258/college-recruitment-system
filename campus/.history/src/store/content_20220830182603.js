import { Promise } from "core-js";
import {reqContentSearch,reqAllPosition, reqAddWork } from "../api";
const state = {
    allPosition:{},
    allPosMessage:{},
    searchPosition:{},
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
   
};
const mutations = {
    ALLPOSITION(state,allPosition){
        state.allPosition = allPosition;
    },
    ALLPOSMESSAGE(state,allPosMessage) {
        state.allPosMessage = allPosMessage;
    },
    SEARCHPOSITION(state,searchPosition) {
        state.searchPosition = searchPosition
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
    //搜索职位
    async contentSearch({commit},data){
        let result = await reqContentSearch(data);
        console.log(result);
        if(result.data.code == 1){
            commit("SEARCHPOSITION",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //查看全部职位
    async showAllPosition({commit},data){
        let result = await reqAllPosition(data);
        console.log(result);
        console.log(result.data.name.records);
        if(result.data.code == 1){
            commit("ALLPOSMESSAGE",result.data.name)
            commit("ALLPOSITION",result.data.name.records);
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //申请职位
    async addWork({commit},data){
        let result = await reqAddWork(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },
    
}
const getters = {
    allPosition(state) {
        return state.allPosition || {};
    },
    allPosMessage(state) {
        return state.allPosMessage || {};
    },
    searchPosition(state) {
        return state.searchPosition || {};
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