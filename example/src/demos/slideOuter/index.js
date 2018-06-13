import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      lists: [
        {
          title: '网易更新了',
          tips: '不再支持Flash视频播放',
          id: 1
        },
        {
          title: '电影新资讯',
          tips: '电影《红海行动》上映以来票房暴涨，很多国人表示对国产电影有了新的改观',
          id: 2
        },
        {
          title: '聚焦两会·共筑中国梦',
          tips: '习近平代表的两会故事',
          id: 3
        },
        {
          title: '微信团队',
          tips: '您的帐号有异常登录，如非本人操作，请及时修改密码',
          id: 4
        }
      ]
    }
  },
  methods: {
    del(el) {
      console.log(el.dataset.id)
    }
  }
})
