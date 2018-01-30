import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'CellGroup',

  props: {
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
