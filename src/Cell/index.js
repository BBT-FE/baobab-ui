import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Cell',
  props: {
    borderBottom: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object]
    },
    arrow: undefined,
    bgColor: {
      type: String,
      default: 'rgba(255,255,255,1)'
    }
  },

  methods: {
    handleClick() {
      if (this.to) {
        if (/^https?:/.test(this.to)) {
          window.location = this.to
        }
        else {
          if (this.$router) {
            this.$router.push(this.to)
          }
          else {
            this.$emit('click')
          }
        }
      }
      else {
        this.$emit('click')
      }
    }
  },

  computed: {
    hasIcon() {
      return this.$slots.icon
    },
    // 如果有to属性, 则不必写arrow
    hasArrow() {
      if (this.arrow !== undefined) {
        return true
      }
      if (this.to) {
        return true
      }
      return false
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
