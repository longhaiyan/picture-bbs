<template>
    <div class="my-discover">
        <div class="my-discover_header">
            <router-link to="/discover/popular">分类一</router-link>
            <router-link to="/">分类二</router-link>
            <router-link to="/">分类三</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:'myDiscover'
    }
</script>