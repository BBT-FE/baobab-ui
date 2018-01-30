import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      val1: false,
      val2: false
    }
  },

  methods: {
    handle(message) {
      if (message) {
        this.$loading.show(message)
      } else {
        this.$loading.show()
      }
      setTimeout(() => {
        this.val1 = false
        this.val2 = false
        this.$loading.hide()
      }, 1000)
    }
  }
})
