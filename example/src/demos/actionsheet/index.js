import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      options: [
        {
          text: '土豪',
          onSelect: () => {
            console.log('土豪, 你好')
          }
        },
        {
          text: '白富美',
          disable: true,
          onSelect: () => {
            console.log('白富美， 我们一起做朋友吧！')
          }
        },
        {
          text: '人妖',
          destructive: true,
          onSelect: () => {
            console.log('人妖？ 闪远点！')
          }
        },
        {
          text: '同性恋',
          destructive: true,
          onSelect: () => {
            console.log('同性恋？ 什么鬼？')
          }
        }
      ]
    }
  },

  methods: {
    open() {
      let options = this.options
      let tempAry = [
        ...options,
        ...options,
        ...options,
        ...options
      ]
      options = tempAry
      this.$actionSheet.show('以下哪种人是你喜欢的？', options, false)
    }
  }
})
