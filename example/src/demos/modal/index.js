import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      visibleA: false,
      visibleB: false,
      visibleC: false,
      descC: '提示内容文字，这里是提示内容文字，左右间距：44px，文字依次向下排列，若较多，可增加滚动条。',
      anim: 'none'
    }
  },

  methods: {
    open(animation, which) {
      if (which === 'A') {
        this.visibleA = true
      } else if (which === 'B') {
        this.visibleB = true
      } else {
        this.visibleC = true
      }
      this.anim = animation
    }
  }
})
