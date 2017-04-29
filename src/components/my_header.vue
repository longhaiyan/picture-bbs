<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link to="/Hello/demo">demo页</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <router-link to="/">index页</router-link>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="!localUserName" index="3">
                <el-button type="text" @click="onLogin">登录</el-button><span>/</span>
                <el-button type="text" @click="onRegister">注册</el-button>
            </el-menu-item>
            <el-submenu index="4" class="userInfoBox" v-else>
                    <template slot="title" style="" >
                        <img src="http://bbs.chenxubiao.cn/img/userImg.jpeg" alt="" style="width: 40px;height: 40px;border-radius: 100%;">
                        <span>{{localUserName}}</span>
                    </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    import {mapActions, mapState} from 'vuex'
    import store from '@/store'
    import MyModal from  './my_modal.vue'
    import * as GlobalType from '@/store/global/types'
    export default {
        name: "header",
        data() {
            return {
                activeIndex: '1',
                localUserName: ''
                /*loginForm: {
                 userName: "",
                 pwd: ""
                 },
                 loginData: {
                 visible: false,
                 size: 'tiny',
                 confirmButtonText: '确认登录',
                 title:'登录'
                 },
                 loginRules:{
                 userName:{
                 /!*required: true,
                 message: '请输入用户名',
                 trigger: 'blur'*!/
                 required: true,
                 validator: this.checkUserName,
                 trigger: 'blur'
                 },
                 pwd:{
                 required: true,
                 message: '请输入密码',
                 trigger: 'blur'
                 /!*require: true,
                 validator: this.checkPwd,
                 trigger: 'blur'*!/
                 }
                 }*/
            };
        },
        computed: {
            ...mapState({
                loginErrorMsg: state => state.myGlobal.loginErrorMsg,
                userName: state => state.myGlobal.username,
            })
        },
        watch: {
            userName: function() {
                console.log("出发 islogin",this.userName)
                this.isLogin()
            }
        },
        methods: {
            ...mapActions({
                loginShow: GlobalType.A_LOGIN_SHOW,
                registerShow: GlobalType.A_REGISTER_SHOW
            }),
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            onLogin(){
                this.loginShow()
            },
            onRegister(){
                console.log('header onRegister')
                this.registerShow()
            },
            // 打开modal，传入一些回调函数
            openModal(obj, ops) {
                obj.visible = true
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
            checkPwd(rule, value, callback){
                if (typeof value === 'undefined') {
                    return callback(new Error('请输入密码'))
                }
                return callback()
            },
            showMessage() {
                this.$message.error(this.loginErrorMsg)
            },
            isLogin(){
                console.log("chufa islogin",this.userName)
                if (this.userName) {
                    console.log("xiugai ")
                    this.localUserName = this.userName

                }
            }
        },
        components: {
            MyModal
        }
    }
</script>
