import create from './index.tpl'
import './index.styl'

export default create ({
  data() {
    return {
      total: 1,
      visible: true
    }
  },

  methods: {
    loadmore() {
      setTimeout(() => {
        if (this.total > 55) {
          this.visible = false
        } else {
          this.total += 5
        }
      }, 500)
    },

    init() {
      setTimeout(() => {
        this.total = 20
      }, 500)
    }
  },

  created() {
    this.init()
  }
})
