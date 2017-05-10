
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
  [Type.A_CATEGORY_MAP]: ({commit, state, dispatch}, payload) => {
      return apiTools.req(api.category, payload, rsp => {
          // rsp = {id:10,name:"hello"}
          commit(Type.M_CATEGORY_RECEIVED,rsp)
          console.log('CATEGORY成功',rsp);
      }, msg => {
          console.log('CATEGORY失败',msg)
      })
  },

  [Type.A_TAG_MAP]: ({commit, state, dispatch}, payload) => {
    return apiTools.req(api.tag, payload, rsp => {
      commit(Type.M_TAG_RECEIVED,rsp)
      console.log('TAG成功',rsp);
    }, msg => {
      console.log('TAG失败',msg)
    })
  }

}

export default actions
