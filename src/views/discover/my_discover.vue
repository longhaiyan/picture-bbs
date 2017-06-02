<template>
    <div class="my-discover">
        <div class="my-discover_header j_my-discover_header">
            <router-link to="/discover/watch" class="header_watch j_header_watch">我的关注</router-link>
            <router-link to="/discover/popular" class="header_popular j_header_popular">最新动态</router-link>
            <router-link to="/discover/recommend" class="header_recommend j_header_recommend">推荐用户</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:'myDiscover',
        mounted(){

        }
    }
</script>