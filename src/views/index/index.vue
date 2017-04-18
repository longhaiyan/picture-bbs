<template>
    <div class="index">
        <div class="my-swiper">
            <swiper class="my-swiper-container" :options="swiperOption">
                <swiperSlide  v-for="slide in swiperSlides" key>
                    <div class="my-swiper-box" v-bind:style="{backgroundImage: 'url(' + slide.img + ')'}"></div>
                </swiperSlide>
                <!--<div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <section class="show-banners">
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
        </section>
    </div>
</template>

<style>
    .my-swiper{
        /*height: 100%;*/
        position: relative;
        z-index: 0;
        height: 703px;
    }
    .my-swiper-container{
        position: fixed !important;
        top: 0;
    }
    .my-swiper .swiper-pagination{
        width: 100%;
        bottom: 10px;
        position: fixed;
    }
    .my-swiper-box{
        width: 100%;
        height: 703px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .show-banners .el-row{
        flex-wrap: wrap;
        padding: 50px 20px 0;
    }
    .show-banners .el-col{
        width: 250px;
        margin-bottom: 30px;
        flex-shrink: 0;
        flex-grow: 1;
        box-sizing: border-box;
        padding: 0 10px;
    }
    .show-banners{
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
</style>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: 'index',
        data() {
            return {
                swiperOption: {
                    autoplay: 3500,
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
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

