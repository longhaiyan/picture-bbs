import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import demo from '@/components/demoView/demo'
import store from '@/store'
import routerQuery from './routerQuery'
import * as demoTypes from '@/store/test/types'

import { routesConfig } from './routesConfig'
import routerBefore from './routerBefore'

import {NO_NEED_LOGIN_ROUTER} from  '../constants/router'


Vue.use(Router)
const routerInit = function (store) {
  const routes = routesConfig(store)

  const router = new Router({
    routes,
    // mode: 'history'
  })
  // 全局路由钩子
  router.beforeEach((to, from, next) => {
    // console.info("全局路由钩子.beforeEach", to, from, store);
    if(NO_NEED_LOGIN_ROUTER.has(to.name)){
      console.log("进入重定向")
      next({name:'Hello' })
    }

    routerBefore({to, from, next}, store)
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
