import requests from './request'; 
import axios from "axios";

//注册接口
//export const reqUserRegister = (data)=>requests({url:'/api/account/register',data,method:'post'});
//登录接口
export const reqUserLogin = (data)=>requests({url:'/api/user/login',params:data,method:'post'});

//注册接口
export const reqUserRegister = (data)=>requests({url:'/api/user/register',data,method:'post'});

//搜索接口
export const reqContentSearch = (data)=>requests({url:'/api/pos/likeByCondition',params:data,method:'get'});

//查看全部岗位接口
export const reqAllPosition = (data)=>requests({url:'/api/pos/showAll',params:data,method:'get'});

//查看个人信息接口
export const reqSelfInfo = ()=>requests({url:'/api/info/showAll',method:'get'});

//修改个人信息
export const reqUpdateInfo = (data)=>requests({url:'/api/info/update',data:data,method:'post'});

//查看在校经历
export const reqShowCampus = ()=>requests({url:'/api/campus/showCam',method:'get'});

//增加在校经历
export const reqAddCampus = (data)=>requests({url:'/api/campus/addCampus',data:data,method:'post'});

//删除在校经历
export const reqDeleteCampus = (data)=>requests({url:'/api/campus/deleteCam',params:data,method:'get'});

//查看学历
export const reqShowEdu = ()=>requests({url:'/api/edu/showAll',method:'get'});

//添加学历
export const reqAddEdu = (data)=>requests({url:'/api/edu/add',data:data,method:'post'});

//展示项目经历
export const reqShowProject = ()=>requests({url:'/api/project/showAll',method:'get'});

//添加项目经历
export const reqAddProject = (data)=>requests({url:'/api/project/add',data:data,method:'post'});

//删除项目经历
export const reqDeleteProject = (data)=>requests({url:'/api/project/delete',params:data,method:'get'});

//申请职位
export const reqAddWork = (data)=>requests({url:'/api/resume/add',data:data,method:'post'});

//查看已申请职位
export const reqShowApplyWork = ()=>requests({url:'/api/resume/show',method:'get'});

//根据id查看职位详情信息
export const reqIdProject = (data)=>requests({url:'/api/pos/selectById',params:data,method:'get'});

//撤销申请
export const reqDeleteApply = (data)=>requests({url:'/api/resume/delete',params:data,method:'post'});

//上传头像
export const reqUpload = (data)=>requests({url:'/api/info/uploadPic',data:data,method:'post'});

//上传附件
export const reqUpload1 = (data)=>requests({url:'/api/info/uploadResume',data:data,method:'post'});

//查看收藏
export const reqShowLike = (data)=>requests({url:'/api/collection/showAll',params:data,method:'get'});

//收藏信息
export const reqAddLike = (data)=>requests({url:'/api/collection/add',headers:{header:'/api'},params:data,method:'post'});

//取消收藏
export const reqDeleteLike = (data)=>requests({url:'/api/collection/delete',params:data,method:'post'});

//后台添加职位
export const reqAddPos = (data)=>requests({url:'/api/backstage/pos/add',data:data,method:'post'});

//后台查看职位
export const reqShowPos = (data)=>requests({url:'/api/backstage/pos/showAll',params:data,method:'get'});

// 后台查看个人公司职位
export const reqShowCompanyPos = (data)=>requests({url:'/api/backstage/pos/showCompanyPos',params:data,method:'get'});


//后台修改职位
export const reqUpdatePos = (data)=>requests({url:'/api/backstage/pos/update',data:data,method:'post'});

//后台删除职位
export const reqDeletePos = (data)=>requests({url:'/api/backstage/pos/delete',params:data,method:'post'});

//后台查看所有用户信息
export const reqShowUsers = ()=>requests({url:'/api/backdesk/user/showAll',method:'get'});

//后台修改用户
export const reqChangeUser = (data)=>requests({url:'/api/backdesk/user/update',data:data,method:'post'});

//后台查看所有申请
export const reqShowApplyPos = ()=>requests({url:'/api/backstage/resume/showAll',method:'get'});

//后台查看个人公司申请
export const reqShowCompanyApplyPos = ()=>requests({url:'/api/backstage/resume/showMyCompany',method:'get'});

//后台查看学历情况
export const reqAdminEdu = (data)=>requests({url:'/api/backstage/edu/showAll',params:data,method:'get'});

//后台查看获奖情况
export const reqAdminAward = (data)=>requests({url:'/api/backstage/campus/showAll',params:data,method:'get'});

//后台查看项目经历
export const reqAdminProject = (data)=>requests({url:'/api/backstage/pro/showAll',params:data,method:'get'});

// 前台推荐岗位
export const reqRecommendPos = (data)=>requests({url:'/api/collection/recommend',method:'get'});

// 忘记密码发送邮箱验证码
export const reqSendCode = (data)=>requests({url:'/api/user/sendCode',data:data,method:'post'});











