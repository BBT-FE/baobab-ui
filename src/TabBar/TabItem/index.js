import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'TabItem',

  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    to: String,
    selected: {
      type: Boolean,
      required: false,
      default: undefined
    }
  },

  computed: {
    hasSlot() {
      return Object.keys(this.$slots).length > 0
    },

    hasIcon() {
      return this.$slots.icon
    }
  },

  methods: {
    handleClick() {
      if (this.to && this.$router) {
        this.$router.replace(this.to)
      }
      else {
      // 如果不存在to则执行方法
        this.$emit('click')
      }
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component) // 注册全局组件
  }
}
