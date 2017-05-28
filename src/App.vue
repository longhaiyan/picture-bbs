<template>
    <div id="app">
        <MyModal class="my-login-box" :data="loginData" :step="uploadDialogStep" style="text-align: left">
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
                    <img @click="getkaptchaImg" src="http://bbs.chenxubiao.cn/kaptcha-image"
                         style="width: 120px;height: 40px;vertical-align: middle;" alt="">
                </el-form-item>
                <el-form-item>
                    <el-button type="text" @click="toRegister">还没有账号，赶紧戳我去注册吧</el-button>
                </el-form-item>
            </el-form>
        </MyModal>
        <MyModal class="my-upload-box" :data="uploadData" :step="loginDialogStep" style="text-align: left">
            <el-row type="flex" justify="space-between">
                <el-col :sm="6">
                    <el-upload
                            class="avatar-uploader"
                            action="http://bbs.chenxubiao.cn/picture/upload/project"
                            name="uploadFile"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                    >
                        <img v-if="uploadFormData.imageUrl" :src="uploadFormData.imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-col>
                <el-col :sm="10">
                    <el-form :model="uploadFormData" ref="uploadForm" :rules="uploadRules" label-position="top">
                        <el-form-item label="标题：" prop="picName">
                            <el-input
                                    placeholder="请输入图片名称"
                                    v-model="uploadFormData.picName">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="分类：" prop="categoryId">
                            <el-select v-model="uploadFormData.categoryId">
                                <el-option v-for="item in categories" :label="item.name" key
                                           :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="授权下载：">
                            <el-radio-group @change="radioChange" v-model="uploadFormData.auth">
                                <el-radio label=0>不授权下载</el-radio>
                                <el-radio label=1>授权下载</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item v-if="parseInt(uploadFormData.auth) > 0" label="下载金额：" prop="money">
                            <el-input
                                    placeholder="请输入下载金额"
                                    v-model.number="uploadFormData.money">
                            </el-input>
                        </el-form-item>

                        <el-form-item label="标签：" prop="tagIds">
                            <el-select
                                    v-model="uploadFormData.tagIds"
                                    multiple
                                    filterable
                                    allow-create
                                    placeholder="请选择图片标签"
                                    @change="onSelectChange"
                            >
                                <el-option
                                        v-for="item in tags"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="介绍：" prop="password">
                            <el-input type="textarea"
                                      placeholder="请输入介绍"
                                      v-model="uploadFormData.description">
                            </el-input>
                        </el-form-item>

                    </el-form>
                </el-col>

            </el-row>
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
                    <img @click="getkaptchaImg" src="http://bbs.chenxubiao.cn/kaptcha-image"
                         style="width: 120px;height: 40px;vertical-align: middle;" alt="">
                </el-form-item>
            </el-form>
        </MyModal>
        <MyModal class="my-login-box" :data="pwdData" :step="pwdDialogStep" style="text-align: left">
            <el-form :model="pwdFormData" ref="pwdForm" :rules="pwdRules" label-width="130px">
                <el-form-item label="旧密码：" prop="oldPasswd">
                    <el-input type="password"
                              placeholder="请输入当前密码"
                              v-model="pwdFormData.oldPasswd">
                    </el-input>
                </el-form-item>
                <el-form-item label="新密码：" prop="newPasswd">
                    <el-input type="password"
                              placeholder="请输入新密码"
                              v-model="pwdFormData.newPasswd">
                    </el-input>
                </el-form-item>
                <el-form-item label="确认新密码：" prop="checkPassword">
                    <el-input type="password"
                              placeholder="请确认新密码"
                              v-model="pwdFormData.checkPassword">
                    </el-input>
                </el-form-item>
            </el-form>
        </MyModal>


        <el-row type="flex" justify="space-around" align="center" class="header">
            <el-col>
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
    import { mapActions, mapState } from 'vuex'
    import * as GlobalType from '@/store/global/types'
    import * as MyIndexType from '@/store/my_index/types'
    import MyHeader from './components/my_header.vue'
    import MyFooter from './components/my_footer.vue'
    import MyModal from  '@/components/my_modal.vue'
    import * as ZoneTypes from '@/store/my_zone/types'

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
                    email: "",
                    userName: "",
                    password: "",
                    checkPassword: "",
                    code: ""

                },
                loginData: {
                    size: 'tiny',
                    confirmButtonText: '确认登录',
                    title: '登录'
                },
                registerData: {
                    size: 'tiny',
                    confirmButtonText: '确认注册',
                    title: '注册'
                },
                pwdData: {
                    size: 'tiny',
                    confirmButtonText: '确认修改',
                    title: '修改密码'
                },

                uploadData: {
                    size: 'large',
                    confirmButtonText: '发布图片',
                    title: '上传图片',
                    picId: 0,
                    picName: '',
                    categoryId: 0,
                    tagIds: [],
                    description: '',
                    imageUrl: '',
                    auth: "0",
                    money: null

                },
                loginRules: {
                    userName: {
                        validator: this.checkUserName,
                        trigger: 'blur'
                    },
                    password: {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
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
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
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
                },
                pwdRules: {
                    oldPasswd: {
                        required: true,
                        message: '请输入当前密码',
                        trigger: 'blur'
                    },
                    newPasswd: {
                        required: true,
                        message: '请输入新密码',
                        trigger: 'blur'
                    },
                    checkPassword: {
                        required: true,
                        validator: this.confirmNewPassword,
                        trigger: 'blur'
                    }
                },
                uploadRules: {
                    money: {
                        validator: this.confirmMoney,
                        trigger: 'blur'
                    }
                },
                categoryMap: {
                    '0': '动物',
                    '1': '风景',
                    '2': '人像',
                    '3': '无'
                },
                options: [{
                    value: '1',
                    label: 'HTML'
                }, {
                    value: '2',
                    label: 'CSS'
                }, {
                    value: '3',
                    label: 'JavaScript'
                }],

            }
        },
        computed: {
            ...mapState({
                loginDialogStep: state => state.myGlobal.loginDialogStep,
                registerDialogStep: state => state.myGlobal.registerDialogStep,
                uploadDialogStep: state => state.myGlobal.uploadDialogStep,
                pwdDialogStep: state => state.myGlobal.pwdDialogStep,
                loginErrorMsg: state => state.myGlobal.loginErrorMsg,
                registerErrorMsg: state => state.myGlobal.registerErrorMsg,
                uploadErrorMsg: state => state.myGlobal.uploadErrorMsg,
                pwdErrorMsg: state => state.myGlobal.pwdErrorMsg,
                loginDialogVisible: state => state.myGlobal.loginDialogVisible,
                registerDialogVisible: state => state.myGlobal.registerDialogVisible,
                uploadDialogVisible: state => state.myGlobal.uploadDialogVisible,
                pwdDialogVisible: state => state.myGlobal.pwdDialogVisible,
                code: state => state.myGlobal.code,
                categories: state => state.optionMap.categories,
                tags: state => state.optionMap.tags,
            }),
            loginFormData(){
                return Object.assign(this.loginData, {visible: this.loginDialogVisible})
            },
            registerFormData(){
                return Object.assign(this.registerData, {visible: this.registerDialogVisible})
            },
            uploadFormData(){
                return Object.assign(this.uploadData, {visible: this.uploadDialogVisible})
            },
            pwdFormData(){
                return Object.assign(this.pwdData, {visible: this.pwdDialogVisible})
            },

        },
        watch: {
            loginDialogVisible: function () {
                if (this.loginDialogVisible) {
                    this.onLogin()
                }
            },
            registerDialogVisible: function () {
                if (this.registerDialogVisible) {
                    this.onRegister()
                }
            },
            uploadDialogVisible: function () {
                if (this.uploadDialogVisible) {
                    this.onUpload()
                }
            },
            pwdDialogVisible: function () {
                if (this.pwdDialogVisible) {
                    this.onPwd()
                }
            },

            categories: function () {
                console.log('categories', this.categories)
            },
            tags: function () {
                console.log('tags', this.tags)
            }

        },
        methods: {
            ...mapActions({
                userLogin: GlobalType.A_USER_LOGIN,
                userRegister: GlobalType.A_USER_REGISTER,
                upload: GlobalType.A_UPLOAD_IMG,
                changePwd: GlobalType.A_CHANGE_PWD,
                loginHide: GlobalType.A_LOGIN_HIDE,
                uploadHide: GlobalType.A_UPLOAD_HIDE,
                registerHide: GlobalType.A_REGISTER_HIDE,
                pwdHide: GlobalType.A_PWD_HIDE,
                getCheckCode: GlobalType.A_GET_CHECK_CODE,
                registerShow: GlobalType.A_REGISTER_SHOW,
                getIndexWaterFall: MyIndexType.A_LIST_REQUEST,
                getHomeRequest: ZoneTypes.A_DATA_REQUEST,
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
                                        self.showMessage(self.loginErrorMsg)
                                        return
                                    } else {
                                        window.initState.isLogin = true
                                        console.log("隐藏")
                                        $('.my-footer').hide()
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
                                        self.showMessage(self.registerErrorMsg)
                                        return
                                    } else {
                                        window.initState.isLogin = true
                                        console.log("隐藏")
                                        $('.my-footer').hide()
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
            onUpload(){
                let self = this
                //                this.getCheckCode()

                this.openModal(this.uploadFormData, {
                    beforeConfirm(next){
                        console.log("beforeConfirm")
                        self.$refs.uploadForm.validate(value => {
                            /*if (value) {

                             }*/
                            if (self.uploadFormData.picId && value) {
                                console.log('self.uploadFormData', self.uploadFormData);
                                let rlt = {}
                                for (let key in self.uploadFormData) {
                                    let tval
                                    if (/tagIds/.test(key)) {
                                        tval = self.uploadFormData[key].join(',')
                                    }
                                    rlt[key] = tval
                                }
                                let auto = 0
                                if (parseInt(self.uploadFormData.auth) > 0) {
                                    auto = parseInt(self.uploadFormData.money)
                                }
                                self.upload({
                                    picId: self.uploadFormData.picId,
                                    title: self.uploadFormData.picName,
                                    categoryId: parseInt(self.uploadFormData.categoryId),
                                    tagIds: rlt.tagIds,
                                    description: self.uploadFormData.description,
                                    auth: parseInt(self.uploadFormData.auth),
                                    money: auto
                                }).then(() => {
                                    if (self.uploadDialogStep === 'error') {
                                        self.showMessage(self.uploadErrorMsg)
                                        return
                                    } else {
                                        self.$message({
                                            type: 'success',
                                            message: '发布成功'
                                        })
                                        if($('.j-index').length){
                                            self.getIndexWaterFall()
                                        }
                                        if($('.j-my-zone').length){
                                            let userId = self.$route.query.userId||''
                                            if (userId) {
                                                self.getHomeRequest({userId: parseInt(userId)})
                                            } else {
                                                self.getHomeRequest()
                                            }
                                        }
                                        return next()
                                    }
                                })
                            } else {
                                console.log("没有找到图片id")
                                self.$message({
                                    message: '请先上传图片',
                                    type: 'warning'
                                });
                                return
                            }

                        })
                    },
                    beforeCancel(next) {
                        self.uploadHide().then(() => {
                            Object.assign(self.uploadFormData, {
                                size: 'large',
                                confirmButtonText: '发布图片',
                                title: '上传图片',
                                picId: 0,
                                picName: '',
                                categoryId: 0,
                                tagIds: [],
                                description: '',
                                imageUrl: '',
                                auth: "0",
                                money: null
                            })
                            console.log("隐藏前重置数据", self.uploadFormData)
                            return next()
                        })
                    }
                })

            },
            onPwd(){
                let self = this
                this.openModal(this.pwdFormData, {
                    beforeConfirm(next){
                        console.log("beforeConfirm")
                        self.$refs.pwdForm.validate(value => {
                            if (value) {
                                self.changePwd({
                                    oldPasswd: self.pwdFormData.oldPasswd,
                                    newPasswd: self.pwdFormData.newPasswd,
                                }).then(() => {
                                    if (self.pwdDialogStep === 'error') {
                                        self.showMessage(self.pwdErrorMsg)
                                        return
                                    } else {
                                        self.$message({
                                            type: 'success',
                                            message: '修改成功'
                                        })
                                        return next()
                                    }
                                })

                            }

                        })
                    },
                    beforeCancel(next) {
                        self.pwdHide().then(() => {
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
            confirmNewPassword(rule, value, callback){
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.pwdFormData.newPasswd) {
                    console.log('yiyi value', value)
                    console.log('this.pwdFormData.password', this.pwdFormData.newPasswd)
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            },
            confirmMoney: function (rule, value, callback) {
                console.log('value', value, typeof value)
                if (parseInt(this.uploadFormData.auth) > 0 && value === '') {
                    callback(new Error('请输入金额'));
                } else if (!Number.isInteger(value)) {
                    callback(new Error('请输入整数金额'));
                } else {
                    callback();
                }
            },
            showMessage(msg) {
                //                this.$message.error(this.loginErrorMsg)
                this.$message.error(msg)
            },
            //            检测屏幕滚动事件
            getScroll(){
                window.onscroll = function () {
                    let hasActive = document.querySelector('.header').className.match(/(?:^|\s)header-active(?!\S)/)
                    let top = document.querySelector('body').scrollTop
                    if (top > 0 && !hasActive) {
                        $('.header').addClass('header-active')
                    }
                    if (top == 0) {
                        $('.header').removeClass('header-active')
                    }
                }
            },
            toRegister(){
                this.loginHide()
                this.registerShow()
            },
            getkaptchaImg(event){
                event.target.src = "http://bbs.chenxubiao.cn/kaptcha-image?v=" + new Date()
            },
            handleAvatarSuccess(res, file, fileList) {
                console.log('res', res)
                console.log('file', file)
                console.log('fileList', fileList)
                this.uploadFormData.imageUrl = 'http://bbs.chenxubiao.cn/picture/show?id=' + res.vars.data.id
                if (res.success) {
                    this.uploadFormData.picId = res.vars.data.id
                } else {
                    this.$message.error("上传失败")
                }
            },
            onSelectChange: function () {
                console.log('测试')
            },
            radioChange: function () {
                console.log("radio 改变了", this.uploadFormData.auth)
            }
        },
        mounted() {
            this.getScroll()
            console.log('categories', this.categories)
            console.log('tags', this.tags)
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
        height: 100%;
        position: relative;
    }

    .my-login-box {
        text-align: left;
    }

    .my-login-box .el-dialog {
        min-width: 300px;
    }
</style>
