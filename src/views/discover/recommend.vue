<template>
    <div class="my-discover-recommend">
        推荐用户列表
    </div>
</template>
<script>
    export default{
        name:'discoverRecommend',
        beforeUpdate(){
            if(!$('.header').hasClass('header-white')){
                $('.header').addClass('header-white')
            }
        },
        destroyed(){
            $('.header').removeClass('header-white')
        },
    }
</script>