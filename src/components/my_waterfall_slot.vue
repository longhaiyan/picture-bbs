<template>
    <div @click="onIntro" class="item photo_thumbnail"
         :style="'background-image:url(http://bbs.chenxubiao.cn/picture/show?id=' + item.picId"
         :index="index">
        <div class="info ">
            <div class="credits " @click="goZone">
                <span class="avatar"
                   :style="'background-image:url(http://bbs.chenxubiao.cn/picture/show?id=' + item.userId"
                ></span>
                <div class="photo_info_wrap">
                    <a class="photographer">{{item.userName}}</a>
                </div>
            </div>

            <div class="right">
                <div class="like-button" @click="addLike">
                    <div>
                        <!--<a class="button new_fav only_icon hearted">--><!--激活状态-->
                        <a class="button new_fav only_icon j-like" v-bind:class="{ hearted:item.liked}">
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

</template>
<script>
    import {mapActions, mapState} from 'vuex'
    import * as myWaterfallSlotType from '@/store/my_waterfall_solt/types'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    export default{
        name: 'myWaterFallSlot',
        props: {
            'item': {
                type: Object,
                default(){
                    return {}
                }
            },
            'index': {
                type: Number,
                default(){
                    return '1'
                }
            }

        },
        methods: {
            ...mapActions({
                updateLike: myWaterfallSlotType.A_UPDATE_LIKE,
            }),
            addLike: function (event) {
                event.stopPropagation()
                let self = this
                let curLike = $(event.target).closest('.j-like')
                this.updateLike({picId: self.item.picId}).then(()=>{
                    if (curLike.hasClass('hearted')) {
                        $(event.target).closest('.j-like').removeClass('hearted')
                    } else {
                        $(event.target).closest('.j-like').addClass('hearted')
                    }
                })

            },
            goZone:function () {
                console.log("goZone")
                event.stopPropagation()
                let self = this
                this.GM_routerPush({
                    path: '/home/zone',
                    query: {
                        userId: self.item.userId
                    }
                })
            },
            onIntro: function () {
                console.log("click")
                let self = this
                this.GM_routerPush({
                    path: '/intro',
                    query: {
                        picId: self.item.picId
                    }
                })
            },
        },
        mounted(){
            console.log("my_waterfall_slot mounted")
        },
        components: {
            WaterfallSlot
        }

    }
</script>