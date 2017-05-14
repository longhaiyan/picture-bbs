<template>
    <div class="my-discover-watch">
        <el-row :gutter="50">
            <el-col :sm="16">
                <DiscoverBox v-for="item in 3" key></DiscoverBox>
            </el-col>
            <el-col :sm="8">
                <div class="discover-watch-right">
                    <div class="watch-right_hd">
                        <img src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                        <p>long</p>
                    </div>
                    <div class="watch-right_bd">
                        <div class="follow-info">
                            <div>
                                <p>14</p>
                                <span>PHOTOS</span>
                            </div>
                            <div>
                                <p>14</p>
                                <span>Followers</span>
                            </div>
                            <div>
                                <p>14</p>
                                <span>Views</span>
                            </div>
                        </div>
                        <div class="money-info">
                            我的账户余额  300 币
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

    export default{
        name:'discoverWater',
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