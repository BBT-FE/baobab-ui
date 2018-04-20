import './common.styl'
// 基础组件
import Badge from './Badge'
import Radio from './Radio'
import RadioGroup from './Radio/Radio-Group'
import Switcher from './Switcher'
import Loading from './Loading'
import Loadmore from './Loadmore'

// 标签栏相关
import TabBar from './TabBar'
import TabItem from './TabBar/TabItem'

// 选项卡相关
import Tab from './Tab'

// 表单相关
import Cell from './Cell'
import CellGroup from './Cell/CellGroup'
import TextInput from './Text-Input'
import Field from './Field'
import Textareaer from './Textareaer'

// 筛选卡相关
import Filter from './Filter'
import SingleCard from './Filter/SingleCard'
import CheckCard from './Filter/CheckCard'

// 弹出层相关
import Modal from './Modal'
import Dialog from './Dialog'
import ActionSheet from './ActionSheet'
import Toast from './Toast'
import Popup from './Popup'

// 气泡相关
import Spinner from './Spinner'

// 按钮相关
import Button from './Button'

const components = [
  TabBar,
  TabItem,
  Badge,
  Cell,
  CellGroup,
  Field,
  Modal,
  Tab,
  Button,
  Spinner,
  // some component belong filter
  Filter,
  SingleCard,
  CheckCard,
  Textareaer,
  TextInput,
  Radio,
  RadioGroup,
  Switcher,
  Toast,
  Popup,
  Loading,
  Loadmore
]

// install方法将所有组件全局注册
export default {
  install(Vue) {
    components.forEach((component) => {
      component.install(Vue)
    })

    Vue.prototype.$dialog = Dialog.install(Vue)
    Vue.prototype.$actionSheet = ActionSheet.install(Vue)
    Vue.prototype.$toast = Toast.install(Vue)
    Vue.prototype.$loading = Loading.install(Vue)
  },

  version: require('../package.json').version
}
