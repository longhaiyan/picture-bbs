import * as Type from './types'

export default {
    [Type.M_LIST_LOADING]: (state, payload) => {
        Object.assign(state, {
            itemsStep: 'loading'
        })
    },
    [Type.M_UPLOAD_SUCCESS]: (state, payload) => {
        Object.assign(state, {
            // bgId: payload.picId,
            bgUploadStep:'success'
        })
        console.log('M_UPLOAD_SUCCESS', state)

    },
    [Type.M_LIST_ERROR]: (state, payload) => {
        Object.assign(state, {
            itemsStep: 'error',
            errorMessage: payload.errorMessage,
            isRedirect: true
        })
        console.log('M_LIST_ERROR', payload)
    },
    [Type.M_INFO_RECEIVE]: (state, payload) => {

        console.log("M_INFO_RECEIVE payload",payload)
        Object.assign(state, {
            homeInfo:payload.data
        })
        console.log("M_INFO_RECEIVE state",state)
    },
    [Type.M_INFO_ERROR]: (state, payload) => {
        Object.assign(state, {

        })
    },

}
