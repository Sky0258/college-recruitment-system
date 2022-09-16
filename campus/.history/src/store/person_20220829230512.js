import { Promise } from "core-js";
import {reqAddCampus, reqSelfInfo,reqShowCampus,reqUpdateInfo,reqDeleteCampus, reqShowEdu} from "../api";
const state = {
    selfInfo:{},
    showCampus:{}
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
   
};
const mutations = {
    SELFINFO(state,selfInfo){
        state.selfInfo = selfInfo;
    },
    SHOWCAMPUS(state,showCampus) {
        state.showCampus = showCampus;
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

    //修改个人信息
    async updateSelfInfo({commit},data){
        let result = await reqUpdateInfo(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //查看在校情况
    async showCampus({commit}){
        let result = await reqShowCampus();
        console.log(result);
        if(result.data.code == 1){
            commit("SHOWCAMPUS",result.data.name);
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //添加在校情况
    async addCampus({commit},data){
        let result = await reqAddCampus(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //删除在校情况
    async deleteCampus({commit},data){
        let result = await reqDeleteCampus(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //查看学历
    async showEdu({commit}){
        let result = await reqShowEdu();
        console.log(result);
        if(result.data.code == 1){
            commit("SHOWEDU",result.data.name);
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },
    
}
const getters = {
    selfInfo(state) {
        return state.selfInfo || {};
    },
    showCampus(state) {
        return state.showCampus || {};
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