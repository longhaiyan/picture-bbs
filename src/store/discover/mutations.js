import * as Type from './types'

export default {
    [Type.M_LIST_RECEIVED]: (state,payload)=>{
        console.log("M 初始popular化图片数据",payload)
        Object.assign(state, {popularWaterFall:payload.data})
        // Object.assign(state.indexWaterFall,arr)
    },
    [Type.M_LIST_ADD_RECEIVED]: (state,payload)=>{
        console.log("获取更多popular图片",payload)
        let arr = state.popularWaterFall.concat(payload.data)
        Object.assign(state, {popularWaterFall:arr})
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
    }
}
