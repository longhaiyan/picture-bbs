<template>
    <div style="display: flex;justify-content: flex-end;">
        <el-input style="width: 250px;margin-top: 11px;" v-model="searchVal" placeholder="请输入搜索内容" >
            <el-button slot="append" icon="search" @click="onSearch"></el-button>
        </el-input>
        <el-menu :default-active="activeIndex" class="el-menu-demo my-nav" mode="horizontal" @select="handleSelect">
            <!--<el-menu-item index="1">
                <el-button type="primary" @click="onUpload"><i class="el-icon-upload"></i>Upload</el-button>
            </el-menu-item>-->
            <el-submenu index="2">
                <template slot="title" >
                    Discover
                </template>
                <el-menu-item index="2-1" @click="goUrl('/discover/watch')" >
                    我的关注
                </el-menu-item>
                <el-menu-item index="2-2" @click="goUrl('/discover/popular')">最新动态</el-menu-item>
                <el-menu-item index="2-3" @click="goUrl('/discover/recommend')">推荐用户</el-menu-item>
            </el-submenu>
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
                    <el-menu-item index="4-1" @click="goZone(userInfo.userId)">
                        个人主页
                    </el-menu-item>
                    <el-menu-item index="4-2" @click="goSetting">
                        个人设置
                    </el-menu-item>
                    <el-menu-item index="4-3" @click="goMoney">
                        账户信息
                    </el-menu-item>
                    <el-menu-item index="4-4" @click="onPwd">
                        修改密码
                    </el-menu-item>
                    <el-menu-item index="4-5" @click="onLoginOut">
                        退出登录
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="5" class="nav-warn" @click="showMsgList">
                    <el-badge :value="msgCount" :max="99" >
                        <img src="http://bbs.chenxubiao.cn/img/warn.png" alt="">
                    </el-badge>
                </el-menu-item>
            </template>
            <el-menu-item index="6">
                <el-button type="primary" @click="onUpload"><i class="el-icon-upload"></i>Upload</el-button>
            </el-menu-item>

        </el-menu>
        <el-dialog
                title="新通知"
                v-model="msgDialogVisible"
                size="tiny"
                :modal="false"
                custom-class="msgList"
                top="90px"
                @close="msgDialogClose"
                >
            <template v-if="messages&&messages.length">
                <div  v-for="item in messages" class="msg-item" key v-if="item.senderInfo" @click="goZone(item.senderInfo.userId)">
                    <img v-if="!item.senderInfo.avatarId" class="avatar"
                         src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                    <img v-else class="avatar"
                         :src="'http://bbs.chenxubiao.cn/picture/show?id='+item.senderInfo.avatarId" alt="">
                    <div>
                        <p class="info"><span class="name">{{item.senderInfo.userName}}</span>{{item.message}}</p>
                        <p class="time">{{item.time}}</p>
                    </div>

                </div>
            </template>
            <p v-else style="text-align: center">无新消息</p>

        </el-dialog>
        <!--修改密码-->
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
                localUserName: '',
                msgDialogVisible:false,
                searchVal:'',

            };
        },
        computed: {
            ...mapState({
                loginErrorMsg: state => state.myGlobal.loginErrorMsg,
                userInfo: state => state.myGlobal.userInfo,
                msgCount: state => state.myGlobal.msgCount,
                messages: state => state.myGlobal.messages,
            })
        },
        watch: {
            userInfo: function () {
                console.log('userInfo 被修改', this.userInfo)
                this.isLogin()
            },
            messages:function () {
                console.log("messages",this.messages)
            }
        },
        methods: {
            ...mapActions({
                loginShow: GlobalType.A_LOGIN_SHOW,
                registerShow: GlobalType.A_REGISTER_SHOW,
                uploadShow: GlobalType.A_UPLOAD_SHOW,
                pwdShow: GlobalType.A_PWD_SHOW,
                loginOut: GlobalType.A_USER_LOGIN_OUT,
                autoLogin: GlobalType.A_USER_AUTO_LOGIN,
                liveOpen: GlobalType.A_LIVE_OPEN,
                liveUpdate: GlobalType.A_MESSAGE_UPDATE,
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
                if(!window.initState.isLogin){
                    this.loginShow()
                }else {
                    this.uploadShow()
                }
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
                this.loginOut().then(() => {
                    self.localUserName = ''
                    window.initState.isLogin = false
                    $('.my-footer').show()
                    self.$message({
                        type: 'success',
                        message: '注销成功'
                    })
                    this.GM_routerPush({
                        path: '/',
                    })

                }, () => {
                    self.$message({
                        type: 'error',
                        message: '注销失败'
                    })
                })
            },
            showMsgList:function () {
                console.log('click')
                this.msgDialogVisible = true
                console.log('this.msgDialogVisible',this.msgDialogVisible)

            },
            msgDialogClose:function () {
                this.liveUpdate()
            },
            pwdDialogClose:function () {

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
            goZone:function (id) {
                event.stopPropagation()
                console.log("id",id)
                if(id){
                    this.GM_routerPush({
                        path: '/home/zone',
                        query: {
                            userId: id
                        }
                    })
                }
            },
            goSetting:function () {
                event.stopPropagation()
                this.GM_routerPush({
                    path: '/setting/user_setting',
                })
            },
            goPopular:function (id) {
                event.stopPropagation()
                if(!window.initState.isLogin){
                    this.loginShow()
                }else{
                    this.GM_routerPush({
                        path: '/discover/popular',
                    })
                }

            },
            goMoney:function (id) {
                event.stopPropagation()
                if(!window.initState.isLogin){
                    this.loginShow()
                }else{
                    this.GM_routerPush({
                        path: '/setting/money',
                    })
                }

            },

            onPwd:function () {
                this.pwdShow()
            },
            goUrl:function (url) {
                event.stopPropagation()
                if(!window.initState.isLogin){
                    this.loginShow()
                }else{
                    this.GM_routerPush({
                        path: url,
                    })
                }
            },
            onSearch(){
                let self = this
                if(this.searchVal){
                    this.GM_routerPush({
                        path: '/search',
                        query:{
                            value:self.searchVal
                        }
                    })
                }

            }
        },
        mounted(){
            console.log('userInfo', this.userInfo)
            if (window.initState.isLogin) {
                console.log("隐藏")
                $('.my-footer').hide()
                this.autoLogin()
            }
            this.liveOpen()
        },
        components: {
            MyModal
        }
    }
</script>
