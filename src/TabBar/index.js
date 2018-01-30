import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'TabBar',

  props: {
    visiable: {
      type: Boolean,
      default: true
    },
    bgcolor: {
      type: String,
      default: 'rgba(255, 255, 255, .9)'
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
