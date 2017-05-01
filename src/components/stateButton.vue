<style>
    .button_error{
        color: red;
        font-size: 12px;
    }
</style>
<template>
  <span>
    <span class="button_error">{{ formStep === "error" ? errorMessage : "" }}</span>
    <el-button size="small" :type="type" :loading="loading" @click="onClick">{{ text }}</el-button>
  </span>
</template>

<script>
    export default {
        props: {
            'btnText': {
                type: String
            },
            'errorMessage': {
                type: String
            },
            'formStep': {
                type: String,
                default: 'onload'
            }
        },
        data() {
            return {
                lastStep: ''
            }
        },
        computed: {
            type() {
                if (this.formStep === 'error') {
                    return 'danger'
                } else if (this.formStep === 'submitted') {
                    return 'success'
                }
                return 'primary'
            },
            loading() {
                if (this.formStep === 'loading' || this.formStep === 'submitting') {
                    return true
                }
                return false
            },
            text() {
                let str
                switch (this.formStep) {
                    case 'loading':
                        str = '加载中'
                        break
                    case 'onload':
                        str = this.btnText
                        break
                    case 'submitting':
                        str = '提交中'
                        break
                    case 'submitted':
                        str = '提交成功'
                        break
                    case 'error':
                        if (this.lastStep === 'submitting') {
                            str = '提交失败'
                        } else {
                            str = '加载失败'
                        }
                        break
                    default:
                        str = this.btnText
                        break
                }
                this.lastStep = this.formStep
                return str
            }
        },
        methods: {
            onClick() {
                if (this.formStep === 'error' || this.formStep === 'submitted') {
                    return
                }
                this.$emit('click')
            }
        }
    }
</script>
