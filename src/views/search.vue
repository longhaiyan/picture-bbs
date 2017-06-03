<style>
    .my-search_header .header_active span {
        color: #20a0ff;
    }
</style>
<template>
    <div>
        <div class="my-discover">
            <div class="my-discover_header  my-search_header">
                <el-button class="j_search_popular header_active" style="padding: 0;font-size: 16px;color: #333;"
                           type="text" @click="onChange(1)">相关动态
                </el-button>
                <el-button class="j_search_user" style="padding: 0;font-size: 16px;color: #333;" type="text"
                           @click="onChange(2)">相关用户
                </el-button>
            </div>
            <div class="my-discover-watch my-discover-recommend" v-if="searchData">
                <template v-if="toggleVisible">
                    <div v-if="searchData.data">
                        <DiscoverBox v-for="item in searchData.data" :data="item" key></DiscoverBox>
                    </div>
                    <p v-else>
                        <i class="el-icon-information">暂无相关动态</i>
                    </p>
                </template>

                <div v-if="!toggleVisible">
                    <div v-if="searchData.user" class="recommend-boxes">
                        <div v-for="(item,index) in searchData.user" @click="goZone(item.userId)" class="recommend-boxes-item">
                            <img class="avatar_img" v-if="!item.avatarId" src="http://bbs.chenxubiao.cn/img/userpic.png"
                                 alt=""
                            >
                            <img class="avatar_img" v-else
                                 :src="'http://bbs.chenxubiao.cn/picture/show?id='+item.avatarId"
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
                    </div>
                    <p v-else>
                        <i class="el-icon-information">暂无相关用户</i>
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState }  from  'vuex'
    import DiscoverBox from '@/components/discover_box'
    import * as myZoneType from '@/store/my_zone/types'
    export default{
        name: 'search',
        data(){
            return {
                toggleVisible: true
            }
        },
        computed: {
            ...mapState({
                searchData: state => state.search.searchData,
                searchStep: state => state.search.searchStep,
                searchError: state => state.search.searchError,
                updateFollowingStep: state => state.myZone.updateFollowingStep,
            })
        },
        methods: {
            ...mapActions({
                updateFollowing: myZoneType.A_UPDATE_FOLLOWING,
                //                projectRequest: introType.A_DATA_REQUEST,
            }),
            onChange(type){
                if (type === 1) {
                    console.log('1')
                    this.toggleVisible = true
                    $('.j_search_user').removeClass('header_active')
                    $('.j_search_popular').addClass('header_active')
                } else if (type === 2) {
                    console.log(2)
                    this.toggleVisible = false
                    $('.j_search_popular').removeClass('header_active')
                    $('.j_search_user').addClass('header_active')
                }
            },
            onFollow: function (id, index) {
                let self = this
                console.log("onFollow", self.searchData.user[index].isFollow)
                this.updateFollowing({userId: id}).then(() => {
                    if (self.updateFollowingStep !== 'error') {
                        if (self.searchData.user[index].isFollow) {
                            self.searchData.user[index].isFollow = 0
                            this.$message.success('取消关注成功');
                        } else {
                            self.searchData.user[index].isFollow = 1
                            this.$message.success('关注成功');
                        }
                    } else {
                        if (self.searchData.user[index].isFollow) {
                            this.$message.error('取消关注失败');
                        } else {
                            this.$message.error('关注失败');
                        }
                    }
                })

            },
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
            if (this.searchStep) {
                this.$message.error(this.searchStep)
            }
        },
        beforeUpdate(){
            if (!$('.header').hasClass('header-white')) {
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