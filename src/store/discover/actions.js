
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
    [Type.A_POPULAR_START_MAIN]: ({commit, state, dispatch}, payload) => {
        console.log('index',state.popularWaterFall)
        console.log('index',state.popularWaterFall.length)
        if(state.popularWaterFall.length){
            console.log('本地有数据')
        }else{
            console.log('本地无数据')
            return apiTools.req(api.waterfall,payload,rsp =>{
                commit(Type.M_LIST_RECEIVED,rsp)
            })
        }
    },
    [Type.A_WATCH_START_MAIN]: ({commit, state, dispatch}, payload) => {
        return dispatch(Type.A_WATCH_USER_INFO).then(()=>{
            apiTools.req(api.follow_list,payload,rsp =>{
                commit(Type.M_WATCH_LIST_RECEIVED,rsp)
            })
        })
    },
    [Type.A_WATCH_USER_INFO]: ({commit, state, dispatch}, payload) => {
        return apiTools.req(api.follow_list_user,payload,rsp =>{
            commit(Type.M_WATCH_USER_RECEIVED,rsp)
        })
    },




    [Type.A_WATERFALL_ADD]: ({commit,state,dispatch}, payload) => {
        console.log("拉取新的新图片A_WATERFALL_ADD")
        return apiTools.req(api.waterfall_add,payload,rsp =>{
            commit(Type.M_LIST_ADD_RECEIVED,rsp)
        })
      /*return apiTools.req(api.waterfall,payload,rsp =>{
       commit(Type.M_LIST_RECEIVED,rsp)
       console.log("rsp",rsp)
       })*/

    }
}

export default actions
