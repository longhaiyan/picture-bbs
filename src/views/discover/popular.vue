<template>
    <div class="my-discover-watch my-popular">
        <el-row :gutter="50">
            <el-col :sm="16" >
                <DiscoverBox v-for="item in popularMsg" :data="item" key></DiscoverBox>
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
    import myWaterFallSlot from '@/components/my_waterfall_slot'
    import { mapActions, mapState } from 'vuex'


    export default{
        name: 'discoverPopular',
        data(){
            return {

            }
        },
        computed: {
            ...mapState({
                popularMsg: state => state.discover.popularMsg,
                watchUserInfo: state => state.discover.watchUserInfo,
            }),
        },
        methods: {
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
        mounted() {

        },
        beforeUpdate(){
            if(!$('.header').hasClass('header-white')){
                $('.header').addClass('header-white')
            }
        },
        destroyed(){
            $('.header').removeClass('header-white')
        },
        components: {
            DiscoverBox
        }
    }
</script>