<template>
    <div class="my-popular">
        <waterfall
                :align="align"
                :line-gap="400"
                :min-line-gap="100"
                :max-line-gap="220"
                :single-max-width="600"
                :watch="popularWaterFall"
                @reflowed="reflowed"
                ref="waterfall"
        >
            <!-- each component is wrapped by a waterfall slot -->
            <waterfall-slot
                    v-for="(item, index) in popularWaterFall"
                    :width="item.width"
                    :height="item.height"
                    :order="index"
                    :key="index"

                    move-class="item-move"

            >
                <myWaterFallSlot :index="index" :item="item"></myWaterFallSlot>
            </waterfall-slot>
        </waterfall>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    import * as discover from '@/store/discover/types'
    import myWaterFallSlot from '@/components/my_waterfall_slot'

    export default{
        name: 'Popular',
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
        components: {
            Waterfall,
            WaterfallSlot,
            myWaterFallSlot
        }
    }
</script>