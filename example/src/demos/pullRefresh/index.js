import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      lists: [
        { title: '对酒当歌，人生几何？譬如朝露，去日苦多。' },
        { title: '慨当以慷，忧思难忘。何以解忧，唯有杜康。' },
        { title: '青青子衿，悠悠我心。但为君故，沉吟至今。' },
        { title: '呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。' },
        { title: '明明如月，何时可掇。忧从中来，不可断绝。' },
        { title: '越陌度阡，枉用相存。契阔谈宴，心念旧恩。' },
        { title: '月明星稀，乌鹊南飞。绕树三匝，何枝可依？' },
        { title: '山不厌高，海不厌深。周公吐哺，天下归心。' }
      ]
    }
  },

  methods: {
    refresh() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.lists = this.lists.concat(this.lists)
          resolve()
        }, 2000)
      })
    }
  }
})
