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
        if(state.indexWaterFall.length){
            console.log('本地有数据')
        }else{
            console.log('本地无数据')
            apiTools.req(api.waterfall,payload,rsp =>{
                commit(Type.M_LIST_RECEIVED,rsp)
            })
        }
    }
}
export default actions
