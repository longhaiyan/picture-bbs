import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
    [Type.A_UPDATE_LIKE]: ({commit, state, dispatch}, payload) => {
        return apiTools.post(api.like, payload, rsp => {
            console.log('喜欢成功', rsp)
        }, msg => {
            console.log('喜欢失败', msg)
        })
    },

}

export default actions
