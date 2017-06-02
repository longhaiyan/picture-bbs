<template>
    <div class="my-discover-watch j_my-discover-watch">
        <el-row :gutter="50">
            <el-col :sm="16" >
                <DiscoverBox v-for="item in watchMsg" :data="item" key></DiscoverBox>
                <p v-if="!watchMsg.length">
                    <i class="el-icon-information">暂无关注动态</i>
                </p>
            </el-col>
            <el-col :sm="8">
                <div class="discover-watch-right">
                    <div class="watch-right_hd" @click="goZone(watchUserInfo.userId)">
                        <img  v-if="!watchUserInfo.avatarId" src="http://bbs.chenxubiao.cn/img/userpic.png"
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
    import DiscoverBox from '@/components/discover_box'
    import { mapActions, mapState } from 'vuex'


    export default{
        name:'discoverWater',
        computed: {
            ...mapState({
                watchMsg: state => state.discover.watchMsg,
                watchUserInfo: state => state.discover.watchUserInfo,
            }),
        },
        methods:{
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
        },
        mounted(){


        },
        beforeUpdate(){
            if(!$('.header').hasClass('header-white')){
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
        components: {
            DiscoverBox
        }
    }
</script>