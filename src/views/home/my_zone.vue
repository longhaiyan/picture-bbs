<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px !important;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
<template>
    <div class="my-zone">
        <div class="zone-header">
            <div class="cover_photo" v-if="userInfo.backgroundId"
                 v-bind:style="{backgroundImage: 'url(http://bbs.chenxubiao.cn/picture/show?id=' + userInfo.backgroundId + ')'}"></div>
            <div v-else class="cover_photo"></div>
            <div class="user_avatar">
                <div class="wrapper">
                    <img class="avatar_img" v-if="!userInfo.avatarId" src="http://bbs.chenxubiao.cn/img/userpic.png"
                         alt=""
                    >
                    <img class="avatar_img" v-else :src="'http://bbs.chenxubiao.cn/picture/show?id='+userInfo.avatarId"
                         alt="">
                </div>
            </div>
            <div class="profile_buttons">
                <el-button type="text">个人设置</el-button>
                <el-button type="text">个人管理</el-button>
                <el-button type="primary" @click="onUploadBg">上传背景图</el-button>
            </div>
            <div class="user_info">
                <h3 class="name">{{homeInfo.userName}}</h3>
                <p class="info">
                    <span v-if="homeInfo.views > -1">{{homeInfo.views}} 热度</span>
                    <span v-if="homeInfo.likes > -1">{{homeInfo.likes}} 喜欢</span>
                    <el-button type="text" v-if="homeInfo.followers > -1" @click="showFollow(0)">{{homeInfo.followers}} 粉丝</el-button>
                    <el-button type="text" v-if="homeInfo.following > -1" @click="showFollow(1)">{{homeInfo.following}} 关注</el-button>
                </p>
            </div>
        </div>
        <div class="zone-show">
            <waterfall
                    :align="align"
                    :line-gap="400"
                    :min-line-gap="100"
                    :max-line-gap="220"
                    :single-max-width="600"
                    :watch="homeInfo.project"
                    ref="waterfall"
            >
                <!-- each component is wrapped by a waterfall slot -->
                <waterfall-slot
                        v-for="(item, index) in homeInfo.project"
                        :width="item.width"
                        :height="item.height"
                        :order="index"
                        :key="index"
                        move-class="item-move"

                >
                    <!--<myWaterFallSlot :index="index" :item="item"></myWaterFallSlot>-->
                    <div @click="onIntro(item.picId)" class="item photo_thumbnail"
                         :style="'background-image:url(http://bbs.chenxubiao.cn/picture/show?id=' + item.picId"
                         :index="index">
                        <!--<div class="item photo_thumbnail"
                             :style="'background-image:url(http://bbs.chenxubiao.cn/img/test1.jpg?id=' + item.picId"
                             :index="index">-->
                        <div class="info ">
                            <div class="credits ">
                                <div class="photo_info_wrap">
                                    <a class="photographer">{{item.title}}</a>
                                </div>
                            </div>

                            <div class="right">
                                <div class="like-button" @click="addLike(item.picId,$event)">
                                    <div>
                                        <!--<a class="button new_fav only_icon hearted">--><!--激活状态-->
                                        <a class="button new_fav only_icon j-like">
                                            <span class="value"></span>
                                            <svg class="icon" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px"
                                                 y="0px">
                                                <path class="shape" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
        C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z"
                                                      fill="#FFFFFF"></path>
                                            </svg>

                                        </a>
                                    </div>
                                </div>


                                <div class="add_to_gallery_button button only_icon"></div>

                            </div>
                        </div>
                    </div>
                </waterfall-slot>
            </waterfall>
        </div>
        <MyModal class="" :data="bgUploadData">
            <el-form :model="bgUploadFormData" ref="bgUploadForm">
                <el-upload
                        class="avatar-uploader"
                        action="http://bbs.chenxubiao.cn/picture/upload/profile"
                        name="uploadFile"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                >
                    <img v-if="bgUploadFormData.imageUrl" :src="bgUploadFormData.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form>
        </MyModal>
        <MyModal class="" :data="followData">
            <template v-if="myFollowList.length">
                <ul class="my-follow" v-for="(item, index) in myFollowList">
                    <li>

                        <img v-if="!item.avatarId" src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                        <img v-else :src="'http://bbs.chenxubiao.cn/picture/show?id=' + item.avatarId" alt="">
                        {{item.userName}}




                    </li>
                </ul>
            </template>
            <p v-else-if="isFollowingNull">无粉丝</p>
            <p v-else>无关注用户</p>

        </MyModal>

    </div>
