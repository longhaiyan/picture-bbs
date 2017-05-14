<template>
    <div class="my-discover-box">
        <div class="discover-box-hd">
            <img v-if="!data.avatarId"
                 src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
            <img v-else
                 :src="'http://bbs.chenxubiao.cn/picture/show?id='+data.avatarId" alt="">
            <div class="user-info">
                <p>{{data.userName}}</p>
                <i>{{data.time}}</i>
            </div>
        </div>
        <div class="discover-box-bd">
            <img class="discover-box-img" :src="'http://bbs.chenxubiao.cn/picture/show?id='+data.picId" alt="">
            <div class="discover-box-info my-space-Between">
                <span class="info-name">{{data.title}}</span>
                <div class="like-button">
                    <a class="new_fav j-like" :class="{ 'hearted': data.isLiked }">
                        <span class="value">{{data.likeNum}}</span>
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
</template>
<script>
    export default{
        name: 'discoverBox',
        props: {
            'data': {
                type: Object,
                default(){
                    return {
                        avatarId: 1,
                        following: 0,
                        follows: 0,
                        isFollow: 0,
                        isLiked: 0,
                        isSelf: 0,
                        picId: 0,
                        time: "",
                        title: "",
                        userId: 1,
                        userName: "",
                        likeNum:0
                    }
                }
            }
        },
    }
</script>