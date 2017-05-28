
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {

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
    [Type.A_POPULAR_START_MAIN]: ({commit, state, dispatch}, payload) => {
        return dispatch(Type.A_WATCH_USER_INFO).then(()=>{
            apiTools.req(api.popular,payload,rsp =>{
                commit(Type.M_POPULAR_LIST_RECEIVED,rsp)
            })
        })
    },
    [Type.A_RECOMMEND_START_MAIN]: ({commit, state, dispatch}, payload) => {
        return dispatch(Type.A_WATCH_USER_INFO).then(()=>{
            apiTools.req(api.user_list,payload,rsp =>{
                commit(Type.M_RECOMMEND_LIST_RECEIVED,rsp)
            })
        })
    },


}

export default actions
