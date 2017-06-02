
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
  [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
      console.log("search payload",payload)
      return apiTools.req(api.search, {name:payload.value}, rsp => {
          commit(Type.M_LIST_RECEIVED,rsp)
          console.log('成功',rsp);
      }, msg => {
          console.log('失败',msg)
          commit(Type.M_LIST_ERROR,msg)
      })
  },

}

export default actions
