import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Badge',

  props: {
    tipNum: {
      type: [String, Number],
      required: false
    },

    bgColor: {
      type: String,
      default: '#3E81F1'
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
