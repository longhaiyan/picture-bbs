import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
    [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
        // dispatch(Type.A_LIST_REQUEST,payload)
        console.log("intro A_START_MAIN")
        return dispatch(Type.A_PROJECT_REQUEST,{picId:payload.picId})
    },

    [Type.A_PROJECT_REQUEST]: ({commit, state, dispatch}, payload) => {
        return apiTools.req(api.data, payload, rsp => {
            // rsp = {id:10,name:"hello"}
            commit(Type.M_DATA_RECEIVED, rsp)
            console.log('成功', rsp)
        }, msg => {
            console.log('失败', msg)
            commit(Type.M_DATA_ERROR, msg)
        })
    }

}

export default actions
