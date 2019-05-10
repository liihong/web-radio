export default {

  IMG_URL: 'http://www.xcdt.cn/admin/common/img/',
  // 获取轮播图  顶部图片  底部图片
  getHome: '/home',
  // 获取头条
  getTopOne: '/news/getTopOne',


  // 获取新闻接口 （国际新闻   省市新闻 焦点等等 默认前5条 取出）
  getNews: '/news/getNews',
  // 根据新闻id 获取新闻信息
  getNewsDetail: '/news/getNew', // id
  // 获取新闻类别
  getNewsType: '/news/getNewTypes',
  // 参数   page.size 返回的条数  page.pn 页码   id 新闻类型id （返回的条数和页码可以不传 默认第一页  10条）
  getNewsByType: '/news/getNewByType',


  // 获取公告 默认前5条 取出）
  getNotices: '/notices/getNotices',
  // 根据公告id 获取公告信息
  getNoticesDetail: '/notices/getNotice', // id


  // 获取主持人头像接口
  getPeopleList: '/presenters/getPresenters',
  // 根据主持人id  获取主持人信息   
  getPeopleDetail: '/presenters/getPresenter', // id
  // 根据频道id  获取频道下的所有主持人信息
  getPeopleByChannelId: '/presenters/getPresenterByChannelId',

  // 频道信息     /api/channel
  // 获取频道列表
  getChannels: '/channel/getChannels',
  //参数 Long channelId

  getChannel: '/channel/getChannel',
  // 获取频道列表 并获取 频道列表中第一个 频道节目列表和文件
  getChannelsAndFistList: '/channel/getChannelsAndFistList',
  //根据频道id和日期  获取节目列表（节目名 节目文件）
  //参数 Long channelId（频道id）String date（获取那一天的节目）
  getJieMuList: '/channel/getJieMuList',
  //根据频道id获取电台公告
  //参数  channelId  频道id  【  page.size （条数）page.pn 页码    可为空】
  getNoticeByChannelId: '/channel/getNoticeByChannelId',

  // 获取专题信息信息
  getTopic: '/specials//getZhuantis',

  getSpecial: '/specials/getSpecials',

  getNewsSpecial: '/specials/getSpecial',
  // 获取专题详情
  getTopicDetail: '/specials/getZhuanti',

  getVideos: '/videos/getVideos',

  getVideoDetial: '/videos/getVideo',
  getFrontMenus:'/frontMenus/getFrontMenus',
  getHTML: '/thePeopleServices/getHtml'
}