import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      val5: '输入内容，最多16个汉字',
      val6: '',
      val7: '',
      disabled: false,
      isStart: false,
      time: 60
    }
  },

  computed: {
    invalid() {
      return {
        value: !/\d+/g.test(this.val5),
        msg: '请输入包含数字的信息'
      }
    }
  },

  methods: {
    focus() {
      console.log('focus')
    },

    blur() {
      console.log('blur')
    },

    getCode() {
      this.disabled = true
      this.timer = setInterval(() => {
        if (this.time === 0) {
          this.disabled = false
          clearTimeout(this.timer)
          this.time = 60
        }
        this.time -= 1
      }, 1000)
    }
  },

  watch: {
    isValid(newVal) {
      console.log(newVal)
    }
  }
})
