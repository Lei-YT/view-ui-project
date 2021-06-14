"use strict";

import Vue from 'vue';
import axios from "axios";
import store from '../store'
import router from '../router'

// console.log(process.env.NODE_ENV)
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    // baseURL: window.apiUrl,
    baseURL: process.env.NODE_ENV == 'development' ? '/api' : '',
    timeout: 60 * 1000 * 5, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        // if (store.state.token) {
        //   config.headers.Authorization = store.state.token;
        // }
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

var errMsg = "";
// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        if (response.data.status == 200) {
            return response;
        } else if (response.data.status == 409 || response.data.status == 401 || response.data.status == 402) {
            Vue.prototype.$Notice.warning({
                title: '温馨提示',
                desc: response.data.message + '，请重新登陆！'
            });

            //   store.commit("token", "");
            //   store.commit("userName", "");
            //   store.commit("login", "false");

            //   router.push({ name: 'Login' })

        } else {
            var dataStr = '',
                msgStr = '';
            if (response.data.data) {
                dataStr = `<p>${response.data.data}</p>`
            }
            if (response.data.message) {
                msgStr = `<p>${response.data.message}</p>`
            }
            if (dataStr || msgStr) {
                Vue.prototype.$Notice.warning({
                    title: '温馨提示',
                    desc: ` ${msgStr}${dataStr}`
                });
            }
            return response;
        }


        // (200, "成功"),
        // (300, "失败"),
        // (400, "缺参"),

        // (401, "令牌不能为空"),
        // (401, "无效的令牌"),
        // (401, "令牌已过期"),
        // (401, "用户未认证"),
        // (402, "账号已过期"),
        // (403, "无权限访问"),
        // (404, "密码错误"),
        // (405, "账号已过期"),
        // (406, "账号不可用"),
        // (407, "用户不存在"),
        // (501, "旧密码错误"),
        // 502, "新密码错误"),

        // (503, "新增失败"),
        // (504, "删除失败"),
        // (505, "修改失败"),
        //  (506, "查询失败"),
        // (507, "id不能为空和0"),
        // (508, "数据已存在"),
        // (509, "此版本在审核中或已发布无法进行覆盖保存"),
        // (510, "规则解析失败");

    },
    function(err) {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '错误请求'
                    break;
                case 401:
                    err.message = '未授权'
                    break;
                case 403:
                    err.message = '拒绝访问'
                    break;
                case 404:
                    err.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    err.message = '请求方法未允许'
                    break;
                case 408:
                    err.message = '请求超时'
                    break;
                case 500:
                    err.message = '服务器端出错'
                    break;
                case 501:
                    err.message = '网络未实现'
                    break;
                case 502:
                    err.message = '网络错误'
                    break;
                case 503:
                    err.message = '服务不可用'
                    break;
                case 504:
                    err.message = '网络超时'
                    break;
                case 505:
                    err.message = 'http版本不支持该请求'
                    break;
                default:
                    err.message = `连接错误${err.response.status}`
            }

        } else {
            err.message = "连接到服务器失败"
        }


        Vue.prototype.$Notice.warning({
            title: '温馨提示',
            desc: err.message + ' (Status Code:' + err.response.status + ')'
        });
        // console.log(`%c ${err.message} Status code:${err.response.status} %c ${self.location.href}`, "background:red ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff;border:red 1px solid", "background:#fff ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;border:red 1px solid")
        return Promise.reject(err.response)
            // return Promise.reject(error);
    }
);

Plugin.install = function(Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        $http: {
            get() {
                return _axios;
            },
            post() {
                return _axios;
            },
            put() {
                return _axios;
            },
            delete() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;
