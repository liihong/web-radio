export default {

  IMG_URL: 'http://www.xcdt.cn/admin/common/img/',
  // 获取轮播图  顶部图片  底部图片
  getHome: '/home',

  // 获取新闻接口 （国际新闻   省市新闻 焦点等等 默认前5条 取出）
  getNews: '/news/getNews',
  // 根据新闻id 获取新闻信息
  getNewsDetail: '/news/getNew', // id

  // 获取公告 默认前5条 取出）
  getNotices: '/notices/getNotices',
  // 根据公告id 获取公告信息
  getNoticesDetail: '/notices/getNotice', // id

  // 获取主持人头像接口
  getPeopleList: '/presenters/getPresenters',
  // 根据主持人id  获取主持人信息   
  getPeopleDetail: '/presenters/getPresenter' // id
}