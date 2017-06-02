import * as Type from './types'

export default {
    [Type.M_LIST_RECEIVED]: (state, payload) => {
        console.log('M_LIST_RECEIVED', payload)
        Object.assign(state, {
            searchStep: 'success',
            searchData:payload

        })
    },
    [Type.M_LIST_ERROR]: (state, payload) => {
        Object.assign(state, {
            searchStep: 'error',
            searchError: payload.message
        })
    }
}
