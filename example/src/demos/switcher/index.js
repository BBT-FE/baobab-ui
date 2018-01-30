import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      val: '',
      val1: '开',
      val2: '开'
    }
  },

  watch: {
    val(newVal) {
      console.log(newVal)
    },

    val1(newVal) {
      console.log(newVal)
    }
  },

  methods: {
    handle(val) {
      if (val === '开') {
        console.log('开')
      } else {
        console.log('关')
      }
    }
  }
})
