
import * as Type from './types'

export default {
  [Type.M_LIST_LOADING]: (state, payload) => {
    Object.assign(state, {
      itemsStep: 'loading'
    })
  },
  [Type.M_LIST_RECEIVED]: (state, payload) => {
    console.log('M_LIST_RECEIVED',payload)
    Object.assign(state, payload, {
      itemsStep: 'onload'
    })
    console.log('M_LIST_RECEIVED',state)

  },
  [Type.M_LIST_ERROR]: (state, payload) => {
    Object.assign(state, {
      itemsStep: 'error',
      errorMessage: payload.errorMessage,
      isRedirect:true
    })
    console.log('M_LIST_ERROR',payload)
  }
}
