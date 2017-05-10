/* eslint-disable indent */
/**
 * Created by longhaiyan on 17/3/30.
 */

import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as optionMapType from '@/store/option_map/types'

const actions = {
    // 登录弹窗
    [Type.A_USER_LOGIN]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_LOGIN_SUBMITTING)

        return apiTools.post(api.login, payload, rsp => {
            console.log('用户登录成功', payload)
            commit(Type.M_LOGIN_ONLOAD, rsp)
        }, msg => {
            commit(Type.M_LOGIN_ERROR, msg)
            console.log('用户登录失败')
        })
    },
    [Type.A_LOGIN_SHOW]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_LOGIN_SHOW)
    },
    [Type.A_LOGIN_HIDE]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_LOGIN_HIDE)
    },

    // 注册弹窗
    [Type.A_USER_REGISTER]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_REGISTER_SUBMITTING)
        return apiTools.post(api.register, payload, rsp => {
            console.log('用户注册成功', payload)
            commit(Type.M_REGISTER_ONLOAD, rsp)
        }, msg => {
            commit(Type.M_REGISTER_ERROR, msg)
            console.log('用户注册失败')
        })
    },
    // 上传图片弹窗
    [Type.A_UPLOAD_IMG]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_UPLOAD_SUBMITTING)

        console.log('图片发布 payload',payload)
        return apiTools.post(api.imgUpload, payload, rsp => {
            console.log('A_UPLOAD_IMG',rsp)
            commit(Type.M_UPLOAD_ONLOAD, rsp)
        }, msg => {
            commit(Type.M_UPLOAD_ERROR, msg)
            console.log('上传失败')
        })
    },

    [Type.A_REGISTER_SHOW]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_REGISTER_SHOW)
    },
    [Type.A_REGISTER_HIDE]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_REGISTER_HIDE)
    },
    [Type.A_UPLOAD_SHOW]: ({commit, state, dispatch}, payload) => {
        dispatch(optionMapType.A_CATEGORY_MAP).then(()=>{
            dispatch(optionMapType.A_TAG_MAP).then(()=>{
                commit(Type.M_UPLOAD_SHOW)
            })
        })

    },
    [Type.A_UPLOAD_HIDE]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_UPLOAD_HIDE)
    },

    [Type.A_GET_CHECK_CODE]: ({commit, state, dispatch}, payload) => {
        return apiTools.req(api.getCode, payload, rsp => {
            commit(Type.M_GET_CHECK_CODE, rsp)
        }, msg => {
            console.log('获取验证码失败',msg)
        })
    },
    // 上传背景图成功时，修改用户信息
    [Type.A_USER_ZONEBG_UPDATE]: ({commit, state, dispatch}, payload) => {
        console.log('userInfoUpload',payload)
        commit(Type.M_USER_ZONEBG_UPDATE, payload)
    },
    [Type.A_USER_INFO_UPDATE]: ({commit, state, dispatch}, payload) => {
        console.log('userInfoUpload',payload)
        commit(Type.M_USER_INFO_UPDATE, payload)
    },
    [Type.A_USER_LOGIN_OUT]: ({commit, state, dispatch}, payload) => {
        return apiTools.post(api.loginOut, payload, rsp => {
            console.log("注销成功")
        }, msg => {
            console.log('注销失败',msg)
        })
    },
    [Type.A_USER_AUTO_LOGIN]: ({commit, state, dispatch}, payload) => {
        return apiTools.req(api.autoLogin, payload, rsp => {
            console.log("自动登录成功")
            commit(Type.M_LOGIN_ONLOAD, rsp)
        }, msg => {
            console.log('自动登录失败',msg)
        })
    },

}

export default actions
