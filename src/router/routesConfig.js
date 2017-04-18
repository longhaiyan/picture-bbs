/**
 * Created by longhaiyan on 17/3/26.
 */
import Hello from '@/components/Hello'
import Index from '@/views/index/index'
import demo from '@/components/demoView/demo'
import index from '@/views/index/index'
import store from '@/store'
import routerQuery from './routerQuery'
import * as demoTypes from '@/store/test/types'

let routes = [
  {
    label: '首页',
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/Hello',
    name: 'Hello',
    component: Hello,
    children:[
      {
        path: 'demo',
        component: demo,
      }
    ],
  },

]

function routesConfig ( store ) {
  // main-start

  // 为面包屑导航补全路由，存放在_path
  const itemPS = (it, td) => {
    if (true) {
      it._path = td._path
      // console.log("ps it",it)
    }
  }

  // 加工一下，补全每条路由的 fullpath
  routes.forEach((it1, i1) => {
    if (it1.children) {
      // console.log('it1',it1)
      // console.log('i1',i1)
      it1.children.forEach((it2, i2) => {
        // console.log('it2',it1)
        // console.log('i2',i1)
        itemPS(it2, {
          _path: it1.path + '/' + it2.path
        })
        // console.log('it2')
      })
    }

    itemPS(it1, {
      _path: it1.path
    })
  })

  return routes
  // main-end
}

export {
  routes,
  routesConfig
}
