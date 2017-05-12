/**
 * Created by longhaiyan on 17/3/30.
 */
export default {
    // 登录弹窗状态
    loginDialogStep: '', // onload, submitting, error
    registerDialogStep: '', // onload, submitting, error
    uploadDialogStep: '', // onload, submitting, error
    // 登录错误信息
    loginErrorMsg: '',
    uploadErrorMsg: '',
    loginDialogVisible: false,
    registerDialogVisible: false,
    uploadDialogVisible: false,
    userInfo:{
        userId: '',
        avatarId: '',
        backgroundId: '',
        userName: '',
        email: '',
        cellphone: '',
        sex: '0',
        birthday: null,
        description: '',
        categoryIds:[],
    },
    // 验证码
    code: '',
    isLive:false,
    msgCount: null,
    messages:[]
}