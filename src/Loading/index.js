import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'loading',

  data() {
    return {
      visible: false,
      message: '',
      zIndex: 7
    }
  },

  methods: {
    show(message) {
      this.message = message
      this.visible = true
    },

    hide() {
      this.visible = false
      this.message = ''
      this.zIndex = 4
    }
  }
})

export default {
  install(Vue) {
    const loading = new Vue(component)
    const id = 'baobab-ui-loading-mount-point'
    const mountPoint = document.createElement('div')
    mountPoint.id = id
    document.body.appendChild(mountPoint)
    loading.$mount(`#${id}`)
    return {
      show() {
        loading.show.apply(loading, arguments)
      },

      hide() {
        loading.hide.apply(loading, arguments)
      },

      zIndex(zIndex) {
        loading.zIndex = zIndex
        return loading
      }
    }
  }
}
