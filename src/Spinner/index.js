import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Spinner',

  props: {
    size: {
      type: [Number, String],
      default: 36
    },

    // 边框宽度
    width: {
      type: [Number, String],
      default: 2
    },

    bgColor: {
      type: String,
      default: '#c2c2c2'
    },

    foreColor: {
      type: String,
      default: '#444'
    }

  },

  computed: {
    style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        'border-top-color': this.bgColor,
        'border-right-color': this.bgColor,
        'border-bottom-color': this.bgColor,
        'border-left-color': this.foreColor,
        'border-width': this.width + 'px'
      }
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
