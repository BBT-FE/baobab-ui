import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Modal',

  props: {
    // 使用v-model, 实现父子组件通信
    value: {
      type: Boolean
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    zIndex: {
      type: [String, Number],
      default: 2
    },
    anim: {
      validator: v => { // 验证数据准确性
        const names = ['none', 'bottomUp', 'fade']
        return names.indexOf(v) > -1
      },
      default: 'none'
    },
    // 是否点击Modal时隐藏Modal, 默认点击不隐藏
    dismissOnClick: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: false
    }
  },

  computed: {
    animName() {
      const name = this.anim
      if (name === 'none') {
        return ''
      }
      else {
        return `baobab--anim--${name}`
      }
    }
  },

  watch: {
    value(newVal) {
      this.visible = newVal
    }
  },

  methods: {
    handleClick(e) {
      if (e.target === this.$refs.modal && this.dismissOnClick) {
        this.$emit('input', false) // 更新父组件v-model传递过来的值
      }
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
