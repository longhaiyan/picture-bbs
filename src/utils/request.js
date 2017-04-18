// import {extend, ajax} from 'jquery';
import reqwest from 'reqwest'
// import fetch from 'isomorphic-fetch'
import Vue from 'vue'

export default (options) => {
    const way = 2

    // jquery.ajax
    if (way == 1) {
        // const ajax = require('jquery').ajax;
        options.type = options.method

        ajax(options)
    }

    if (way == 2) {
        // reqwest
        options = Object.assign({}, {
            crossOrigin: true,
            contentType: "application/x-www-form-urlencoded",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
        }, options)

        return reqwest(options)
    }

    if (way == 3) {
        // reqwest
        var ops = Object.assign({}, {
            url: '',
            method: 'get',
            data: null,
            // 这个选项会让post请求模拟表单的方式提交，这样就不会触发 options 预请求
            emulateJSON: true,
            success: null
        }, options)

        if (ops.method == 'get') {
            ops.params = ops.data
        } else {
            ops.body = ops.data
        }

        // console.info("request", ops );
        // return;
        return new Promise((resolve, reject) => {
            Vue.http(ops).then((res) => {
                // console.log(res.json());
                /* if( typeof res.body == "string" ){
                 res.body = JSON.parse(res.body);
                 } */
                ops.success(res.body)
                resolve()
            }, (res) => {
                reject()
            })
        })
    }
}
