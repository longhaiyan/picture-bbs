<template>
    <div class="user-setting">

        <el-row :gutter="50">

            <el-col :sm="15">
                <h3>个人信息</h3>
                <el-form :model="userInfoData" ref="localData" label-width="120px">
                    <div class="form-body">
                        <el-form-item label="用户名：" prop="userName">
                            <el-input v-model="userInfoData.userName" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="性别：" prop="sex">
                            <el-select v-model="userInfoData.sex">
                                <el-option v-for="(value, key, index) in sexMap" :label="value" key
                                           :value=index></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="出生日期：" prop="birthday">
                            <el-date-picker type="date" default-value="userInfoData.birthday"
                                            v-model="userInfoData.birthday" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="个人介绍：">
                            <el-input v-model="userInfoData.description" placeholder="请输入个人介绍"></el-input>
                        </el-form-item>
                        <el-form-item label="我喜欢的分类：" prop="hobby">
                            <el-select v-model="userInfoData.hobby" multiple placeholder="请选择">
                                <el-option v-for="item in categories" :label="item.name" key
                                           :value="item.id"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="相机：" prop="cameraNames">
                            <el-input v-model="userInfoData.cameraNames" placeholder="请输入相机名称，并用「，」隔开"></el-input>
                        </el-form-item>
                        <el-form-item label="镜头：" prop="lensNames">
                            <el-input v-model="userInfoData.lensNames" placeholder="请输入镜头名称，并用「，」隔开"></el-input>
                        </el-form-item>
                        <el-form-item label="工具：" prop="toolNames">
                            <el-input v-model="userInfoData.toolNames" placeholder="请输入镜头名称，并用「，」隔开"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </el-col>
            <el-col :sm="5">
                <h3>头像</h3>
                <el-upload
                        class="avatar-uploader"
                        action="http://bbs.chenxubiao.cn/picture/upload/profile"
                        name="uploadFile"
                        :show-file-list="false"
                        :on-progress="handleAvatarProgress"
                        :on-success="handleAvatarSuccess"
                >
                    <!--<img style="width:200px;height: 200px;display: block;" v-if="!avatarId" class="avatar"
                         src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                    <img v-else style="width:200px;height: 200px;display: block;"
                         :src="'http://bbs.chenxubiao.cn/picture/show?id='+avatarId" alt="">-->
                    <img style="width:200px;height: 200px;display: block;" v-if="!userInfoData.avatarId" class="avatar"
                         src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                    <img v-else style="width:200px;height: 200px;display: block;"
                         :src="'http://bbs.chenxubiao.cn/picture/show?id='+userInfoData.avatarId" alt="">
                </el-upload>
                <span>点击图片，更换头像</span>
            </el-col>
        </el-row>
        <div class="form-footer" style="text-align: center">
            <StateButton btnText="保存内容" @click="onSubmit('localData')"></StateButton>
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
        name: 'userSettings',
        data(){
            return {
                userInfoData: {
                    userId: '',
                    avatarId: '',
                    backgroundId: '',
                    userName: '',
                    email: '',
                    cellphone: '',
                    sex: '',
                    birthday: '',
                    description:'',
                    desc: '',
                    cameraNames: '',
                    errorMessage: '无',
                    categoryIds: [],
                    hobby: []
                },
                avatarId:'',
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
                categories: state => state.optionMap.categories,
            }),
            localData() {
                Object.assign(this.userInfoData, this.userInfo.userProfile)
                return this.userInfoData
            }

        },
        watch:{
            userInfo:function () {
                console.log("userInfo改变了")
//                this.avatarId = this.userInfo.avatarId
                Object.assign(this.userInfoData, this.userInfo.userProfile)
            },
            categories:function () {
                this.categories.map((item, index) => {
                    if (item.id === 0) {
                        this.categories.splice(index, 1)
                        return false
                    }
                })
            }
        },
        methods: {
            ...mapActions({
                formSubmit: UserSettingType.A_FORM_SUBMIT,
                autoLogin: GlobalType.A_USER_AUTO_LOGIN,
                //                userInfoUpload:GlobalType.A_USER_INFO_UPDATE
            }),
            onSubmit: function () {
                let self = this
                let rlt = {}
                console.log('self.userInfoData', self.userInfoData)
                for (let key in self.userInfoData) {
                    let tval
                    if (/hobby/.test(key)) {
                        tval = self.userInfoData[key].join(',')
                    }
                    rlt[key] = tval
                }
                console.log('rlt', rlt)

                this.formSubmit({
                    userName: self.userInfoData.userName,
                    sex: parseInt(self.userInfoData.sex),
                    birthday: (typeof self.userInfoData.birthday) !== 'string' ? self.userInfoData.birthday : self.convertDateFromString(self.userInfo.userProfile.birthday),
                    description: self.userInfoData.description,
                    cameraNames: self.userInfoData.cameraNames,
                    lensNames: self.userInfoData.lensNames,
                    toolNames: self.userInfoData.toolNames,
                    avatarId: self.userInfoData.avatarId,
                    categoryIds: rlt.hobby
                }).then((rsp) => {
                    if (self.formStep === 'submitted') {
                        self.autoLogin()
                        self.$message({
                            type: 'success',
                            message: '提交成功'
                        })
                    } else {
                        self.$message.error('提交失败')
                    }
                })
            },
            handleAvatarSuccess: function (res, file, fileList) {
                if (res.success) {
                    this.userInfoData.avatarId = res.vars.data.id
                    this.avatarId = res.vars.data.id
                } else {
                    this.$message.error("上传失败")
                }
            },
            handleAvatarProgress: function (event, file, fileList) {
                console.log('event', event)
                console.log('file', file)
                console.log('fileList', fileList)
            },
            convertDateFromString: function (dateString) {
                if (dateString) {
                    let arr1 = dateString.split(" ");
                    let sdate = arr1[0].split('-');
                    let date = new Date(sdate[0], sdate[1] - 1, sdate[2]);
                    return date;
                }
            }

        },
        components: {
            StateButton
        }
    }
</script>