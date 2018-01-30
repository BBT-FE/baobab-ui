import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Switcher',

  props: {
    offColor: {
      type: String,
      default: '#cacaca'
    },

    onColor: {
      type: String,
      default: '#3E81F1'
    },

    offText: {
      type: String,
      default: ''
    },

    onText: {
      type: String,
      default: ''
    },

    onVal: {
      default: true
    },

    offVal: {
      default: false
    },

    value: {
    }

    // 是否禁用
    // disabled: {
    //   type: Boolean,
    //   default: false
    // }
  },

  computed: {
    on() {
      return this.onVal === this.value
    },

    isText() {
      return this.onText && this.offText
    }
  },

  methods: {
    handleClick() {
      this.$emit('input', this.on ? this.offVal : this.onVal)
      this.$emit('click')
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
