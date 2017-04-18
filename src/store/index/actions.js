/**
 * Created by longhaiyan on 17/4/8.
 */
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
const actions = {
  [Type.A_START_MAIN]: ({commit,state, dispatch},payload) => {
    dispatch(Type.A_LIST_REQUEST, payload)
  },

  [Type.A_LIST_REQUEST]: ({commit,state,dispatch},payload) => {

  }
}
export default actions
