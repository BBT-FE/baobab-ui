import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'text-input',

  props: {
    value: {
    },

    placeholder: String,

    type: {
      type: String,
      default: 'text'
    },

    align: {
      type: String,
      default: 'left'
    },

    invalid: {
      type: Boolean,
      required: false
    }
  },

  data() {
    return {
      val: this.value
    }
  },

  watch: {
    value(newVal) {
      if (this.val !== newVal) {
        this.val = newVal
      }
    },

    val(newVal) {
      this.$emit('input', newVal)
    }
  },

  methods: {
    // 用户input输入事件
    handleInput(e) {
      this.val = e.target.value
    },

    // input失去光标事件
    handleBlur(e) {
      this.$emit('blur', e)
    },

    // input获得光标事件
    handleFocus(e) {
      this.$emit('focus', e)
    },

    clear() {
      this.val = ''
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