</template>
<script>
    import MyModal from  '@/components/my_modal.vue'
    import { mapActions, mapState } from 'vuex'
    import * as ZoneTypes from '@/store/my_zone/types'
    import * as GlobalType from '@/store/global/types'
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    import myWaterFallSlot from '@/components/my_waterfall_slot'
    import * as myWaterfallSlotType from '@/store/my_waterfall_solt/types'
    export default{
        name: 'MyZone',
        data(){
            return {
                homeBg: {
                    img: 'http://bbs.chenxubiao.cn/img/test.png'
                },
                bgUploadData: {
                    //                    visible: false,
                    //                    size: 'tiny',
                    confirmButtonText: '确认提交',
                    title: '上传背景图',
                    visible: false

                },
                followData: {
                    size: 'tiny',
                    confirmButtonText: 'ok',
                    title: '我的粉丝',
                    visible: false
                },
                followVisible: false,
                bgUploadFormData: {
                    picId: '233',
                    imageUrl: '',

                },

                imageUrl: '',
                uploadErrorMsg: '上传失败',
                align: 'center',
                userId: this.$route.query.userId || '',
                myFollowList: [],
                isFollowingNull: true,//没有关注用户

                //                isMyHome:true,

            }
        },
        computed: {
            ...mapState({
                bgUploadStep: state => state.myZone.bgUploadStep,
                //                bgId:state => state.myZone.bgId,
                homeInfo: state => state.myZone.homeInfo,
                follows: state => state.myZone.follows,
                following: state => state.myZone.following,
                userInfo: state => state.myGlobal.userInfo,
            })
        },
        watch: {
            homeInfo: function () {
                console.log("homeInfo 变为", this.homeInfo)
            },
            userInfo: function () {
                console.log("userInfo 改变", this.userInfo)
            }
        },
        methods: {
            ...mapActions({
                bgUpload: ZoneTypes.A_BG_UPLOAD,
                dataRequest: ZoneTypes.A_DATA_REQUEST,
                getFollow: ZoneTypes.A_GET_FOLLOW,
                userInfoUpload: GlobalType.A_USER_INFO_UPDATE,
                updateLike: myWaterfallSlotType.A_UPDATE_LIKE,

            }),
            onUploadBg: function () {
                let self = this
                this.openModal(this.bgUploadData, {
                    beforeConfirm(next){
                        if (self.bgUploadFormData.picId) {
                            self.bgUpload({picId: self.bgUploadFormData.picId}).then(() => {

                                if (self.bgUploadStep === 'success') {
                                    self.userInfoUpload({backgroundId: self.bgUploadFormData.picId})
                                    self.$message({
                                        type: 'success',
                                        message: '上传成功'
                                    })
                                    return next()
                                } else {
                                    self.showMessage()
                                    return
                                }
                            })

                        } else {
                            console.log('未获取图片id')
                        }
                    }
                })
            },
            handleAvatarSuccess(res, file, fileList) {
                console.log('res', res)
                console.log('file', file)
                console.log('fileList', fileList)
                this.bgUploadFormData.imageUrl = 'http://bbs.chenxubiao.cn/picture/show?id=' + res.vars.data.id
                if (res.success) {
                    this.bgUploadFormData.picId = res.vars.data.id
                } else {
                    this.$message.error("发送失败")
                }
            },
            beforeAvatarUpload(file) {
                /*const isJPG = file.type === 'image/jpeg';
                 const isLt2M = file.size / 1024 / 1024 < 2;

                 if (!isJPG) {
                 this.$message.error('上传头像图片只能是 JPG 格式!');
                 }
                 if (!isLt2M) {
                 this.$message.error('上传头像图片大小不能超过 2MB!');
                 }
                 return isJPG && isLt2M;*/
            },
            // 打开modal，传入一些回调函数
            openModal(obj, ops) {
                console.log("openModal")
                obj.visible = true
                for (var i in ops) {
                    if (typeof ops[i] === 'function') {
                        obj[i] = ops[i]
                    }
                }
            },
            showMessage() {
                this.$message.error(this.uploadErrorMsg)
            },
            addLike: function (picId, event) {
                event.stopPropagation()
                let self = this
                let curLike = $(event.target).closest('.j-like')
                this.updateLike({picId: picId}).then(() => {
                    if (curLike.hasClass('hearted')) {
                        $(event.target).closest('.j-like').removeClass('hearted')
                    } else {
                        $(event.target).closest('.j-like').addClass('hearted')
                    }
                })

            },
            onIntro: function (picId) {
                console.log("click")
                this.GM_routerPush({
                    path: '/intro',
                    query: {
                        picId: picId
                    }
                })
            },
            showFollow: function (type) {
                let self = this
                self.followVisible = true
                if ((type == 0 && this.homeInfo.followers) || (type == 1 && this.homeInfo.following)) {
                    this.getFollow({type: type}).then(() => {
                        if (type == 0) {
                            self.followData.title = "我的粉丝"
                            self.myFollowList = self.follows

                        } else {
                            self.followData.title = "我关注的人"
                            self.myFollowList = self.following
                            self.isFollowingNull = false

                        }
                        self.followData.visible = true
                    })
                }

            },
            toZone(userId){
                console.log("toZone")
                let self = this
                this.GM_routerPush({
                    path: '/home/zone',
                    query: {
                        isHome: true,
                        userId: userId
                    }
                })
            }

        },
        /*beforeCreate(){
         console.log("beforeCreate")
         console.log('router id',this.$route.query.userId)
         },
         created(){
         console.log("created")
         console.log('router id',this.$route.query.userId)
         },
         beforeMount(){
         console.log("beforeMount")
         console.log('router id',this.$route.query.userId)
         },*/
        mounted() {
            if (this.userId) {
                this.dataRequest({userId: parseInt(this.userId)})
            } else {
                this.dataRequest()
            }
        },
        beforeUpdate(){
            if(!$('.header').hasClass('header-white')){
                $('.header').addClass('header-white')
            }
        },
        /*updated(){
            console.log("updated")
            console.log('router id', this.$route.query.userId)
        },
        activated(){
            console.log("activated")
            console.log('router id', this.$route.query.userId)
        },
        deactivated(){
            console.log("deactivated")
            console.log('router id', this.$route.query.userId)
        },
        beforeDestroy(){
            console.log("beforeDestroy")
            console.log('router id', this.$route.query.userId)
        },*/
        destroyed(){
            $('.header').removeClass('header-white')
        },
        components: {
            MyModal,
            Waterfall,
            WaterfallSlot,
            myWaterFallSlot
        }
    }
</script>