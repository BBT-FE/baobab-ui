import create from './index.tpl'
import './index.styl'

const MAXLENTG = 5
const WHITE_BG = 'rgba(255,255,255,1)'
const component = create({
  name: 'Tab',
  props: {
    tabList: {
      type: Array,
      default: []
    },
    bgColor: {
      type: String,
      default: WHITE_BG
    }
  },
  data() {
    return {
      activeIndex: 0,
      isOverFlow: false,
      defaultColor: WHITE_BG
    }
  },
  created() {
    if (this.tabList.length >= MAXLENTG) {
      this.isOverFlow = true
    }
    // if(this.bgColor) []
  },
  methods: {
    changeActive(index, item) {
      this.activeIndex = index
      this.$emit('onChange', Object.assign({}, item))
    }
  }
})
export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
