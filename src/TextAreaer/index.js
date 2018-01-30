import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Textareaer',

  props: {
    // 双向绑定的值
    value: {
    },

    // 输入的最大长度
    max: {
      type: [Number, String]
    },

    // 行数
    rows: {
      type: [Number, String],
      default: 3
    },

    // 列数
    cols: {
      type: [Number, String],
      default: 30
    },

    // 高度
    height: [Number, String],

    // 是否只读
    readonly: Boolean,

    // 标题
    label: String,

    // 文本区名称
    name: String,

    // 提示语
    placeholder: {
      type: String,
      default: '请输入'
    },

    // 是否显示计数器
    showCounter: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      val: this.value
    }
  },

  watch: {
    // 同步输入的数据
    val(newVal) {
      this.$emit('input', newVal)
    }
  },

  computed: {
    textareaStyles() {
      if (this.height) {
        return {
          height: `${this.height}px`
        }
      }
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
