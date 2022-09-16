import { Promise } from "core-js";
import { reqAddPos, reqDeletePos, reqShowPos, reqShowUsers, reqUpdatePos } from "../api";
const state = {
    allPos:{}
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{},
    // userInfo1:{},
   
};
const mutations = {
    ALLPOS(state,allPos) {
        state.allPos = allPos;
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
        console.log('333333333333333333344444');
        console.log(result);
        if(result.data.code == 1){
            commit("ALLPOS",result.data.name)
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

}
const getters = {
    allPos(state) {
        return state.allPos || {};
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