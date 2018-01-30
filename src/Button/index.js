import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Btn',

  props: {
    width: {
      type: String,
      default: ''
    },

    height: {
      type: String,
      default: '44px'
    },

    radius: {
      type: String,
      default: '2px'
    },

    tintColor: {
      type: String,
      default: '#3E81F1'
    },

    // spinnerBgColor
    spinnerBgColor: {
      type: String,
      default: 'rgba(255, 255, 255, .5)'
    },

    foreColor: {
      type: String,
      default: '#fff'
    },

    type: {
      default: 'normal',
      validator(type) {
        const types = ['normal', 'simple', 'cutout']
        return types.indexOf(type) > -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // 不可点击样式
    // mixClass() {
    //   return {
    //     'disabled': this.disabled || this.loading
    //   }
    // },

    overlayStyles() {
      let { type, tintColor } = this
      let styles = {}
      if (type === 'normal') {
        styles['background-color'] = tintColor
      }
      else if (type === 'simple') {
        styles['background-color'] = '#fff'
      }
      else if (type === 'cutout') {
        styles['background-color'] = '#fff'
      }
      return styles
    },

    style() {
      const { type, tintColor } = this

      const styles = {
        width: this.width,
        height: this.height,
        'border-radius': this.radius,
        'font-size': this.size
      }
      if (type === 'normal') {
        styles['color'] = '#fff'
        styles['background-color'] = tintColor
      }
      else if (type === 'simple') {
        styles['color'] = tintColor
        styles['background-color'] = '#fff'
      }
      else if (type === 'cutout') {
        styles['border'] = `1px solid ${tintColor}`
        styles['color'] = tintColor
        styles['background-color'] = '#fff'
      }

      return styles
    },

    spinnerSize() {
      const size = parseFloat(this.height) * 0.45
      return size < 12 ? 12 : size
    }
  },

  methods: {
    handleClick() {
      if (!this.loading && !this.disabled) {
        this.$emit('click')
      }
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
