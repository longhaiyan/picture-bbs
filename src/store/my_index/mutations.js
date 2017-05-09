/**
 * Created by longhaiyan on 17/4/8.
 */
import * as Type from './types'
export default {
    [Type.M_LIST_RECEIVED]: (state,payload)=>{
        console.log("M 初始化图片数据",payload)
        Object.assign(state, {indexWaterFall:payload.data})
        // Object.assign(state.indexWaterFall,arr)
    },
    [Type.M_LIST_ADD_RECEIVED]: (state,payload)=>{
        console.log("获取更多图片",payload)
        let arr = state.indexWaterFall.concat(payload.data)
        Object.assign(state, {indexWaterFall:arr})
        // Object.assign(state.indexWaterFall,arr)

    },

}