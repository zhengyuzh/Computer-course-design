import axios from 'axios'
axios.defaults.withCredentials = true
// import Vue from 'vue';
// import store from '../store';
// import {router} from '../router/index';

// let vm = new Vue();


const instance = axios.create({
    
    baseURL: 'http://localhost:8282',
    timeout: 3000,
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Content-Type': 'multipart/form-data'
        }

    }
})


// 请求拦截
instance.interceptors.request.use(config => {
    // 自定义header，可添加项目token
    if (localStorage.getItem('Authorization')) {
        config.headers.token = localStorage.getItem('Authorization');
        config.headers.timestamp = new Date().getTime();
    }
    return config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
instance.interceptors.response.use(response => {
    // const resCode = response.status;
    // if (resCode === 200) {
    //   return Promise.resolve(response);
    // } else {
    //   return Promise.reject(response);
    // }
    return response;
}, error => {
    // const resCode = error.response.status;
    // switch (resCode) {
    //   case 401:
    //     vm.$Message.error(error.response.data.message);
    //     store.commit('logout', this);
    //     store.commit('clearOpenedSubmenu');
    //     // console.log('token-0', store.state.app.token);
    //     router.replace({
    //       name: 'login'
    //     });
    //     break;
    //   case 404:
    //     vm.$Message.error('网络请求不存在');
    //     break;
    //   case 500:
    //     vm.$Message.error('服务器连接错误');
    //     break;
    //   // 其他状态码错误提示
    //   default:
    //     vm.$Message.error(error.response.data.message);
    // }
    return Promise.reject(error);
})

/*
 *封装get方法
 *@param{String} url [请求地址]
 *@param{Object} params 请求参数
 */
export function Get(url, params) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error.data);
        })
    })
}

/**
 *封装post方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Post(url, params) {
    return new Promise((resolve, reject) => {
        instance.post(url, params).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error.data);
        })
    })
}

/**
 *封装put方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Put(url, params) {
    return new Promise((resolve, reject) => {
        instance.put(url, params).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error.data);
        })
    })
}

/**
 *封装patch方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Patch(url, params) {
    return new Promise((resolve, reject) => {
        instance.put(url, params).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error.data);
        })
    })
}

/**
 *封装delete方法
 *@param{String} url [请求地址]
 *@param{Object} params [请求参数]
 */
export function Delete(url, params) {
    return new Promise((resolve, reject) => {
        instance.delete(url, {
            params: params
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error.data);
        })
    })
}