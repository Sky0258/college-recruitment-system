import { Promise } from "core-js";
import {reqAddCampus, reqSelfInfo,reqShowCampus,reqUpdateInfo,reqDeleteCampus, reqShowEdu, reqAddEdu, reqAddProject, reqShowProject, reqDeleteProject, reqUpload, reqUpload1} from "../api";
const state = {
    selfInfo:{},
    showCampus:{},
    showEdu:{},
    showProject:{},
    // token:localStorage.getItem('TOKEN'),
    
};
const mutations = {
    SELFINFO(state,selfInfo){
        state.selfInfo = selfInfo;
    },
    SHOWCAMPUS(state,showCampus) {
        state.showCampus = showCampus;
    },
    SHOWEDU(state,showEdu){
        state.showEdu = showEdu;
    },
    SHOWPROJECT(state,showProject) {
        state.showProject = showProject;
    }
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

    //添加学历
    async addEdu({commit},data){
        let result = await reqAddEdu(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //展示项目经历
    async showProject({commit}){
        let result = await reqShowProject();
        console.log('VVVVVVVVVVVVVVVVVVVVVVBBBBBBBBBB');
        console.log(result);
        if(result.data.code == 1){
            commit("SHOWPROJECT",result.data.name);
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //添加项目经历
    async addProject({commit},data){
        let result = await reqAddProject(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },
    
    //删除项目经历
    async deleteProject({commit},data){
        let result = await reqDeleteProject(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //上传头像
    async upLoad({commit},data){
        let result = await reqUpload(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //上传附件
    async upLoad1({commit},data){
        let result = await reqUpload1(data);
        console.log(result);
        if(result.data.code == 1){
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
    },
    showEdu(state){
        return state.showEdu || {};
    },
    showProject(state) {
        return state.showProject || {};
    }
    
};
export default{
    state,
    mutations,
    actions,
    getters
}