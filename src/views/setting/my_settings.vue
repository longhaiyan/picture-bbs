<template>
    <div class="my-settings">
        <el-row :gutter="10">
            <el-col :sm="4">
                <el-menu :router="true" :default-active="navIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="/setting/user_setting"><i class="el-icon-menu"></i>设置个人信息</el-menu-item>
                    <el-menu-item index="/setting/money"><i class="el-icon-setting"></i>账户信息</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :sm="20">
                <router-view></router-view>
            </el-col>

        </el-row>

    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'mySettings',
        data(){
            return{
                activeIndex:"/setting/user_setting"
            }
        },
        computed: {
            ...mapState({
                navIndex: state => state.setting.navIndex,
            })
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            setNavActiveIndex(){
                if ($('.j-my-money').length) {
                    console.log("3")
                    this.activeIndex = "/setting/money"
                }
                if ($('.j-user-setting').length) {
                    console.log("2")
                    this.activeIndex = "/setting/user_setting"
                }
            },
        },
    }
</script>