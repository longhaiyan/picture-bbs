<template>
    <div class="my-intro">
        <el-row>
            <el-col class="photo-box" :sm="18" :style="{height:clientHeight-60+'px'}">
                <img @click="bigPhoto" :src="'http://bbs.chenxubiao.cn/picture/show?id=' + picId"
                     alt="">
                <!--<img src="http://bbs.chenxubiao.cn/img/test.png"
                     alt="">-->
                <div class="prv-box" :style="{height:clientHeight-60+'px'}">
                    <i class="el-icon-d-arrow-left"></i>
                </div>
                <div class="next-box" :style="{height:clientHeight-60+'px'}">
                    <i class="el-icon-d-arrow-right"></i>
                </div>

            </el-col>
            <el-col :sm="6" class="user-info">
                <div class="attribution_region">
                    <img :src="'http://bbs.chenxubiao.cn/picture/show?id=' + picId" alt="">
                    <div>
                        <p class="name">chenxb</p>
                        <div>
                            <div class="fellow">Fellow</div>
                            <div class="like-button">
                                <a class="new_fav">
                                    <span class="value">16</span>
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
        <div class="show-photo j-show-photo hide" :style="{height:clientHeight+'px'}">
            <i class="el-icon-close"></i>
            <img :src="'http://bbs.chenxubiao.cn/picture/show?id=' + picId" alt="">
            <div class="prv-box" :style="{height:clientHeight+'px'}">
                <i class="el-icon-d-arrow-left"></i>
            </div>
            <div class="next-box" :style="{height:clientHeight+'px'}">
                <i class="el-icon-d-arrow-right"></i>
            </div>
            <div class="user-info">
                <img :src="'http://bbs.chenxubiao.cn/picture/show?id=' + picId" alt="">
                <p>chenxb</p>
                <div class="like-button">
                    <div>
                        <a class="button hearted">
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
    export default{
        name: 'intro',
        data(){
            return {
                picId: this.$route.query.picId || '',
                clientHeight: ''
            }
        },
        methods:{
            bigPhoto: function  () {
                console.log("lifsjf")
                $('.j-show-photo').show()
            }
        },
        mounted(){
            this.clientHeight = window.innerHeight
            console.log('document.body.clientHeight', window.innerHeight)
        }

    }
</script>