import * as Type from './types'

export default {
    [Type.M_LIST_RECEIVED]: (state, payload) => {
        console.log('M 初始popular化图片数据', payload)
        Object.assign(state, {popularWaterFall: payload.data})
        // Object.assign(state.indexWaterFall,arr)
    },
    [Type.M_LIST_LOADING]: (state, payload) => {
        Object.assign(state, {
            itemsStep: 'loading'
        })
    },
    [Type.M_LIST_ERROR]: (state, payload) => {
        Object.assign(state, {
            itemsStep: 'error',
            errorMessage: payload.errorMessage,
            isRedirect: true
        })
        console.log('M_LIST_ERROR', payload)
    },
    [Type.M_WATCH_LIST_RECEIVED]: (state, payload) => {
        Object.assign(state, {watchMsg: payload.data})
        console.log('获取watch list', state)
    },
    [Type.M_POPULAR_LIST_RECEIVED]: (state, payload) => {
        Object.assign(state, {popularMsg: payload.data})
    },
    [Type.M_RECOMMEND_LIST_RECEIVED]: (state, payload) => {
        Object.assign(state, {recommendMsg: payload.data})
    },
    [Type.M_WATCH_USER_RECEIVED]: (state, payload) => {
        Object.assign(state, {watchUserInfo: payload.data})
        console.log('watch 获取用户数据', state)
    },

}
