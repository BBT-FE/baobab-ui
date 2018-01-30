import create from './index.tpl'
import './index.styl'

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

function isButton(obj) {
  const type = getType(obj)
  return /^(Object | Array | Function)&/.test(type)
}

function createButtons(options) {
  let buttons = []
  const type = getType(options)

  if (type === 'Object') {
    buttons = [options]
  }
  else if (type === 'Function') {
    buttons = [{
      title: '确定',
      onClick: options
    }]
  }
  else if (type === 'Array') {
    buttons = options
  }

  if (buttons.length === 0) {
    buttons = [{ title: '确定' }]
  }

  return buttons.map(btn => {
    if (getType(btn) !== 'Object') {
      return { title: btn }
    }
    else {
      return btn
    }
  })
}

const component = create({
  name: 'Dialog',

  data() {
    return {
      // 控制modal显隐
      visible: false,

      // 对话框标题
      title: '',

      // 对话框内容
      content: '',

      // 按钮数组
      buttons: [],

      // 是否存在输入框
      isPrompt: false,

      // 输入框中的值
      promptVal: '',
      zIndex: 6
    }
  },

  methods: {
    alert(title, content, buttons) {
      if (arguments.length === 1) {
        content = title
        title = undefined
      }
      else {
        if (isButton(content)) {
          buttons = content
          content = title
          title = undefined
        }
      }
      this.title = title
      this.content = content
      this.buttons = createButtons(buttons)
      this.visible = true
    },

    confirm(title, content, callback) {
      if (arguments.length === 1) {
        content = title
        title = undefined
      }
      else {
        if (typeof content === 'function') {
          callback = content
          content = title
          title = undefined
        }
      }

      this.alert(title, content, [
        {
          title: '取消',
          onClick() {
            if (callback) callback(false)
          }
        },
        {
          title: '我知道了',
          onClick() {
            if (callback) callback(true)
          }
        }
      ])
    },

    prompt(title, callback) {
      this.isPrompt = true
      this.alert(title, '', [
        {
          title: '取消'
        },
        {
          title: '确认',
          onClick: () => {
            if (callback) callback(this.promptVal)
          }
        }
      ])
    },

    handleClick(btn) {
      if (btn.onClick) {
        btn.onClick()
      }
      this.visible = false
    },

    // transition 组件上的钩子函数, 动画过渡结束之后执行的钩子函数
    afterLeave() {
      this.title = ''
      this.content = ''
      this.buttons = []
      this.promptVal = ''
      this.isPrompt = false
      this.zIndex = 6
    }
  },

  computed: {

    width() {
      return '270px'
    }
  }
})

export default {
  install(Vue) {
    const instance = new Vue(component)
    const id = 'baobab-ui-dialog-mount-point'
    const mountPoint = document.createElement('div')
    mountPoint.id = id
    document.body.appendChild(mountPoint)
    instance.$mount('#' + id)
    return {
      alert() {
        instance.alert.apply(instance, arguments)
      },

      confirm() {
        instance.confirm.apply(instance, arguments)
      },

      prompt() {
        instance.prompt.apply(instance, arguments)
      },

      zIndex(zIndex) {
        instance.zIndex = zIndex
        return instance
      }
    }
  }
}
