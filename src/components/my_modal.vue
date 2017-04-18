<template>
    <el-dialog ref="modal" :title="data.title" v-model="data.visible" :size="data.size"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               @close="onClose">
        <div>
            <slot></slot>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="onOk" :loading="loading">{{ data.confirmButtonText || "确定" }}</el-button>
            <el-button @click="onClose">{{ data.cancelButtonText || "取消" }}</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            step: {
                type: String,
                default: 'onload'
            },
            data: {
                type: Object,
                default(){
                    return {
                        title: '',
                        visible: false, // 为了可以在组件内修改其显隐，设计成对象
                        size: '',
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        beforeConfirm: null,
                        beforeCancel: null,
                        afterConfirm: null,
                        afterCancel: null
                    }
                }
            }

        },
        computed: {
            loading(){
                return this.step === 'loading' || this.step === 'submitting'
            },
            confirmText(){
                if (this.step === 'loading') {
                    return '加载中'
                } else if (this.step === 'submitting') {
                    return '提交中'
                } else {
                    return '确定'
                }
            }
        },
        methods: {
            onOk(){
                if (this.data && typeof this.data.beforeConfirm === 'function') {
                    this.data.beforeConfirm(this.doOk.bind(this))
                } else {
                    this.doOk()
                }
            },
            onClose(){
                if (this.data && typeof this.data.beforeCancel === 'function') {
                    this.data.beforeCancel(this.doClose.bind(this))
                } else {
                    this.doClose()
                }
            },
            doOk() {
                this.data.visible = false

                if (this.data && typeof this.data.afterConfirm === 'function') {
                    this.data.afterConfirm()
                }
            },
            doClose() {
                this.data.visible = false

                if (this.data && typeof this.data.afterCancel === 'function') {
                    this.data.afterCancel()
                }
            },
            afterClose(){
                this.onClose()
                //console.log('关闭')
            }
        }
    }
</script>
