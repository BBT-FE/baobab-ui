import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'SwipeOut',

  data() {
    return {
      activeItem: null
    }
  },

  methods: {
    removeEle(el) {
      this.$refs.swipeOut.removeChild(el)
      this.$emit('onremove', el)
    },

    resetItem(item) {
      if (this.activeItem === item) return
      if (this.activeItem && this.activeItem.close) {
        this.activeItem.close()
      }
      this.activeItem = item
    }
  },

  created() {
    this.$on('resetItem', this.resetItem)
    this.$on('removeEle', this.removeEle)
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
