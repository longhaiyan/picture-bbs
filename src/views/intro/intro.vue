<template>
    <div class="my-intro">
        <el-row>
            <el-col class="photo-box" :sm="18" :style="{height:clientHeight-60+'px'}">
                <img @click="bigPhoto" :src="'http://bbs.chenxubiao.cn/picture/show?id=' + picId"
                     alt="">
                <!--<img src="http://bbs.chenxubiao.cn/img/test.png"
                     alt="">-->
                <div class="prv-box" :style="{height:clientHeight-60+'px'}">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <div class="next-box" :style="{height:clientHeight-60+'px'}">
                    <i class="el-icon-arrow-right"></i>
                </div>

            </el-col>
            <el-col :sm="6" class="user-info">
                <div class="attribution_region">
                    <router-link :to="{path: '/home/zone', query: {userId: projectInfo.userId}}">
                        <img :src="'http://bbs.chenxubiao.cn/picture/show?id=' + projectInfo.avatarId" alt="">
                    </router-link>
                    <div>
                        <router-link :to="{path: '/home/zone', query: {userId: projectInfo.userId}}">
                            <p class="name">{{projectInfo.userName}}</p>
                        </router-link>
                        <div>
                            <el-tooltip v-if="projectInfo.isFollow" effect="dark" content="已经关注" placement="bottom">
                                <div  class="following" @click="onFollow">Following</div>
                            </el-tooltip>
                            <el-tooltip v-else effect="dark" content="点击关注" placement="bottom">
                                <div class="fellow" @click="onFollow">Follow</div>
                            </el-tooltip>

                            <div class="like-button" @click="addIntroLike">
                                <a class="new_fav j-like" :class="{ 'new_fav-active': projectInfo.liked }">
                                    <span class="value">{{projectInfo.likeNum}}</span>
                                    <svg class="icon" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px" y="0px">
                                        <path class="shape" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
	C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z"
                                              fill="#FFFFFF"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="description_region">
                    图片介绍？个人介绍？


                </div>
                <div>
                    <el-menu default-active="2" class="el-menu-vertical-demo">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-menu"></i>Details</template>
                            <div>lslsls</div>
                        </el-submenu>
                        <el-menu-item index="2"><i></i>导航二</el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
        <div class="show-photo j-show-photo " :style="{height:clientHeight+'px'}">
            <i class="el-icon-close j-icon-close" @click="closeShow"></i>
            <img :src="'http://bbs.chenxubiao.cn/picture/show?id=' + picId" alt="">
            <div class="prv-box" :style="{height:clientHeight+'px'}">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="next-box" :style="{height:clientHeight+'px'}">
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="user-info">
                <img :src="'http://bbs.chenxubiao.cn/picture/show?id=' + picId" alt="">
                <p>{{projectInfo.userName}}</p>
                <div class="like-button" @click="addLike">
                    <div>
                        <a class="button j-like">
                            <svg class="icon" version="1.1" viewBox="-6.9 -13.1 40 40" x="0px" y="0px">
                                <path class="shape" d="M20.7-7.2c-5.8,0-7.6,4.3-7.6,4.3l0,0c0,0-1.8-4.3-7.6-4.3s-8.4,3.7-8.4,8.1c0,2.2,1.8,5.2,3.6,7.3
	C2.5,10.3,13.1,20.6,13.1,21l0,0c0-0.4,10.6-10.7,12.4-12.7c1.8-2,3.6-5,3.6-7.3C29.1-3.4,26.4-7.2,20.7-7.2z"
                                      fill="#FFFFFF"></path>
                            </svg>
                        </a>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>
<script>
    import {mapActions, mapState} from 'vuex'
    import * as myWaterfallSlotType from '@/store/my_waterfall_solt/types'
    import * as myZoneType from '@/store/my_zone/types'
    import * as introType from '@/store/intro/types'
    export default{
        name: 'intro',
        data(){
            return {
                picId: this.$route.query.picId || '',
                clientHeight: ''
            }
        },
        computed:{
            ...mapState({
                projectInfo: state => state.intro.projectInfo,
                updateFollowingStep: state => state.myZone.updateFollowingStep,
            }),
        },
        methods:{
            ...mapActions({
                updateLike: myWaterfallSlotType.A_UPDATE_LIKE,
                updateFollowing: myZoneType.A_UPDATE_FOLLOWING,
//                projectRequest: introType.A_DATA_REQUEST,
            }),
            bigPhoto: function  () {
                $('.j-show-photo').addClass('show-photo-active')
            },
            closeShow: function () {
                $('.j-show-photo').removeClass('show-photo-active')
            },
            addLike: function (event) {
                let self = this
                let curLike = $(event.target).closest('.j-like')
                this.updateLike({picId: self.picId}).then(()=>{
                    if (curLike.hasClass('hearted')) {
                        $(event.target).closest('.j-like').removeClass('hearted')
                    } else {
                        $(event.target).closest('.j-like').addClass('hearted')
                    }
                })

            },
            addIntroLike: function (event) {
                let self = this
                let curLike = $(event.target).closest('.j-like')
                this.updateLike({picId: self.picId}).then(()=>{
                    if (curLike.hasClass('hearted')) {
                        $(event.target).closest('.j-like').removeClass('hearted')
                        self.projectInfo.likeNum -= 1
                    } else {
                        self.projectInfo.likeNum += 1
                        $(event.target).closest('.j-like').addClass('hearted')
                    }
                })

            },

            onFollow: function () {
                console.log("onFollow")
                let self = this
                this.updateFollowing({userId:self.projectInfo.userId}).then(()=>{
                    if(self.updateFollowingStep !== 'error'){
                        if(self.projectInfo.isFollow){
                            self.projectInfo.isFollow = 0
                            this.$message.success('取消关注成功');
                        }else{
                            self.projectInfo.isFollow = 1
                            this.$message.success('关注成功');
                        }
                    }else {
                        if(self.projectInfo.isFollow){
                            this.$message.error('取消关注失败');
                        }else{
                            this.$message.error('关注失败');
                        }
                    }
                })

            }
        },
        mounted(){
            this.clientHeight = window.innerHeight
            console.log('document.body.clientHeight', window.innerHeight)
        }

    }
</script>