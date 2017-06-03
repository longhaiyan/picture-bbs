<template>
    <div class="my-discover-watch my-discover-recommend j_my-discover-recommend">
        <el-row :gutter="50">
            <el-col :sm="16">
                <div class="recommend-boxes" >
                    <div v-for="(item,index) in recommendMsg" @click="goZone(item.userId)" class="recommend-boxes-item">
                        <img class="avatar_img" v-if="!item.avatarId" src="http://bbs.chenxubiao.cn/img/userpic.png"
                             alt=""
                        >
                        <img class="avatar_img" v-else :src="'http://bbs.chenxubiao.cn/picture/show?id='+item.avatarId"
                             alt="">
                        <p>{{item.userName}}</p>
                        <template v-if="!item.isSelf">
                            <el-tooltip v-if="item.isFollow" effect="dark" content="已经关注" placement="bottom">
                                <div class="following" @click.stop="onFollow(item.userId,index)">Following</div>
                            </el-tooltip>
                            <el-tooltip v-else effect="dark" content="点击关注" placement="bottom">
                                <div class="fellow" @click.stop="onFollow(item.userId,index)">Follow</div>
                            </el-tooltip>
                        </template>
                    </div>
                    <p v-if="!recommendMsg.length">
                        <i class="el-icon-information">暂无推荐用户</i>
                    </p>
                </div>
            </el-col>
            <el-col :sm="8">
                <div class="discover-watch-right">
                    <div class="watch-right_hd" @click="goZone(watchUserInfo.userId)">
                        <img v-if="!watchUserInfo.avatarId" src="http://bbs.chenxubiao.cn/img/userpic.png"
                             alt=""
                        >
                        <img v-else :src="'http://bbs.chenxubiao.cn/picture/show?id='+watchUserInfo.avatarId"
                             alt="">
                        <p>{{watchUserInfo.userName}}</p>
                    </div>
                    <div class="watch-right_bd">
                        <div class="follow-info">
                            <div>
                                <p>{{watchUserInfo.picNum}}</p>
                                <span>PHOTOS</span>
                            </div>
                            <div>
                                <p>{{watchUserInfo.follows}}</p>
                                <span>Followers</span>
                            </div>
                            <div>
                                <p>{{watchUserInfo.otherViews}}</p>
                                <span>Views</span>
                            </div>
                        </div>
                        <div class="money-info">
                            我的账户余额 {{watchUserInfo.money}} 币

                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'
    import * as myZoneType from '@/store/my_zone/types'

    export default{
        name: 'discoverRecommend',
        computed: {
            ...mapState({
                recommendMsg: state => state.discover.recommendMsg,
                watchUserInfo: state => state.discover.watchUserInfo,
                updateFollowingStep: state => state.myZone.updateFollowingStep,
            }),
        },
        methods:{
            ...mapActions({
                updateFollowing: myZoneType.A_UPDATE_FOLLOWING,
                //                projectRequest: introType.A_DATA_REQUEST,
            }),
            goZone:function (id) {
                event.stopPropagation()
                if(id){
                    this.GM_routerPush({
                        path: '/home/zone',
                        query: {
                            userId: id
                        }
                    })
                }
            },
            onFollow: function (id, index) {
                let self = this
                console.log("onFollow", self.recommendMsg[index].isFollow)
                this.updateFollowing({userId: id}).then(() => {
                    if (self.updateFollowingStep !== 'error') {
                        if (self.recommendMsg[index].isFollow) {
                            self.recommendMsg[index].isFollow = 0
                            this.$message.success('取消关注成功');
                        } else {
                            self.recommendMsg[index].isFollow = 1
                            this.$message.success('关注成功');
                        }
                    } else {
                        if (self.recommendMsg[index].isFollow) {
                            this.$message.error('取消关注失败');
                        } else {
                            this.$message.error('关注失败');
                        }
                    }
                })

            },
        },
        mounted(){

        },
        beforeUpdate(){
            if (!$('.header').hasClass('header-white')) {
                $('.header').addClass('header-white')
            }
            if($('.j_my-discover-watch').length){
                $('.j_header_watch').addClass('header_active')
            }else if($('.j_my-discover-popular').length){
                $('.j_header_popular').addClass('header_active')
            }else if($('.j_my-discover-recommend').length){
                $('.j_header_recommend').addClass('header_active')
            }
        },
        destroyed(){
            $('.header').removeClass('header-white')
            $('.j_my-discover_header a').removeClass('header_active')

        },
    }
</script>