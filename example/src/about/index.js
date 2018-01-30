import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      motto: [
        '站在巨人的肩膀上，无所不能!',
        '世界上有10种人，一种懂二进制，一种不懂二进制!',
        '编程就像做爱，你得为一个错误提供一辈子的支持!',
        '少壮不努力，老大写程序!',
        '懒是一种美德!',
        '程序就像女人的裙子，越短才越好!',
        '没有银弹 --《人月神话》',
        'JavaScript是世界上最好的语言!',
        '要嫁就嫁程序猿，钱多话少，死得早！！！',
        '你才是程序员，你全家都是程序员！'
      ]
    }
  },

  computed: {
    version() {
      return __CONFIG__.version
    }
  }
})
