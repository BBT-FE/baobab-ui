import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Field',

  props: {
    label: String,

    placeholder: String,

    type: {
      type: String,
      default: 'text'
    },

    align: {
      type: String,
      default: 'left'
    },

    value: {
    },

    invalid: {
      type: Object,
      default() {
        return {
          value: false,
          msg: '请重新输入'
        }
      }
    }

  },

  data() {
    return {
      val: this.value
    }
  },

  watch: {
    value(newVal) {
      if (newVal !== this.val) {
        this.val = newVal
      }
    },

    val(newVal, oldVal) {
      this.$emit('input', newVal)
    }
  },

  methods: {
    handleBlur(e) {
      this.$emit('blur', e)
    },

    handleFocus(e) {
      this.$emit('focus', e)
    }
  },

  computed: {
    hasLabelSlot() {
      return !!this.$slots.label
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
