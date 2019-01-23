// 引入axios
import axios from 'axios'
import {
    TIMEOUT,
    ERR_CODE,
    BASE_URL
} from "./config"
let cancel, promiseArr = {}
const CancelToken = axios.CancelToken



axios.defaults.baseURL = BASE_URL
// 设置默认请求头
axios.defaults.headers = {
    // 'X-Requested-With': 'XMLHttpRequest'
    'Access-Control-Allow-Origin': '*'
}

axios.defaults.timeout = TIMEOUT

// 请求拦截器
// axios.interceptors.request.use(config => {
//     // 为请求头添加token
//     config.headers.token = `${sessionStorage.getItem('token')}`

//     // 发起请求时，取消掉当前正在进行的相同请求
//     if (promiseArr[config.url]) {
//         promiseArr[config.url]('操作取消')
//         promiseArr[config.url] = cancel
//     } else {
//         promiseArr[config.url] = cancel
//     }
//     return config
// }, err => {
//     return Promise.reject(err)
// })

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, err => {
    if (err && err.response) {
        err.message = ERR_CODE[err.response.status] || `${ERR_CODE[0]}${err.response.status}`
    } else {
        err.message = ERR_CODE['fail']
    }
    console.error(err.message)
    return Promise.resolve(err.response)
})

export default {
    // get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // post请求
    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                data: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}