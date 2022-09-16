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
            path: "/register",
            component: register
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
            }
        ]
        },
        {
            path: "/result",
            component: result
        },
        {
            path: "*",
            redirect: "/homePage"
        }
    ]
})