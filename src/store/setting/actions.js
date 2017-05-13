import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as optionMapType from '@/store/option_map/types'
import * as GlobalType from '@/store/global/types'


const actions = {
    [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
        // dispatch(Type.A_LIST_REQUEST,payload)
        dispatch(optionMapType.A_CATEGORY_MAP).then(()=>{
            /*dispatch(GlobalType.A_USER_AUTO_LOGIN).then(()=>{
                console.log("获取分类及用户数据成功")
            })*/
            console.log("获取分类数据成功")
        })
    },

    [Type.A_LIST_REQUEST]: ({commit, state, dispatch}, payload) => {
        /*commit(Type.M_LIST_LOADING)
        console.log('A_LIST_REQUEST')
        return apiTools.req(api.list, payload, rsp => {
            // rsp = {id:10,name:"hello"}
            commit(Type.M_LIST_RECEIVED, rsp)
            console.log('成功', rsp)
        }, msg => {
            console.log('失败', msg)
            commit(Type.M_LIST_ERROR, msg)
        })*/
    },
    [Type.A_FORM_SUBMIT]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_FORM_SUBMITTING)
        console.log('用户信息完善成功 payload', payload)
        return apiTools.post(api.userInfoPlus, payload, rsp => {
            console.log('用户信息完善成功', rsp)
            commit(Type.M_FORM_DONE, rsp)
        }, msg => {
            console.log('失败', msg)
            commit(Type.M_FORM_ERROR, msg)
        })
    },

}

export default actions
