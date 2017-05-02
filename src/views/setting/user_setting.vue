<template>
    <div class="user-setting">

        <el-row :gutter="50">

            <el-col :sm="15">
                <h3>个人信息</h3>
                <el-form :model="localData" ref="localData" label-width="100px">
                    <div class="form-body">
                        <el-form-item label="用户名：" prop="userName">
                            <el-input v-model="localData.userName" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="性别：" prop="sex">
                            <el-select v-model="localData.sex" >
                                <el-option v-for="(value, key) in sexMap" :label="value" key :value="key"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="出生日期：" prop="birthday">
                            <el-date-picker type="date" placeholder="请选择出生日期" v-model="localData.birthday" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="个人介绍：" prop="description">
                            <el-input v-model="localData.description" placeholder="请输入个人介绍"></el-input>
                        </el-form-item>

                        <el-form-item label="相机：" prop="cameraNames">
                            <el-input v-model="localData.cameraNames" placeholder="请输入相机名称，并用「，」隔开"></el-input>
                        </el-form-item>
                        <el-form-item label="镜头：" prop="lensNames">
                            <el-input v-model="localData.lensNames" placeholder="请输入镜头名称，并用「，」隔开"></el-input>
                        </el-form-item>
                        <el-form-item label="工具：" prop="toolNames">
                            <el-input v-model="localData.toolNames" placeholder="请输入镜头名称，并用「，」隔开"></el-input>
                        </el-form-item>

                    </div>


                </el-form>
            </el-col>
            <el-col :sm="5" >
                <h3>头像</h3>
                <el-upload
                        class="avatar-uploader"
                        action="http://bbs.chenxubiao.cn/picture/upload/profile"
                        name="uploadFile"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                >
                    <img v-if="localData.imageUrl" :src="localData.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-col>
        </el-row>
        <div class="form-footer" style="text-align: center">
            <StateButton btnText="保存内容" :formStep="formStep"   @click="onSubmit('localData')"></StateButton>
            <el-button size="small" @click="">取消</el-button>
        </div>


    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'
    import * as GlobalType from '@/store/global/types'
    import * as UserSettingType from '@/store/setting/types'
    import StateButton from '@/components/stateButton.vue'
    export default{
        name:'userSettings',
        data(){
            return {
                userInfoData:{
                    userId: '',
                    avatarId: '',
                    backgroundId: '',
                    userName: '',
                    email: '',
                    cellphone: '',
                    sex: '',
                    birthday: '',
                    description: '',
                    cameraNames:'',
                    errorMessage:'无',
                    imageUrl:''
                },
                sexMap: {
                    '0': '未知',
                    '1': '男',
                    '2': '女'
                },
                /*cameraMap:{
                    '0': '尼康',
                    '1': '佳能'
                },
                lensMpa:{
                    '0': '这个真不知道',
                    '1': '别怪我'
                },
                toolMsp:{
                    '0': '三角架',
                    '1': '剩下的不知道了'
                }*/



            }
        },
        computed: {
            ...mapState({
                userInfo: state => state.myGlobal.userInfo,
                formStep: state => state.setting.formStep,
            }),
            localData() {
                Object.assign(this.userInfoData, this.userInfo)
                return this.userInfoData
            }

        },
        methods:{
            ...mapActions({
                formSubmit: UserSettingType.A_FORM_SUBMIT,
//                userInfoUpload:GlobalType.A_USER_INFO_UPDATE
            }),
            onSubmit: function () {
                let self=this

                this.formSubmit({
                    userName:self.localData.userName,
                    sex:self.localData.sex,
                    birthday:self.localData.birthday,
                    description:self.localData.description,
                    cameraNames:self.localData.cameraNames,
                    lensNames:self.localData.lensNames,
                    toolNames:self.localData.toolNames,
                    avatarId:"244",
                }).then((rsp)=>{
                    if(self.formStep === 'submitted'){
//                        这个数据覆盖做的有点问题，后面再查查
                        /*self.userInfoUpload({
                            userName:self.localData.userName,
                            sex:self.localData.sex,
                            birthday:self.localData.birthday,
                            description:self.localData.description,
                            cameraNames:self.localData.cameraNames,
                            lensNames:self.localData.lensNames,
                            toolNames:self.localData.toolNames,
                            avatarId:"244",
                        })*/
                        self.$message({
                            type: 'success',
                            message: '提交成功'
                        })
                    }else{
                        self.$message.error('提交失败')
                    }
                })
            },
            handleAvatarSuccess:function (res, file, fileList) {
                console.log('res',res)
                console.log('file',file)
                console.log('fileList',fileList)
                this.localData.imageUrl = 'http://bbs.chenxubiao.cn/picture/show?id='+res.vars.data.id
                console.log('this.localData.imageUrl',this.localData.imageUrl)
                if(res.success){
                    this.localData.avatarId = res.vars.data.id
                }else{
                    this.$message.error("上传失败")
                }
            }
        },
        components:{
            StateButton
        }
    }
</script>