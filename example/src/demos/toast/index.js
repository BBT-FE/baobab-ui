import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      loadingA: 'loadingA',
      loadingB: 'loadingB',
      descA: '信息更新成功',
      descB: '换卡成功',
      descC: '换卡失败',
      descD: '正在加载',
      descE: '欢迎使用Baobab-UI组件库！',
      val1: false,
      val2: false,
      val3: false,
      val4: false,
      val5: false,
      val6: false,
      val7: false
    }
  },

  methods: {
    handle(show, type, content) {
      if (this[show]) {
        this.$toast.zIndex(10).show(content, 'center', type, () => {
          this[show] = false
        })
      } else {
        this.$toast.hide()
      }
    }
  }
})
