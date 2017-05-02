/**
 * Created by longhaiyan on 17/4/8.
 */
import * as Type from './types'
export default {
    [Type.M_LIST_RECEIVED]: (state,payload)=>{
        console.log("M_LIST_RECEIVEDlllll",payload)
        let arr = state.indexWaterFall.concat(payload.data)
        // Object.assign(state, {indexWaterFall:arr})
        Object.assign(state.indexWaterFall,arr)

    }
}