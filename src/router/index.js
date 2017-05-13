import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import demo from '@/components/demoView/demo'
import store from '@/store'
import routerQuery from './routerQuery'
import * as demoTypes from '@/store/test/types'

import { routesConfig } from './routesConfig'
import routerBefore from './routerBefore'

import { NO_NEED_LOGIN_ROUTER } from  '../constants/router'

Vue.use(Router)
const routerInit = function (store) {
    const routes = routesConfig(store)

    const router = new Router({
        routes,
        // mode: 'history'
    })
    // 全局路由钩子
    router.beforeEach((to, from, next) => {
        console.info('全局路由钩子.beforeEach', to, from, store)
        /*if (!to.name || NO_NEED_LOGIN_ROUTER.has(to.name)) {
            console.log('进入重定向')
            next({name: 'Hello'})
        }*/

        // 拦截错误path和不允许访问的path 的情况
        if (!to.name) {
            console.log('不可访问 进入重定向')
            next({name: 'hello'})
        }
        // 拦截未登录的情况,暂时把登陆写在 window 下
        else if (!window.initState.isLogin && !NO_NEED_LOGIN_ROUTER.has(to.name)) {
            console.log('未登录 进入重定向')
            next({name: 'hello'})
        }
        // 剩下的放行
        else {
            routerBefore({to, from, next}, store)
        }
        // routerBefore({to, from, next}, store)
    })

    return router

}
export default routerInit

/*export default new Router({
 routes: [
 {
 path: '/',
 name: 'Hello',
 component: Hello,
 children:[
 {
 path: 'demoView/demo',
 component: demo,
 beforeEnter: (to, from, next) => {
 // ...
 let query = routerQuery(to)
 let payload = {
 ...query
 }
 console.log(to)
 console.log(from)
 store.dispatch(demoTypes.A_LIST_REQUEST,payload);
 // store.dispatch(managementProductTypes.A_LIST_REQUEST, payload)

 next();

 }
 }
 ],
 }
 ]
 })*/
