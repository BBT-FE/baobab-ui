/*
 * 应用根组件
 */

import create from './index.tpl'
import './index.styl'
const tabBarViewRoutes = [
  '/',
  '/About',
  '/Demos'
]

export default create({

  methods: {
    alert() {
      this.$dialog.alert('后续更新....')
    },

    goHome() {
      this.$router.push('/Demos')
    }
  },

  computed: {
    visiable() {
      let currentRouter = this.$route.path
      return tabBarViewRoutes.indexOf(currentRouter) > -1
    }
  }
})
