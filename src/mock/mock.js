/* eslint-disable */

const Mock = require('mockjs');
//import indexdataApi from './data/index'   //这里是通过data里面自己书写json读取
const indexdataApi = require('./index');
const newslist = require('./newslist');
const sliderlist = require('./sliderlist');
//const indexdataApi = require('./data/index');
Mock.mock(/\/indexdata\/data/, 'get', indexdataApi.data)
Mock.mock(/\/newslist\/data/, 'get', newslist.data)
Mock.mock(/\/sliderlist\/data/, 'get', sliderlist.data)
module.exports = {
	Mock
}