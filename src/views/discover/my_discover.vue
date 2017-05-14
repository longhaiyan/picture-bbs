<template>
    <div class="my-discover">
        <div class="my-discover_header">
            <router-link to="/discover/watch">我的关注</router-link>
            <router-link to="/discover/popular">最新动态</router-link>
            <router-link to="/discover/recommend">推荐用户</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:'myDiscover'
    }
</script>