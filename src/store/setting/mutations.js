import * as Type from './types'

export default {
    // 表单提交中...
    [Type.M_FORM_SUBMITTING]: (state, payload) => {
        Object.assign(state, {
            formStep: 'submitting'
        })
    },
    // 表单提交成功...
    [Type.M_FORM_DONE]: (state, payload) => {
        Object.assign(state, {
            formStep: 'submitted'
        })
    },
    // 表单加载或提交出错
    [Type.M_FORM_ERROR]: (state, payload) => {
        console.log('M_FORM_ERROR')
        Object.assign(state, {
            formStep: 'error',
            errorMessage: payload.message
        })
        console.log(state)
    },
    [Type.M_SET_NAV]:(state, payload)=>{
        Object.assign(state, {
            navIndex: payload.name
        })
    },
    [Type.M_MONEY_LIST]:(state, payload)=>{
        Object.assign(state, {
            moneyList: payload
        })
    },

}
