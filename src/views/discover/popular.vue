<template>
    <div class="my-popular">
        最新动态
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    import * as discover from '@/store/discover/types'
    import myWaterFallSlot from '@/components/my_waterfall_slot'

    export default{
        name: 'discoverPopular',
        data(){
            return {
                align: 'center',
                isBusy: false,
            }
        },
        computed: {
            ...mapState({
                popularWaterFall: state => state.discover.popularWaterFall,
            }),
        },
        methods: {
            ...mapActions({
                waterFallAdd: discover.A_WATERFALL_ADD,
            }),
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
            onIntro: function () {
                console.log("click")
                this.GM_routerPush({
                    path: '/intro',
                    query: {
                        orderNo: row.orderNo
                    }
                })
            },
            reflowed: function () {
                this.isBusy = false
                console.log("reflowed")
            },
        },
        mounted() {
            this.bodyScroll()
            console.log("mounted")
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
            Waterfall,
            WaterfallSlot,
            myWaterFallSlot
        }
    }
</script>