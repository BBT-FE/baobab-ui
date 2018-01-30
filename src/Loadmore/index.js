import create from './index.tpl'
import './index.styl'

function getDocuInfo() {
  return {
    winH: document.documentElement.clientHeight || document.body.clientHeight,
    scrollTop: document.body.scrollTop || document.documentElement.scrollTop,
    pageH: document.body.scrollHeight || document.documentElement.scrollHeight
  }
}

const conponent = create({
  name: 'Loadmore',

  props: {
    visible: {
      type: Boolean,
      default: false
    },

    desc: {
      type: String,
      default: '正在加载...'
    }
  },

  data() {
    return {
      show: false
    }
  },

  watch: {
    visible() {
      this.detectVisible()
    }
  },

  methods: {
    // 检测组件是否可见
    detectVisible() {
      const docuInfo = getDocuInfo()
      const winH = docuInfo.winH
      const pageH = docuInfo.pageH
      if (pageH >= winH && this.visible) { // 文档高度已超过一屏高度 并且 用户传递的visible必须为true
        this.show = true
      } else {
        this.show = false
      }
    },

    // 滚动事件 ->
    onScroll() {
      this.detectVisible()
      const docuInfo = getDocuInfo()
      const winH = docuInfo.winH
      const scrollTop = docuInfo.scrollTop
      const pageH = docuInfo.pageH
      if (scrollTop + winH >= pageH && this.visible) {
        this.$emit('reachBottom')
      }
    },

    // 监听滚动
    startListen() {
      window.addEventListener('scroll', this.onScroll)
    },

    // 停止监听
    stopListen() {
      window.removeEventListener('scroll', this.onScroll)
    }
  },

  mounted() {
    // 监听滚动
    this.startListen()

    // 滚动事件
    this.onScroll()
  },

  destroyed() {
    this.stopListen()
  }
})

export default {
  install(Vue) {
    Vue.component(conponent.name, conponent)
  }
}
