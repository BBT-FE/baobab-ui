import create from './index.tpl'
import './index.styl'

const conf = {
  top: {
    anim: 'baobab--anim--topDown',
    style: {
      top: 0
    }
  },

  bottom: {
    anim: 'baobab--anim--bottomUp',
    style: {
      bottom: 0
    }
  }
}

const component = create({
  name: 'Popup',

  props: {
    value: {
      type: Boolean
    },

    position: {
      type: String,
      validator(position) {
        return position === 'bottom' || position === 'top'
      },
      default: 'bottom'
    },

    zIndex: {
      type: [String, Number],
      default: 2
    }
  },

  data() {
    return {
      visible: false
    }
  },

  computed: {
    conf() {
      return conf[this.position]
    }
  },

  watch: {
    value(newVal) {
      this.visible = newVal
    },

    visible(newVal, oldVal) {
      if (newVal !== this.value) {
        this.$emit('input', newVal)
      }
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
