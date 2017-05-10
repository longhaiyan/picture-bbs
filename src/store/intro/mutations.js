import * as Type from './types'

export default {

    [Type.M_DATA_RECEIVED]: (state, payload) => {
        console.log('M_DATA_RECEIVED', payload)
        Object.assign(state,{
            projectInfo: payload.data
        })
        console.log('M_DATA_RECEIVED', state)

    },
    [Type.M_DATA_ERROR]: (state, payload) => {

    },

}
