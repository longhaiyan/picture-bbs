<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <el-button type="primary" @click="onUpload">Upload</el-button>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <router-link to="/discover/popular">Discover</router-link>
                </template>
                <el-menu-item index="2-1"><router-link to="/discover/popular">分类一</router-link></el-menu-item>
                <el-menu-item index="2-2">分类二</el-menu-item>
                <el-menu-item index="2-3">分类三</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">
                <el-button type="text" @click="onLogin">登录</el-button>
                <span>/</span>
                <el-button type="text" @click="onRegister">注册</el-button>
            </el-menu-item>
            <el-menu-item v-if="!localUserName" index="3">
                <el-button type="text" @click="onLogin">登录</el-button>
                <span>/</span>
                <el-button type="text" @click="onRegister">注册</el-button>
            </el-menu-item>
            <template v-else>
                <el-submenu index="4" class="userInfoBox">
                    <template slot="title" style="">

                        <img v-if="!userInfo.avatarId" src="http://bbs.chenxubiao.cn/img/userpic.png" alt=""
                             style="width: 40px;height: 40px;border-radius: 100%;">
                        <img v-else :src="'http://bbs.chenxubiao.cn/picture/show?id='+userInfo.avatarId" alt=""
                             style="width: 40px;height: 40px;border-radius: 100%;">

                        <span>{{localUserName}}</span>
                    </template>
                    <el-menu-item index="4-1">
                        <router-link to="/home/zone">个人主页</router-link>
                    </el-menu-item>
                    <el-menu-item index="4-2">
                        <router-link to="/setting/user_setting">个人设置</router-link>
                    </el-menu-item>
                    <el-menu-item index="4-3" @click="onLoginOut">
                        <router-link to="/">退出登录</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="5">
                    <el-button type="primary" @click="onUpload">Upload</el-button>
                </el-menu-item>
            </template>

        </el-menu>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'
    import * as GlobalType from '@/store/global/types'
    import MyModal from  './my_modal.vue'
    export default {
        name: "header",
        data() {
            return {
                activeIndex: '1',
                localUserName: ''
            };
        },
        computed: {
            ...mapState({
                loginErrorMsg: state => state.myGlobal.loginErrorMsg,
                userInfo: state => state.myGlobal.userInfo,
            })
        },
        watch: {
            userInfo: function () {
                console.log('suerInfo 被修改',this.userInfo)
                this.isLogin()
            }
        },
        methods: {
            ...mapActions({
                loginShow: GlobalType.A_LOGIN_SHOW,
                registerShow: GlobalType.A_REGISTER_SHOW,
                uploadShow: GlobalType.A_UPLOAD_SHOW,
                loginOut: GlobalType.A_USER_LOGIN_OUT,
                autoLogin: GlobalType.A_USER_AUTO_LOGIN,
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
            onUpload(){
                console.log('header onRegister')
                this.uploadShow()
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
                if (this.userInfo.userName) {
                    this.localUserName = this.userInfo.userName
                }
            },
            onLoginOut(){
                let self = this
                this.loginOut().then(()=>{
                    this.localUserName = ''
                    self.$message({
                        type: 'success',
                        message: '注销成功'
                    })
                },()=>{
                    self.$message({
                        type: 'error',
                        message: '注销失败'
                    })
                })
            },
            /*toZone(){
                console.log("toZone")
                let self = this
                this.GM_routerPush({
                    path: '/home/zone',
                    query: {
                        isHome:true,
                        userId: self.userInfo.userId
                    }
                })
            }*/
        },
        mounted(){
            console.log('userInfo',this.userInfo)
            if(window.initState.isLogin){
                this.autoLogin()
            }
        },
        components: {
            MyModal
        }
    }
</script>
