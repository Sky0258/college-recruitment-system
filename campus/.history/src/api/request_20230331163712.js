//对axios进行二次分装
import axios from "axios";

import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { Store } from "vuex";

axios.defaults.withCredentials = true;

const requests = axios.create({
    timeout: 5000
});

//请求拦截器
requests.interceptors.request.use((config) => {
   
    console.log("axios11111111");

    if(Store.state.user.token) {
        console.log(Store.state.user.token);
    }
    
    // console.log();
    // if(Store.state.user.token){
    //     config.headers.token = Store.state.user.token;
    // }
    //  nprogress.start();
    return config;
})


//响应拦截器
// requests.interceptors.response.use((res)=>{
//     nprogress.done();
//     return res.data;
// },(error)=>{ 
//     return Promise.reject(new Error('faile'));
// });

export default requests;