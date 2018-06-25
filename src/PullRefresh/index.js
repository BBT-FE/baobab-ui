import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'PullRefresh',

  props: {
    refresh: {
      type: Function,
      required: true
    }
  },

  // 把握两个状态： 是否可以刷新， 是否正在加载
  data() {
    return {
      msg: '', // 滑动提示语
      touchStart: 0, // 触摸开始
      loading: 0, // 是否正在加载
      isRefresh: 0, // 是否可以刷新
      dis: 0 // 滑动距离
    }
  },

  mounted () {
    this.$nextTick(() => {
      // 获取容器
      let container = this.$refs.container
      // 容器绑定 touchstart
      container.addEventListener('touchstart', (e) => {
        if (this.loading) {
          e.preventDefault()
          return
        }
        this.touchStart = e.targetTouches[0].pageY
      })

      // 容器绑定 touchmove
      container.addEventListener('touchmove', (e) => {
        if (!this.touchStart) {
          return
        }

        if (this.loading) {
          e.preventDefault()
          return
        }

        // 获取scrollTop
        let scrollTop = container.scrollTop
        // 获取Y方向移动的距离
        if (scrollTop === 0) {
          let touch = e.targetTouches[0]
          this.dis = touch.pageY - this.touchStart
          if (this.dis > 0) {
            e.preventDefault()
            if (this.dis < 88) {
              // 设置容器内数据列表位移
              container.style.overflow = 'inherit'
              container.style.transform = `translate3d(0px, ${this.dis}px, 0px)`
              if (this.dis > 60) {
                this.msg = '释放刷新'
                // 该距离内已经达到刷新条件, 标识isRefresh = 1
                this.isRefresh = 1
              } else {
                this.msg = '下拉加载'
              }
            }
          }
        }
      })

      // 容器绑定 touchend
      container.addEventListener('touchend', (e) => {
        if (this.dis === 0) {
          return
        }

        if (this.loading) {
          e.preventDefault()
          return
        }

        // 根据滑动距离来判断是否可以执行刷新, 如果可以执行刷新则执行loading
        if (this.isRefresh && this.dis > 0) {
          // 如果用户拉到一定位置达到刷新条件, 则松手后发送数据请求，并将列表卡在指定高度（高度为提示信息容器的高度）
          container.style.transform = 'translate3d(0px, 50px, 0px)'
          this.loading = 1
          this.refresh().then(() => {
            // 数据加载完成则重置
            this.isRefresh = 0
            this.loading = 0
            container.scrollTop = 0
            container.style.overflow = 'auto'
            container.style.transform = 'translate3d(0px, 0px, 0px)'
          })
          return
        }

        // 如果距离不足以执行刷新操作, 则恢复下拉前的状态
        // 未触发加载条件，则进行变量重置
        container.style.overflow = 'auto'
        container.style.transform = 'translate3d(0px, 0px, 0px)'
      })
    })
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
