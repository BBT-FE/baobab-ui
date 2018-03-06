import create from './index.tpl'
import './index.styl'

const MAXLENTG = 5
const WHITE_BG = 'rgba(255,255,255,1)'
const PRIMARY = '#3E81F1'
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
    },
    tintColor: {
      type: String,
      default: PRIMARY
    },
    selectedIndex: {
      type: Number,
      default: 0
    },
    fullBorder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: 0,
      isOverFlow: false,
      defaultColor: WHITE_BG,
      activeStyle: null,
      initStyle: {
        color: WHITE_BG,
        'border-bottom': 'none'
      }
    }
  },
  created() {
    this.activeIndex = this.selectedIndex <= this.tabList.length - 1 ? this.selectedIndex : 0
    if (this.tabList.length >= MAXLENTG) {
      this.isOverFlow = true
    }
    this.activeStyle = {
      'border-bottom': `2px solid ${this.tintColor}`,
      color: this.tintColor
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
