import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Radio',

  props: {
    value: String,

    option: {
      type: [Object, String],
      required: true
    },

    position: {
      type: String,
      default: 'right'
    },

    type: {
      type: String,
      default: 'normal',
      validator(type) {
        const types = ['normal', 'check']
        return types.indexOf(type) > -1
      }
    }
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
  },

  computed: {
    iconName() {
      return this.type
    },

    selected() {
      return this.radioVal === this.option.value
    }
  }

})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
