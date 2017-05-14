/**
 * Created by longhaiyan on 17/3/26.
 */
import Hello from '@/components/Hello'
import Index from '@/views/index/index'
import MyHome from '@/views/home/my_home'
import MyZoom from '@/views/home/my_zone'
import MySettings from '@/views/setting/my_settings'
import UserSetting from '@/views/setting/user_setting'
import MyDiscover from '@/views/discover/my_discover'
import Popular from '@/views/discover/popular'
import Watch from '@/views/discover/watch'
import Recommend from '@/views/discover/recommend'
import Intro from '@/views/intro/intro'
import demo from '@/components/demoView/demo'
import index from '@/views/index/index'
import store from '@/store'
import routerQuery from './routerQuery'
import * as demoTypes from '@/store/test/types'

let routes = [
    {
        label: '首页',
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/Hello',
        name: 'hello',
        component: Hello,
        children: [
            {
                name:'demo',
                path: 'demo',
                component: demo,
            }
        ],
    },
    {
        path: '/home',
        name: 'myHome',
        component: MyHome,
        children: [
            {
                name:'myZoom',
                path: 'zone',
                component: MyZoom,
            }
        ],
    },
    {
        path: '/setting',
        name: 'mySettings',
        component: MySettings,
        children: [
            {
                name:'user_setting',
                path: 'user_setting',
                component: UserSetting,
            }
        ],
    },
    {
        path: '/discover',
        name: 'myDiscover',
        component: MyDiscover,
        children: [
            {
                name:'popular',
                path: 'popular',
                component: Popular,
            },
            {
                name:'Watch',
                path: 'watch',
                component: Watch,
            },
            {
                name:'Recommend',
                path: 'recommend',
                component: Recommend,
            },


        ],
    },
    {
        path: '/intro',
        name: 'intro',
        component: Intro,
    },
]

function routesConfig (store) {
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
