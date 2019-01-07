export const BASE_URL = process.env.NODE_ENV === 'development'
  // ? 'http://192.168.1.25:8080/wwj_relation/'
   ? '/api'
  : '/admin/api'

export const ERR_OK = 0

export const MOBILE = /^1[34578][0-9]{9}$/

export const TIMEOUT = 50000

export const ERR_CODE = {
  0: '连接错误',
  400: '错误请求',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器端出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求',
  'fail': '连接到服务器失败'
}




