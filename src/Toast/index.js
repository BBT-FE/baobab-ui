import create from './index.tpl'
import './index.styl'

const component = create({
  name: 'Toast',

  data() {
    return {
      visiable: false,
      position: 'center',
      content: '',
      type: 'text', // success failure warning wifi loadingA loadingB text
      zIndex: 7
    }
  },

  methods: {
    show(content, position = 'center', type = 'text', time = 2000, callback) {
      if (content === '' && type === 'loadingB') {
        content = '正在加载'
      }

      if (typeof position === 'function') {
        callback = position
        position = 'center'
      }

      if (typeof type === 'function') { // 至少写两个
        callback = type
        type = 'text'
      }

      if (typeof time === 'function') {
        callback = time
        time = 2000
      }

      this.content = content
      this.position = position
      this.type = type
      this.visiable = true

      setTimeout(() => {
        this.hide()
        if (typeof callback === 'function') {
          callback()
        }
      }, time)
    },

    hide() {
      this.visiable = false
    },

    afterLeave() {
      this.content = ''
      this.position = 'center'
      this.zIndex = 4
    }
  }
})

export default {
  install(Vue) {
    const toast = new Vue(component)
    const id = 'baobab-ui-toast-mount-point'
    const mountPoint = document.createElement('div')
    mountPoint.id = id
    document.body.appendChild(mountPoint)
    toast.$mount(`#${id}`)
    return {
      show() {
        toast.show.apply(toast, arguments)
      },

      hide() {
        toast.hide.apply(toast, arguments)
      },

      zIndex(zIndex) {
        toast.zIndex = zIndex
        return toast // 目的完成链式写法
      }
    }
  }
}
