import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      selected: '栏目标题1',
      options: [
        {
          label: '栏目标题1',
          value: '栏目标题1'
        },

        {
          label: '栏目标题2',
          value: '栏目标题2'
        },

        {
          label: '栏目标题3',
          value: '栏目标题3',
          disabled: true
        }
      ]
    }
  },

  watch: {
    selected(newVal) {
      console.log(newVal)
    }
  }
})
