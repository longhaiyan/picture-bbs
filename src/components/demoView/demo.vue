<template>
    <div>
        <div class="name">
            <ul>
                <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
                <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
                <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
                <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
            </ul>
            <div v-for="item in items">{{item.test}}</div>
            {{isRedirect}}

        </div>
        <form style="background: pink;" action="/user/login/data" method="post">
            <input type="text" name="userName" value="lallalaall">
            <input type="submit" value="提交">
        </form>
        <el-upload
                class="avatar-uploader"
                action="/file-upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

    </div>

</template>
<style>
    .name {
        background: #42b983;
    }
</style>


<script>
    import {mapState} from 'vuex';

    export default {
        name: 'demo',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                imageUrl: ''
            }
        },
        computed: {
            ...mapState({
                items: state => state.test.items,
                isRedirect: state => state.test.isRedirect
            })
        },
        watch: {
            isRedirect: function() {
                console.log("值改变了")
                //        this.goToRediract()
            }
        },
        methods: {
            goToRediract() {
                this.$router.push({
                    path: "/error"
                });
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }

        },
        /*beforeRouteEnter(to, form, next){
         next(vm => {
         console.log('isRedirectlalal',vm.isRedirect)
         if(vm.isRedirect){
         next({path: '/'})
         }
         })
         }*/
    }
</script>
