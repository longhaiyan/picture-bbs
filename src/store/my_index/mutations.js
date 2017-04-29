/**
 * Created by longhaiyan on 17/4/8.
 */
import * as Type from './types'
export default {
    [Type.M_LIST_RECEIVED]: (state,payload)=>{
        console.log("M_LIST_RECEIVEDlllll",payload)
        Object.assign(state.indexWaterFall, payload.data)
        console.log('state',state)
    }
}