<template>
    <div id="app">

        <MyModal class="my-login-box" :data="loginData" :step="loginDialogStep" style="text-align: left">
            <el-form :model="loginFormData" ref="loginForm" :rules="loginRules" label-width="100px">
                <el-form-item label="用户名：" prop="userName">
                    <el-input
                            placeholder="请输入用户名"
                            v-model="loginFormData.userName">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password"
                              placeholder="请输入密码"
                              v-model="loginFormData.password">
                    </el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input style="width: 120px;"
                              v-model="loginFormData.code">
                    </el-input>
                    <img src="http://bbs.chenxubiao.cn/kaptcha-image" style="width: 120px;height: 40px;vertical-align: middle;" alt="">
                </el-form-item>
                <el-form-item>
                    <el-button type="text" @click="toRegister">还没有账号，赶紧戳我去注册吧</el-button>
                </el-form-item>
            </el-form>
        </MyModal>
        <MyModal class="my-login-box" :data="registerData" :step="registerDialogStep" style="text-align: left">
            <el-form :model="registerFormData" ref="registerForm" :rules="registerRules" label-width="100px">
                <el-form-item label="邮箱：" prop="email">
                    <el-input
                            placeholder="请输入用户名"
                            v-model="registerFormData.email">
                    </el-input>
                </el-form-item>
                <el-form-item label="用户名：" prop="userName">
                    <el-input
                            placeholder="请输入用户名"
                            v-model="registerFormData.userName">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password"
                              placeholder="请输入密码"
                              v-model="registerFormData.password">
                    </el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="checkPassword">
                    <el-input type="password"
                              placeholder="请确认密码"
                              v-model="registerFormData.checkPassword">
                    </el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input style="width: 120px;"
                              v-model="registerFormData.code">
                    </el-input>
                    <img @click="getkaptchaImg" src="http://bbs.chenxubiao.cn/kaptcha-image" style="width: 120px;height: 40px;vertical-align: middle;" alt="">
                </el-form-item>
            </el-form>
        </MyModal>


        <el-row type="flex" justify="space-around" align="center" class="header">
            <el-col >
                <router-link to="/" class="logo">
                    <img src="http://bbs.chenxubiao.cn/img/logo.ico" alt=""> 图片社区
                </router-link>

            </el-col>
            <el-col class="my_header">
                <MyHeader/>
            </el-col>
        </el-row>
        <!--<img src="./assets/logo.png" alt="">-->
        <el-row class="container">
            <router-view></router-view>
        </el-row>
        <el-row>
            <MyFooter/>
        </el-row>


    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import * as GlobalType from '@/store/global/types'
    import MyHeader from './components/my_header.vue'
    import MyFooter from './components/my_footer.vue'
    import MyModal from  '@/components/my_modal.vue'

    export default {
        name: 'app',
        data(){
            return {
                loginForm: {
                    userName: "",
                    password: "",
                    code: ""
                },
                registerForm: {
                    email:"",
                    userName: "",
                    password: "",
                    checkPassword:"",
                    code: ""

                },
                loginData: {
                    //                    visible: false,
                    size: 'tiny',
                    confirmButtonText: '确认登录',
                    title: '登录'
                },
                registerData: {
                    size: 'tiny',
                    confirmButtonText: '确认注册',
                    title: '注册'
                },
                loginRules: {
                    userName: {
                        /*required: true,
                         message: '请输入用户名',
                         trigger: 'blur'*/
                        required: true,
                        validator: this.checkUserName,
                        trigger: 'blur'
                    },
                    password: {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                        /*require: true,
                         validator: this.checkPwd,
                         trigger: 'blur'*/
                    },
                    code: {
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    }
                },
                registerRules: {
                    userName: {
                        required: true,
                        validator: this.checkUserName,
                        trigger: 'blur'
                    },
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                    ],
                    password: {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    checkPassword: {
                        required: true,
                        validator: this.confirmCheckPassword,
                        trigger: 'blur'
                    },
                    code: {
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    }
                }

            }
        },
        computed: {
            ...mapState({
                loginDialogStep: state => state.myGlobal.loginDialogStep,
                registerDialogStep: state => state.myGlobal.registerDialogStep,
                loginErrorMsg: state => state.myGlobal.loginErrorMsg,
                loginDialogVisible: state => state.myGlobal.loginDialogVisible,
                registerDialogVisible: state => state.myGlobal.registerDialogVisible,
                code: state => state.myGlobal.code
            }),
            loginFormData(){
                return Object.assign(this.loginData, {visible: this.loginDialogVisible})
            },
            registerFormData(){
                return Object.assign(this.registerData, {visible: this.registerDialogVisible})
            }
        },
        watch: {
            loginDialogVisible: function() {
                console.log('loginDialogVisible 的值改变了', this.loginDialogVisible)
                if (this.loginDialogVisible) {
                    this.onLogin()
                }
            },
            registerDialogVisible: function() {
                console.log('registerDialogVisible 的值改变了', this.registerDialogVisible)
                if (this.registerDialogVisible) {
                    this.onRegister()
                }
            }
        },
        methods: {
            ...mapActions({
                userLogin: GlobalType.A_USER_LOGIN,
                userRegister: GlobalType.A_USER_REGISTER,
                loginHide: GlobalType.A_LOGIN_HIDE,
                registerHide: GlobalType.A_REGISTER_HIDE,
                getCheckCode: GlobalType.A_GET_CHECK_CODE,
                registerShow: GlobalType.A_REGISTER_SHOW
            }),
            onLogin(){
                let self = this
//                this.getCheckCode()
                this.openModal(this.loginFormData, {
                    beforeConfirm(next){
                        self.$refs.loginForm.validate(value => {
                            if (value) {
                                self.userLogin({
                                    userName: self.loginFormData.userName,
                                    password: self.loginFormData.password,
                                    code: self.loginFormData.code
                                }).then(() => {
                                    if (self.loginDialogStep === 'error') {
                                        self.showMessage()
                                        return
                                    } else {
                                        self.$message({
                                            type: 'success',
                                            message: '登录成功'
                                        })
                                        return next()
                                    }
                                })
                            }
                        })
                    },
                    beforeCancel(next) {
                        console.log("beforeCancel")
                        self.loginHide().then(() => {
                            return next()
                        })
                    }
                })
            },
            onRegister(){
                let self = this
//                this.getCheckCode()
                this.openModal(this.registerFormData, {
                    beforeConfirm(next){
                        console.log("beforeConfirm")
                        self.$refs.registerForm.validate(value => {
                            if (value) {
                                self.userRegister({
                                    email: self.registerFormData.email,
                                    userName: self.registerFormData.userName,
                                    password: self.registerFormData.password,
                                    code: self.registerFormData.code
                                }).then(() => {
                                    if (self.registerDialogStep === 'error') {
                                        self.showMessage()
                                        return
                                    } else {
                                        self.$message({
                                            type: 'success',
                                            message: '注册并登录成功'
                                        })
                                        return next()
                                    }
                                })
                            }
                        })
                    },
                    beforeCancel(next) {
                        self.registerHide().then(() => {
                            return next()
                        })
                    }
                })

            },
            // 打开modal，传入一些回调函数
            openModal(obj, ops) {
                //                obj.visible = true
                for (var i in ops) {
                    if (typeof ops[i] === 'function') {
                        obj[i] = ops[i]
                    }
                }
            },
            checkUserName(rule, value, callback){
                if (typeof value === 'undefined' || value === '') {
                    return callback(new Error('请输入用户名'))
                }
                return callback()
            },
            confirmCheckPassword(rule, value, callback){
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerFormData.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            },
            showMessage() {
                this.$message.error(this.loginErrorMsg)
            },
            //            检测屏幕滚动事件
            getScroll(){
                window.onscroll = function() {
                    let hasActive = document.querySelector('.header').className.match(/(?:^|\s)header-active(?!\S)/)
                    let top = document.querySelector('body').scrollTop
                    if (top > 0 && !hasActive) {
                        document.querySelector('.header').className += ' header-active '
                    }
                    if (top == 0) {
                        document.querySelector('.header').className = document.querySelector('.header').className.replace(( /(?:^|\s)header-active(?!\S)/), '')
                    }
                }
            },
            toRegister(){
                this.loginHide()
                this.registerShow()
            },
            getkaptchaImg(event){
                event.target.src = "http://bbs.chenxubiao.cn/kaptcha-image?v="+ new Date()
            }
        },
        mounted() {
            this.getScroll()
        },
        components: {
            MyHeader,
            MyFooter,
            MyModal
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        /*background: #abcabc;*/
        /*height: 100%;*/
    }

    .my-login-box .el-dialog {
        min-width: 300px;
    }
</style>
