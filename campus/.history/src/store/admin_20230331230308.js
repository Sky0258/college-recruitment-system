import { Promise } from "core-js";
import { reqAddEdu, reqAddPos, reqAdminAward, reqAdminEdu, reqAdminProject, reqChangeUser, reqDeletePos, reqShowApplyPos, reqShowPos, reqShowUsers, reqUpdatePos } from "../api";
const state = {
    allPos:{},
    companyPos:{},
    allUsers:{},
    applyPos:{},
    adminEdu:{},
    adminAward:{},
    adminProject:{}
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
   
};
const mutations = {
    ALLPOS(state,allPos) {
        state.allPos = allPos;
    },
    COMPANYPOS(state,companyPos) {
        state.companyPos = companyPos;
    },
    ALLUSERS(state,allUsers) {
        state.allUsers = allUsers;
    },
    APPLYPOS(state,applyPos) {
        state.applyPos = applyPos;
    },
    ADMINEDU(state,adminEdu) {
        state.adminEdu = adminEdu;
    },
    ADMINAWARD(state,adminAward) {
        state.adminAward = adminAward;
    },
    ADMINPROJECT(state,adminProject) {
        state.adminProject = adminProject;
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
    //后台添加职位
    async addPos({commit},data){
        let result = await reqAddPos(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台查看全部职位
    async showPos({commit},data){
        let result = await reqShowPos(data);
        console.log(result);
        if(result.data.code == 1){
            commit("ALLPOS",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台查看个人公司职位
    async showPos({commit},data){
        let result = await reqShowCompanyPos(data);
        console.log(result);
        if(result.data.code == 1){
            commit("COMPANYPOS",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台修改职位信息
    async updatePos({commit},data){
        let result = await reqUpdatePos(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台删除职位信息
    async deletePos({commit},data){
        let result = await reqDeletePos(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台查看所有用户
    async showUsers({commit}){
        let result = await reqShowUsers();
        console.log(result);
        if(result.data.code == 1){
            commit("ALLUSERS",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台修改用户
    async changeUser({commit},data){
        let result = await reqChangeUser(data);
        console.log(result);
        if(result.data.code == 1){
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台查看所有申请
    async applyPos({commit}){
        let result = await reqShowApplyPos();
        console.log(result);
        if(result.data.code == 1){
            commit("APPLYPOS",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台查看学历
    async adminEdu({commit},data){
        let result = await reqAdminEdu(data);
        console.log(result);
        if(result.data.code == 1){
            commit("ADMINEDU",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台查看获奖情况
    async adminAward({commit},data){
        let result = await reqAdminAward(data);
        console.log(result);
        if(result.data.code == 1){
            commit("ADMINAWARD",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },

    //后台查看项目经历
    async adminProject({commit},data){
        let result = await reqAdminProject(data);
        console.log(result);
        if(result.data.code == 1){
            commit("ADMINPROJECT",result.data.name)
            return 'ok';
        }else{
         return Promise.reject(new Error("faile"));
        }
    },
}
const getters = {
    allPos(state) {
        return state.allPos || {};
    },
    companyPos(state) {
        return state.companyPos || {};
    },
    allUsers(state) {
        return state.allUsers || {};
    },
    applyPos(state) {
        return state.applyPos || {};
    },
    adminEdu(state) {
        return state.adminEdu || {};
    },
    adminAward(state) {
        return state.adminAward || {};
    },
    adminProject(state) {
        return state.adminProject || {};
    },
    // token(state){
    //     return state.token;
    // },
    // userInfo(state){
    //     return state.userInfo || {};
    // },
    // userInfo1(state){
    //     return state.userInfo1 || {};
    // },
    // message(state) {
    //     return state.message;
    // }
    
};
export default{
    state,
    mutations,
    actions,
    getters
}