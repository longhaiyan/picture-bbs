/**
 * Created by longhaiyan on 17/4/8.
 */
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
const actions = {
    [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
        dispatch(Type.A_LIST_REQUEST, payload)
    },

    [Type.A_LIST_REQUEST]: ({commit, state, dispatch}, payload) => {
        console.log('index',state.indexWaterFall)
        console.log('index',state.indexWaterFall.length)
        return apiTools.req(api.waterfall,payload,rsp =>{
            commit(Type.M_LIST_RECEIVED,rsp)
        })
        /*if(state.indexWaterFall.length){
            console.log('本地有数据')
        }else{
            console.log('本地无数据')
        }*/
        /*dispatch(Type.A_WATERFSLL_GET,payload).then((rsp)=>{
            // commit(Type.M_LIST_RECEIVED,rsp)
            console.log("装载数据完成")
        })*/

    },
    [Type.A_WATERFSLL_GET]: ({commit, state, dispatch}, payload) =>{

    },
    /*[Type.A_WATERFSLL_TEST]: ({commit, state, dispatch}, payload) =>{
        let items = [{
            height: 200,
            width: 200
        }]
        return apiTools.req(api.waterfall,payload,rsp =>{
            commit(Type.M_LIST_RECEIVED,rsp)
            console.log("rsp",rsp)
        })
    },*/
    [Type.A_WATERFSLL_ADD]: ({commit,state,dispatch}, payload) => {
        console.log("拉取新的新图片A_WATERFSLL_ADD")
        return apiTools.req(api.waterfall_add,payload,rsp =>{
            console.log("拉取新的新图片",rsp)
            commit(Type.M_LIST_ADD_RECEIVED,rsp)
        })
        /*return apiTools.req(api.waterfall,payload,rsp =>{
            commit(Type.M_LIST_RECEIVED,rsp)
            console.log("rsp",rsp)
        })*/

    }
}

export default actions
