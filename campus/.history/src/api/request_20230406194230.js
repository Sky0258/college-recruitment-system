//对axios进行二次分装
import axios from "axios";

import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from "../store";

axios.defaults.withCredentials = true;

const requests = axios.create({
    timeout: 5000
});

//请求拦截器
requests.interceptors.request.use((config) => {

    if(store.getters.token) {
        config.headers.token = store.getters.token;
    }
     nprogress.start();
    return config;
})


//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res;
},(error)=>{ 
    return Promise.reject(new Error('faile'));
});

export default requests;