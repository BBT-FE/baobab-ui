import create from './index.tpl'
import './index.styl'

export default create({
  methods: {
    alert() {
      this.$dialog.alert('提示', '我是一个好人我是一个好人我是一个好人我是一个好人我是一个好人我是一个好人我是一个好人', [
        {
          title: '是么?',
          onClick() {
            console.log(`${this.title}`)
          }
        },
        {
          title: '我知道了!',
          onClick() {
            console.log(`${this.title}`)
          }
        }
      ])
    },

    confirm() {
      this.$dialog.confirm('提示', '要分手么？', result => {
        console.log(`结果: ${result}`)
      })
    },

    prompt() {
      this.$dialog.prompt('你要跟我告白么？', result => {
        console.log(result)
      })
    }
  }
})
