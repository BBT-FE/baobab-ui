import create from './index.tpl'
import './index.styl'

// disable color
const disableColor = '#999'

// careful color
const destructiveColor = '#ff3b30'

const component = create({
  name: 'actionSheet',

  data() {
    return {
      visible: false,
      title: '',
      options: [
        // {
        //    text: String,
        //    disable: Boolean,
        //    destructive: Boolean,
        //    onSelect: Function
        // }
      ],
      hideCancel: false,
      tintColor: '#333333',
      zIndex: 5
    }
  },

  methods: {
    init() {
      this.title = ''
      this.options = []
      this.hideCancel = false
    },

    show(title, options, hideCancel = false) { // 需要挂载到Vue原型上的方法
      this.title = title
      this.hideCancel = hideCancel
      this.options = options.map(opt => {
        if (typeof opt === 'object') {
          return opt
        }
        else {
          return {
            text: opt,
            disable: false,
            destructive: false
          }
        }
      })
      this.visible = true
    },

    hide() {
      this.visible = false
      setTimeout(() => {
        this.init()
      }, 300)
    },

    handleClick(i) {
      const conf = this.options[i]
      if (!conf.disable && conf.onSelect) {
        conf.onSelect()
        this.hide()
      }
    },

    getFontColor(opt) {
      if (opt.disable) {
        return disableColor
      }

      if (opt.destructive) {
        return destructiveColor
      }

      return this.tintColor
    }
  }
})

export default {
  install(Vue) {
    const actionsheet = new Vue(component)
    const id = 'baobab-ui-actionsheet-mount-point'
    const mountPoint = document.createElement('div')
    mountPoint.id = id
    document.body.appendChild(mountPoint)
    actionsheet.$mount(`#${id}`)
    return {

      config(conf) {
        ['tintColor', 'zIndex'].forEach(name => {
          if (typeof conf[name] !== 'undefined') {
            actionsheet[name] = conf[name]
          }
        })
        return this
      },

      show() {
        actionsheet.show.apply(actionsheet, arguments)
      },

      hide() {
        actionsheet.hide.apply(actionsheet, arguments)
      }
    }
  }
}
