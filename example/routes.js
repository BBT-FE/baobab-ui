/*
 * 统一管理路由
 */
import Vue from 'vue'
import Router from 'vue-router'

/*
 * 页面组件
 */
import About from './src/about'
import Demos from './src/demos'

/*
 * 例子展示
 */

// 基础组件示例
import BadgeExample from './src/demos/badge'
import RadioExample from './src/demos/radio'
import LoadingExample from './src/demos/loading'
import LoadmoreExample from './src/demos/loadmore'
import SwitcherExample from './src/demos/switcher'
import swipeOut from './src/demos/swipeOut'

// 标签栏相关示例
import TabBarExample from './src/demos/tabBar'

// 选项卡相关示例
import TabExample from './src/demos/tab'

// 表单相关示例
import CellExample from './src/demos/cell'
import FieldExample from './src/demos/field'
import TextareaerExample from './src/demos/textareaer'

// 筛选卡相关示例
import FilterExample from './src/demos/filter'

// 弹出框相关示例
import ModalExample from './src/demos/modal'
import DialogExample from './src/demos/dialog'
import ToastExample from './src/demos/toast'
import ActionSheetExample from './src/demos/actionsheet'
import PopupExample from './src/demos/popup'

// 气泡相关示例
import SpinnerExample from './src/demos/spinner'

// 按钮相关示例
import ButtonExample from './src/demos/button'

Vue.use(Router)

const routes = [

  // Home
  {
    path: '/',
    redirect: '/About'
  },

  // About
  {
    path: '/About',
    component: About
  },

  // Demos Index
  {
    path: '/Demos',
    component: Demos
  },

  // TabBar demos
  {
    path: '/TabBar-Example',
    component: TabBarExample
  },

  // Tab Control Demo
  {
    path: '/Tab-Example',
    component: TabExample
  },

  // Pop-up Box Demo
  {
    path: '/Modal-Example',
    component: ModalExample
  },

  // Bubble Demo
  {
    path: '/Spinner-Example',
    component: SpinnerExample
  },

  // Button Demo
  {
    path: '/Button-Example',
    component: ButtonExample
  },

  // Filter Demo
  {
    path: '/Filter-Example',
    component: FilterExample
  },

  // Cell Demo
  {
    path: '/Cell-Example',
    component: CellExample
  },

  // TextArea Demo
  {
    path: '/Textareaer-Example',
    component: TextareaerExample
  },

  // Badge Demo
  {
    path: '/Badge-Example',
    component: BadgeExample
  },

  // Dialog Demo
  {
    path: '/Dialog-Example',
    component: DialogExample
  },

  // ActionSheet Demo
  {
    path: '/ActionSheet-Example',
    component: ActionSheetExample
  },

  // Field Demo
  {
    path: '/Field-Example',
    component: FieldExample
  },

  // Radio Demo
  {
    path: '/Radio-Example',
    component: RadioExample
  },

  // Switch Demo
  {
    path: '/Switcher-Example',
    component: SwitcherExample
  },

  // Toast Demo
  {
    path: '/Toast-Example',
    component: ToastExample
  },

  // Popup Demo
  {
    path: '/Popup-Example',
    component: PopupExample
  },

  // Loading Demo
  {
    path: '/Loading-Example',
    component: LoadingExample
  },

  // Loadmore Demo
  {
    path: '/Loadmore-Example',
    component: LoadmoreExample
  },

  // SlideOuter
  {
    path: '/swipeOut-Example',
    component: swipeOut
  }
]

export default new Router({
  routes
})
