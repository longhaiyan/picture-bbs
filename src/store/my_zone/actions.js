import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
    [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
        // dispatch(Type.A_DATA_REQUEST,payload)
    },
    [Type.A_DATA_REQUEST]: ({commit, state, dispatch}, payload) => {
        return apiTools.req(api.userInfo, payload, rsp => {
            console.log("获取用户数据成功")
            commit(Type.M_INFO_RECEIVE,rsp)
        }, msg => {
            console.log("获取用户数据失败")
        })
    },
    [Type.A_BG_UPLOAD]: ({commit, state, dispatch}, payload) => {

        console.log('A_BG_UPLOAD')
        return apiTools.post(api.upload, payload, rsp => {
            commit(Type.M_UPLOAD_SUCCESS, payload)
        }, msg => {
            console.log('失败', msg)
        })
    }

}

export default actions
