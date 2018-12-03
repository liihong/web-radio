/* eslint-disable */
var Mock = require('mockjs')
//import Mock from 'mockjs'
var data = Mock.mock({
  "status": 0,
  'newlist|10': [{
    'newstitle': "@ctitle(2, 10)",
    'datalist|10': [{
      'title': "@cword(15, 40)",
      'content': "@cparagraph",
      'image': "../assets/imgs/20180719155833_1563.png",
      'date': "@date()"
    }]
  }]
})

module.exports = {
 	data 
 }
