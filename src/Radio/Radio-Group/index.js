import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'RadioGroup',

  props: {
    value: String,

    options: {
      type: Array,
      default() {
        return []
      }
    },

    position: {
      type: String,
      default: 'right'
    },

    type: String
  },

  data() {
    return {
      radioVal: this.value
    }
  },

  watch: {
    value(newVal) {
      this.radioVal = newVal
    },

    radioVal(newVal) {
      this.$emit('input', newVal)
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
