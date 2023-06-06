import { Promise } from "core-js";
import {reqContentSearch,reqAllPosition, reqAddWork, reqShowLike, reqAddLike, reqShowApplyWork, reqIdProject, reqDeleteApply, reqDeleteLike, reqRecommendPos } from "../api";
const state = {
    allPosition:{},
    allPosMessage:{},
    searchPosition:{},
    allLike:{},
    allApplyWork:{},
    idProject:{},
    allRecommend:{},
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
    },
    ALLLIKE(state,allLike) {
        state.allLike = allLike;
    },
    ALLAPPLYWORK(state,allApplyWork) {
        state.allApplyWork = allApplyWork;
    },
    IDPROJECT(state,idProject) {
        state.idProject = idProject;
    },
    ALLRECOMMEND(state,allRecommend){
        state.allRecommend = allRecommend;
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
        console.log('898989898989');
        console.log(result);
        if(result.data.code == 1){
            commit("SEARCHPOSITION",result.data.name.records)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //查看全部职位
    async showAllPosition({commit},data){
        let result = await reqAllPosition(data);
        console.log("jkjkkkkkkkkkkkkkkkkkj");
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
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //查看已申请的职位
    async showApplyWork({commit},data){
        let result = await reqShowApplyWork(data);
        if(result.data.code == 1){
            commit("ALLAPPLYWORK",result.data.name);
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //根据Id查看详情信息
    async showIdProject({commit},data){
        let result = await reqIdProject(data);
        if(result.data.code == 1){
            commit("IDPROJECT",result.data.name);
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //撤销申请
    async deleteApply({commit},data){
        let result = await reqDeleteApply(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //查看我的收藏
    async showAllLike({commit},data){
        let result = await reqShowLike(data);
        if(result.data.code == 1){
            commit("ALLLIKE",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //增加收藏
    async addLike({commit},data){
        let result = await reqAddLike(data);
        console.log(result);
        if(result.status == 200){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //取消收藏
    async deleteLike({commit},data){
        let result = await reqDeleteLike(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    // 查看推荐职位
    async showAllRecommend({commit}){
        let result = await reqRecommendPos();
        console.log("RRRRRRRRRRRRRRRRRR");
        console.log(result.data);
        commit("ALLRECOMMEND",result.data);
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
    },
    allLike(state) {
        return state.allLike || {};
    },
    allApplyWork(state) {
        return state.allApplyWork || {};
    },
    idProject(state) {
        return state.idProject || {};
    },
    allRecommend(state) {
        return state.allRecommend || {};
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