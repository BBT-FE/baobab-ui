import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'SwipeOutItem',

  data() {
    return {
      speed: 300,
      translate: 0,
      startX: 0,
      oldTouches: null,
      btnWidth: 0
    }
  },

  computed: {
    itemStyle() {
      return {
        transition: `all ${this.speed}ms`,
        transform: `translate3d(${this.translate}px, 0, 0)`
      }
    }
  },

  methods: {
    delItem() {
      this.$parent.$emit('removeEle', this.$el)
    },

    start(e) {
      this.speed = 0
      this.oldTouches = e.touches[0]
      this.startX = this.translate
    },

    move(e) {
      let moveX = e.touches[0].pageX - this.oldTouches.pageX
      let moveY = e.touches[0].pageY - this.oldTouches.pageY

      if (Math.abs(moveX) < Math.abs(moveY) || Math.abs(moveX) < 20 || Math.abs(moveY) > 30) return
      e.preventDefault()
      this.$parent.$emit('resetItem', this)
      moveX = this.startX * 1 + moveX * 1

      // 边界判断
      if (moveX < -this.btnWidth) {
        moveX = -this.btnWidth
      } else if (moveX > 0) {
        moveX = 0
      }
      this.translate = moveX
    },

    end() {
      // 自动布置
      let moveX = -this.translate > 30 ? -this.btnWidth : 0
      // 滑动停止之前将speed置为0
      this.speed = 300
      this.translate = moveX
    },

    close() {
      this.translate = 0
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.btnWidth = this.$refs.btns.offsetWidth
    })
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
