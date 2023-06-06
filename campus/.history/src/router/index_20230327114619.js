import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import homePage from '../views/home/homePage.vue'
import login from '../views/login/login.vue'
import register from '../views/login/register.vue'
import person from '../views/person/person.vue'
import result from '../views/main/result.vue'
import selfInfo from '../views/person/selfInfo.vue'
import selfInfo1 from '../views/person/selfInfo1.vue'
import award from '../views/person/award.vue'
import level from '../views/person/level.vue'
import project from '../views/person/project.vue'
import upload from '../views/person/upload.vue'
import searchRes from '../views/main/searchRes.vue'
import Like from '../views/main/Like.vue'
import apply from '../views/main/apply.vue'
import admin from '../views/admin/admin.vue'
import recruitment from '../views/admin/Recruitment.vue'
import user from '../views/admin/user.vue';
import addRec from '../views/admin/addRec.vue'
import adminApply from '../views/admin/adminApply.vue'

import recommend from '../views/main/recommend.vue'
import findPassword from '../views/login/findPassword.vue'

//重写push和replace 
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}

VueRouter.prototype.replace = function (location, resole, reject) {
    if (resole && reject) {
        originReplace.call(this, location, resole, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
}


export default new VueRouter({
    routes: [{
            path: "/homePage",
            component: homePage
        },
        {
            path: "/login",
            component: login
        },
        {
            path: "/findPassword",
            component: findPassword
        },
        {
            path: "/register",
            component: register
        },
        {
            path: "/searchRes",
            component: searchRes
        },
        {
            path: "/Like",
            component: Like
        },
        {
            path: "/apply",
            component: apply
        },
        {
            path: "/recommend",
            component: recommend
        },
        {
            path: "/person",
            component: person,
            children: [{
                path: '/selfInfo',
                component: selfInfo
            },
            {
                path: '/selfInfo1',
                component: selfInfo1
            },
            {
                path: '/award',
                component: award
            },
            {
                path: '/level',
                component: level
            },
            {
                path: '/project',
                component: project
            },
            {
                path: '/upload',
                component: upload
            }
        ]
        },
        {
            path: "/result",
            component: result
        },
        {
            path: "/admin",
            component: admin,
            redirect: '/recruitment',
            children:[
                {
                path: '/recruitment',
                component: recruitment
            },
            {
                path: '/addRec',
                component: addRec
            },
            {
                path: '/user',
                component: user
            },
            {
                path: '/adminApply',
                component: adminApply
            },
        ]
        },
        {
            path: "*",
            redirect: "/login"
        }
    ]
})