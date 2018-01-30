import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      filterList: [
        { title: '选项标题1',
          type: 'single',
          selected: false,
          list: [
            { name: '选项一', value: 0 },
            { name: '选项二', value: 0 },
            { name: '选项三', value: 0 }
          ]
        },
        { title: '选项标题1',
          type: 'selection',
          selected: true,
          list: [
            { name: '选项一', value: 0 },
            { name: '选项二', value: 0 },
            { name: '选项三', value: 0 },
	          { name: '选项四aaa', value: 0 }
          ]
        }
      ]
    }
  },
  methods: {
	  getFilter(value) {
	    console.log(value)
    }
  }
})
