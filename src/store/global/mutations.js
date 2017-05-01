/* eslint-disable no-trailing-spaces */
/**
 * Created by longhaiyan on 17/3/30.
 */
import * as Type from './types'

export default {
    // 登录弹窗状态
    /* [Type.M_LOGIN_LOADING]: (state, payload) => {
     console.log('M_LOGIN_LOADING', payload)
     }, */
    [Type.M_LOGIN_SUBMITTING]: (state, payload) => {
        console.log('M_LOGIN_SUBMITTING state', state)
        Object.assign(state, {
            loginDialogStep: 'submitting'
        })
        console.log('state.loginDialogStep', state.loginDialogStep)
    },
    [Type.M_LOGIN_ONLOAD]: (state, payload) => {
        console.log('payload', payload)
        Object.assign(state, {
            loginDialogStep: 'onload',
            userInfo: payload.data
        })
        console.log('M_LOGIN_ONLOAD 要回显用户信息', state)
    },
    [Type.M_LOGIN_ERROR]: (state, payload) => {
        console.log('M_LOGIN_ERROR', payload)
        Object.assign(state, {
            loginDialogStep: 'error',
            loginErrorMsg: payload.message
        })
    },
    [Type.M_LOGIN_SHOW]: (state, payload) => {
        console.log('M_LOGIN_SHOW', payload)
        Object.assign(state, {
            loginDialogVisible: true
        })
        console.log('M_LOGIN_SHOW loginDialogVisible', state.loginDialogVisible)
    },
    [Type.M_LOGIN_HIDE]: (state, payload) => {
        console.log('M_LOGIN_HIDE', payload)
        Object.assign(state, {
            loginDialogVisible: false,
            loginDialogStep: '',

        })
        console.log('M_LOGIN_HIDE loginDialogVisible', state.loginDialogVisible)
    },

    // 注册弹窗状态
    [Type.M_REGISTER_SUBMITTING]: (state, payload) => {
        console.log('M_REGISTER_SUBMITTING state', state)
        Object.assign(state, {
            registerDialogStep: 'submitting'
        })
        console.log('state.loginDialogStep', state.loginDialogStep)
    },
    [Type.M_REGISTER_ONLOAD]: (state, payload) => {
        console.log('payload', payload)
        Object.assign(state, {
            registerDialogStep: 'onload',
            userInfo: payload.data
        })
        console.log('M_REGISTER_ONLOAD 要回显用户信息', state)
    },
    [Type.M_REGISTER_ERROR]: (state, payload) => {
        console.log('M_REGISTER_ERROR', payload)
        Object.assign(state, {
            registerDialogStep: 'error',
            loginErrorMsg: payload.message
        })
    },
    [Type.M_REGISTER_SHOW]: (state, payload) => {
        console.log('M_REGISTER_SHOW', payload)
        Object.assign(state, {
            registerDialogVisible: true
        })
        console.log('M_REGISTER_SHOW registerDialogVisible', state.loginDialogVisible)
    },
    [Type.M_REGISTER_HIDE]: (state, payload) => {
        console.log('M_REGISTER_HIDE', payload)
        Object.assign(state, {
            registerDialogVisible: false,
            registerDialogStep: 'onload',
        })
        console.log('M_REGISTER_HIDE registerDialogVisible', state.loginDialogVisible)
    },
    [Type.M_GET_CHECK_CODE]: (state, payload) => {
        console.log('M_GET_CHECK_CODE')
        Object.assign(state, {
            code: payload.code
        })
        console.log('M_GET_CHECK_CODE checkCode', state.code)
    },
    [Type.M_USER_INFO_UPDATE]: (state, payload) => {
        console.log('M_USER_INFO_UPDATE收到的信息', payload)
        Object.assign(state, {userInfo:payload})
        console.log('M_USER_INFO_UPDATE', state)
    }

}
