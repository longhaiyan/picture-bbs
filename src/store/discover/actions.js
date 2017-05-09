
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
    [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
        dispatch(Type.A_LIST_REQUEST, payload)
    },

    [Type.A_LIST_REQUEST]: ({commit, state, dispatch}, payload) => {
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
