<template>
    <div class="my-money j-my-money">
        <h3>我的账户</h3>
        <div class="my-money-hd">当前余额：{{moneyList.balance}}金币</div>

        <el-table
                :data="moneyList.data"
                stripe
                style="width: 100%">
            <el-table-column

                    type="index"
                    label="序号"
                    width="100">
            </el-table-column>
            <el-table-column

                    prop="createTime"
                    label="时间"
                    width="180">
            </el-table-column>

            <el-table-column

                    prop="message"
                    label="详情"
                    >
            </el-table-column>

        </el-table>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default{
        name: 'Name',
        data(){
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        computed: {
            ...mapState({
                moneyList: state => state.setting.moneyList,
            })
        },
        beforeUpdate(){
            if (!$('.header').hasClass('header-white')) {
                $('.header').addClass('header-white')
            }
        },
        destroyed(){
            $('.header').removeClass('header-white')
        },
    }
</script>