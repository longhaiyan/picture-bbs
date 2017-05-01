<style>
    .my-swiper {
        /*height: 100%;*/
        position: relative;
        z-index: 0;
        height: 703px;
    }

    .my-swiper-container {
        position: fixed !important;
        top: 0;
    }

    .my-swiper .swiper-pagination {
        width: 100%;
        bottom: 10px;
        position: fixed;
    }

    .my-swiper-box {
        width: 100%;
        height: 703px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .show-banners .el-row {
        flex-wrap: wrap;
        padding: 50px 20px 0;
    }

    .show-banners .el-col {
        width: 250px;
        margin-bottom: 30px;
        flex-shrink: 0;
        flex-grow: 1;
        box-sizing: border-box;
        padding: 0 10px;
    }

    .show-banners {

    }

    .index-intro {
        position: relative;
        z-index: 1;
        background: #fff;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 40px;
    }

    .button {
        padding: 0;
        float: right;
        display: flex;
        font-size: 14px;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .item {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        font-size: 1.2em;
        color: rgb(0, 158, 107);
        background-color: rgba(255, 230, 135, .5);
        background-size: cover;
    }

    /*.item:after {*/
    /*content: attr(index);*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/
    /*-webkit-transform: translate(-50%, -50%);*/
    /*-ms-transform: translate(-50%, -50%);*/
    /*}*/
    .wf-transition {
        transition: opacity .3s ease;
        -webkit-transition: opacity .3s ease;
    }

    .wf-enter {
        opacity: 0;
    }

    .index-waterfall-nav {
        text-align: center;
        padding: 20px;
    }
    .photo_thumbnail .info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        /*pointer-events: none;*/
        min-height: 50px;
        background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0,0,0,0.6)));
        background: -webkit-linear-gradient(top, transparent 0%, rgba(0,0,0,0.6) 100%);
        background: -moz-linear-gradient(top, transparent 0%, rgba(0,0,0,0.6) 100%);
        background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%);
        -webkit-transition: opacity 0.2s;
        -moz-transition: opacity 0.2s;
        transition: opacity 0.2s;
    }
    .photo_thumbnail:hover .info, .photo_thumbnail.active .info {
        opacity: 1;
    }
    .photo_thumbnail:hover .credits, .photo_thumbnail:hover .right, .photo_thumbnail.active .credits, .photo_thumbnail.active .right {
        opacity: 1;
        bottom: 10px;
        -webkit-transition: bottom 0.2s;
        -moz-transition: bottom 0.2s;
        transition: bottom 0.2s;
    }
    .photo_thumbnail .right {
        opacity: 0;
        position: absolute;
        right: 0;
        bottom: 0;
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.2s;
        transition: all 0.2s;
    }
    .photo_thumbnail .credits {
        opacity: 0;
        position: absolute;
        bottom: 0;
        left: 10px;
        right: 80px;
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.2s;
        transition: all 0.2s;
        text-align: left;
        color: #fff;
        font-size: 0;
        overflow: hidden;
        white-space: nowrap;
        text-shadow: 0 0 1px rgba(0,0,0,0.6);
    }
    .photo_thumbnail .credits .avatar {
        width: 30px;
        height: 30px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background-size: cover;
        display: inline-block;
        vertical-align: middle;
        -webkit-transition: opacity 0.2s;
        -moz-transition: opacity 0.2s;
        transition: opacity 0.2s;
        pointer-events: auto;
    }
    .photo_thumbnail .credits .photo_info_wrap {
        position: relative;
        max-width: -webkit-calc(100% - 40px);
        max-width: -moz-calc(100% - 40px);
        max-width: calc(100% - 40px);
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
    }
    .photo_thumbnail .credits .photographer, .photo_thumbnail .credits .photo_title {
        line-height: 1.4em;
        display: inline-block;
        max-width: 100%;
        font-size: 14px;
        font-weight: bold;
        font-weight: 500;
        color: #fff;
        position: relative;
        position: static;
        pointer-events: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .photo_thumbnail .credits .photographer:before, .photo_thumbnail .credits .photo_title:before {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        content: " ";
        width: 100%;
        padding: 1px 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        height: 100%;
        position: absolute;
        top: -1px;
        left: -3px;
        display: block;
        background-color: rgba(255,255,255,0);
        z-index: 1;
        -webkit-transition: all 0.1s;
        -moz-transition: all 0.1s;
        transition: all 0.1s;
    }
    .photo_thumbnail .right .like-button, .photo_thumbnail .right .cart-button {
        display: inline-block;
    }
    .button.only_icon{
        width: 24px;
        height: 24px;
    }
    .button.only_icon .icon {
        width: 24px;
        height: 24px;
    }
    .button.new_fav .icon {
        height: 20px;
        width: 20px;
        position: absolute;
        top: 4px;
        left: 1px;
        bottom: 0;
        right: 0;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    .button.new_fav .icon .shape {
        fill: transparent;
        stroke: #fff;
        stroke-width: 3px;
        stroke-dasharray: 150;
        stroke-linejoin: round;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
    }
    .button.only_icon.hearted .icon .shape, .button.only_icon.liked .icon .shape {
        fill: #fff;
    }

</style>
<template>
    <div class="index">
        <div class="my-swiper">
            <swiper class="my-swiper-container" :options="swiperOption">
                <swiperSlide v-for="slide in swiperSlides" key>
                    <div class="my-swiper-box" v-bind:style="{backgroundImage: 'url(' + slide.img + ')'}"></div>
                </swiperSlide>
                <!--<div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <!--<div slot="content" :model="getIndexWaterFall"  ref="localData" label-width="100px"></div>-->
        <section class="index-intro">
            <!--<section class="show-banners">
                <el-row type="flex" justify="space-between">
                    <el-col v-for="(o, index) in 6" key>
                        <el-card :body-style="{ padding: '0px'}">
                            <img src="http://bbs.chenxubiao.cn/img/test.png" class="image">
                            <div style="padding: 14px;">
                                <span>图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍图文介绍</span>
                                <div class="bottom clearfix">
                                    <time class="time">{{ 12345678912345 | data }}</time>
                                    <router-link to="/home" class="button">
                                        <img src="http://bbs.chenxubiao.cn/img/user.jpeg" alt="" style="width: 40px;height: 40px;border-radius: 100%;">
                                        <span>chenxubaio</span>
                                    </router-link>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </section>-->
            <!--图片瀑布流-->
            <!--<div class="index-waterfall-nav">
                <el-button type="text" size="large">分类一</el-button>
                <el-button type="text" size="large">分类二</el-button>
                <el-button type="text" size="large">分类三</el-button>
            </div>-->
            <div class="index-waterfall">
            </div>
            <waterfall
                    :align="align"
                    :line-gap="200"
                    :min-line-gap="100"
                    :max-line-gap="220"
                    :single-max-width="300"
                    :watch="indexWaterFall"
                    @reflowed="reflowed"
                    ref="waterfall"
            >
                <!-- each component is wrapped by a waterfall slot -->
                    <waterfall-slot
                            v-for="(item, index) in indexWaterFall"
                            :width="item.width"
                            :height="item.height"
                            :order="index"
                            :key="index"
                            move-class="item-move"

                    >
                        <!--<div class="item photo_thumbnail"
                             :style="'background-image:url(http://bbs.chenxubiao.cn/picture/show?id=' + item.picId"
                             :index="index"> -->
                        <div class="item photo_thumbnail"
                             :style="'background-image:url(http://bbs.chenxubiao.cn/img/test1.jpg?id=' + item.picId"
                             :index="index">
                            <div class="info ">
                                <div class="credits ">
                                    <a class="avatar" href="/jonathan-giovannini"
                                       style="background-image:url(http://bbs.chenxubiao.cn/img/user.jpeg)"></a>
                                    <div class="photo_info_wrap">
                                        <a class="photographer">chenxubiao</a>
                                    </div>
                                </div>

                                <div class="right">
                                    <div class="like-button" @click="addLike">
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
        </section>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import {mapState,mapActions} from 'vuex'
    import store from '@/store'
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    import * as myIndex from '@/store/my_index/types'
    export default {
        name: 'index',
        data() {
            return {
                swiperOption: {
                    //                    autoplay: 3500,
                    loop: true,
                    setWrapperSize: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    //        mousewheelControl : true,
                    observeParents: true,
                    effect: 'fade',
                    width: window.innerWidth,
                    height: window.innerHeight
                    /*nextButton: '.swiper-button-next',
                     prevButton: '.swiper-button-prev'*/
                },
                swiperSlides: [{
                    img: 'http://bbs.chenxubiao.cn/img/test.png'
                }, {
                    img: 'http://bbs.chenxubiao.cn/img/test1.jpg'
                }],
                align: 'center',
                items: [
                    {
                        height: 100,
                        width: 100,
                        imgID: 1
                    }
                    /*{
                        height: 100,
                        width: 100,
                        imgID: 2
                    },
                    {
                        height: 109,
                        width: 142,
                        imgID: 2
                    },
                    {
                        height: 100,
                        width: 100,
                        imgID: 20
                    },
                    {
                        height: 100,
                        width: 100,
                        imgID: 20
                    },
                    {
                        height: 109,
                        width: 142,
                        imgID: 20
                    },
                    {
                        height: 100,
                        width: 100,
                        imgID: 20
                    },
                    {
                        height: 100,
                        width: 100,
                        imgID: 20
                    },
                    {
                        height: 109,
                        width: 142,
                        imgID: 20
                    },
                    {
                        height: 100,
                        width: 100,
                        imgID: 20
                    },
                    {
                        height: 100,
                        width: 100,
                        imgID: 20
                    },
                    {
                        height: 109,
                        width: 142,
                        imgID: 20
                    }*/
                ],
                isBusy: false
            }
        },
        computed: {
            ...mapState({
                indexWaterFall: state => state.myIndex.indexWaterFall,

            }),


        },
        watch:{
            indexWaterFall: function () {
                console.log('注意注意注意 indexWaterFall 被修改lalalalallal')
            }
        },
        methods: {
            ...mapActions({
                waterTest: myIndex.A_WATERFSLL_TEST,
                waterFallAdd: myIndex.A_WATERFSLL_ADD,


            }),
            shuffle: function () {
                this.items.sort(function () {
                    return Math.random() - 0.5
                })
            },
            reflowed: function () {
                this.isBusy = false
            },
            bodyScroll: function () {
                let self = this
                window.addEventListener('scroll', function () {
                    if($('.vue-waterfall').length){
                        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                        if (scrollTop + window.innerHeight >= document.body.clientHeight) {
                            self.waterFallAdd()
                        } else {
                            console.log("不符合拉取新图片规则")
                        }
                    }
                })
            },

            addLike: function (event) {
                let curLike = $(event.target).closest('.j-like')
                if(curLike.hasClass('hearted')){
                    $(event.target).closest('.j-like').removeClass('hearted')
                }else{
                    $(event.target).closest('.j-like').addClass('hearted')
                }
            },
        },
        beforeCreate(){
            console.log("beforeCreate")
        },
        created(){
            console.log("created")
        },
        beforeMount(){
            console.log("beforeMount")
        },
        mounted() {
            this.bodyScroll()
            console.log("mounted")
        },
        beforeUpdate(){
            console.log("beforeUpdate")
        },
        updated(){
            console.log("updated")
        },
        activated(){
            console.log("activated")
        },
        deactivated(){
            console.log("deactivated")
        },
        beforeDestroy(){
            console.log("beforeDestroy")
        },
        destroyed(){
            console.log("destroyed")
        },
        components: {
            swiper,
            swiperSlide,
            Waterfall,
            WaterfallSlot
        }
    }
</script>

