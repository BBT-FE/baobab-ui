import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      val1: '基本使用',
      val2: '带标题',
      val3: '不显示计数器',
      val4: '触发焦点事件',
      val5: '只读,不可编辑',
      label: '标题'
    }
  },

  methods: {
    onEvent(event) {
      console.log('on', event)
    }
  }
})
