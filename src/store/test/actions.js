
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
  [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
    dispatch(Type.A_LIST_REQUEST,payload)
  },

  [Type.A_LIST_REQUEST]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_LIST_LOADING)
    console.log('A_LIST_REQUEST');
    return apiTools.req(api.list, payload, rsp => {
      // rsp = {id:10,name:"hello"}
      commit(Type.M_LIST_RECEIVED,rsp)
      console.log('成功',rsp);
    }, msg => {
      console.log('失败',msg)
      commit(Type.M_LIST_ERROR,msg)
    })
  }

}

export default actions
