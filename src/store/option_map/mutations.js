import * as Type from './types'

export default {
    [Type.M_TAG_RECEIVED]: (state, payload) => {
        Object.assign(state, {
            tags: payload.data
        })
        console.log('M_TAG_RECEIVED',state)
    },
    [Type.M_CATEGORY_RECEIVED]: (state, payload) => {
        Object.assign(state, {
            categories: payload.data
        })
        console.log('M_CATEGORY_RECEIVED',state)
    }
}
