<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px !important;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
<template>
    <div class="my-zoom">
        <div class="zoom-header">
            <div class="cover_photo" v-if="bgId" v-bind:style="{backgroundImage: 'url(http://bbs.chenxubiao.cn/picture/show?id=' + bgId + ')'}"></div>
            <div v-else class="cover_photo"></div>
            <div class="user_avatar">
                <div class="wrapper">
                    <img class="avatar_img"
                         src="http://bbs.chenxubiao.cn/img/userpic.png"
                         title="">
                </div>
            </div>
            <div class="profile_buttons">
                <el-button type="text">个人设置</el-button>
                <el-button type="text">个人管理</el-button>
                <el-button type="primary" @click="onUploadBg">上传背景图</el-button>
            </div>
            <div class="user_info">
                <h3 class="name">{{userInfo.userName}}</h3>
                <p class="info">
                    <span>0 Affection</span>
                    <span>13 Photo Views</span>
                    <span>0 Followers</span>
                    <span>1 Following</span>
                </p>
            </div>
        </div>
        <MyModal class="" :data="bgUploadData" >
            <el-form :model="bgUploadFormData" ref="bgUploadForm">
                <el-upload
                        class="avatar-uploader"
                        action="http://bbs.chenxubiao.cn/picture/upload/profile"
                        name="uploadFile"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                >
                    <img v-if="bgUploadFormData.imageUrl" :src="bgUploadFormData.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form>
        </MyModal>

    </div>
</template>
<script>
    import MyModal from  '@/components/my_modal.vue'
    import {mapActions, mapState} from 'vuex'
    import * as ZoomTypes from '@/store/my_zoom/types'
    import * as GlobalType from '@/store/global/types'



    export default{
        name: 'MyZoom',
        data(){
            return {
                homeBg: {
                    img: 'http://bbs.chenxubiao.cn/img/test.png'
                },
                bgUploadData: {
                    //                    visible: false,
//                    size: 'tiny',
                    confirmButtonText: '确认提交',
                    title: '上传背景图',
                    visible: false

                },
                bgUploadFormData:{
                    picId:'233',
                    imageUrl:'',

                },
                imageUrl: '',
                uploadErrorMsg:'上传失败'

            }
        },
        computed:{
            ...mapState({
                bgUploadStep:state => state.myZoom.bgUploadStep,
                bgId:state => state.myZoom.bgId,
                userInfo: state => state.myGlobal.userInfo,
            })
        },
        watch:{
            userInfo: function () {
                console.log("userInfo 改变了")
            }
        },
        methods:{
            ...mapActions({
                bgUpload:ZoomTypes.A_BG_UPLOAD,
                userInfoUpload:GlobalType.A_USER_INFO_UPDATE
            }),
            onUploadBg: function () {
                let self = this
                this.openModal(this.bgUploadData,{
                    beforeConfirm(next){
                        if(self.bgUploadFormData.picId){
                            self.bgUpload({picId:self.bgUploadFormData.picId}).then(()=>{

                                if (self.bgUploadStep === 'success') {
                                    self.userInfoUpload({backgroundId:self.bgUploadFormData.picId})
                                    self.$message({
                                        type: 'success',
                                        message: '上传成功'
                                    })
                                    return next()
                                } else {
                                    self.showMessage()
                                    return
                                }
                            })

                        }else {
                            console.log('未获取图片id')
                        }
                    }
                })
            },
            handleAvatarSuccess(res, file, fileList) {
                console.log('res',res)
                console.log('file',file)
                console.log('fileList',fileList)
                this.bgUploadFormData.imageUrl = 'http://bbs.chenxubiao.cn/picture/show?id='+res.vars.data.id
                if(res.success){
                    this.bgUploadFormData.picId = res.vars.data.id
                }else{
                    this.$message.error("发送失败")
                }
            },
            beforeAvatarUpload(file) {
                /*const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;*/
            },
            // 打开modal，传入一些回调函数
            openModal(obj, ops) {
                console.log("openModal")
                obj.visible = true
                for (var i in ops) {
                    if (typeof ops[i] === 'function') {
                        obj[i] = ops[i]
                    }
                }
            },
            showMessage() {
                this.$message.error(this.uploadErrorMsg)
            },

        },
        components: {
            MyModal
        }
    }
</script>