import create from './index.tpl'
import './index.styl'
// data list for example
// filterList: [
// 	{ title: '选项标题1',
// 		type: 'single',
// 		selected: false,
// 		list: [
// 			{ name: '选项一', value: 0 },
// 			{ name: '选项二', value: 0 },
// 			{ name: '选项三', value: 0 }
// 		]
// 	},
// 	{ title: '选项标题1',
// 		type: 'selection',
// 		selected: true,
// 		list: [
// 			{ name: '选项一', value: 0 },
// 			{ name: '选项二', value: 0 },
// 			{ name: '选项三', value: 0 },
// 			{ name: '选项四aaa', value: 0 }
// 		]
// 	}
// ]

const component = create({
  name: 'FilterCard',
  props: {
    filterList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
	    typeList: ['single', 'selection', 'mixed'],
      dataList: null,
      selectedList: [],
      style: {
      }
    }
  },
  created() {
    this.dataList = this.filterList
    this.dataList.forEach((item) => {
      let one = Object.assign({}, item)
      one.list = []
      this.selectedList.push(one)
    })
  },
  mounted() {
    let ele = this.$refs['wrapper']
    let winHeight = window.outerHeight
    let top = ele.offsetTop
    let height = ele.clientHeight
    let offset = winHeight - top - height
    this.style = {
      height: offset + 'px'
    }
  },
  methods: {
    // filter titile clicked
    selected(selectedIndex) {
      let flag = this.dataList[selectedIndex].selected
      this.dataList.forEach((item, index) => {
        item.selected = false
      })
      this.dataList[selectedIndex].selected = !flag
    },
    getSelected(value) {
	    this.onSelect(value)
    },
    onsingleCheck(value) {
      this.filterList[value.index].selected = false
      this.selectedList[value.index].list = value.list
      this.$emit('onchange', this.selectedList)
    },
    onSelect(value) {
      this.selectedList[value.index].list = value.list
    },
	  onConfirm(value) {
		  this.filterList[value.index].selected = false
		  this.selectedList[value.index].list = value.list
      this.$emit('onchange', this.selectedList)
    },
    onSelected(value) {
      this.selectedList[value.topIndex].list[value.index] = value.list
      // this.$emit('onchange', this.selectedList)
    },
    onEnsure(index) {
      this.filterList[index].selected = false
      this.$emit('onchange', this.selectedList)
    }
  }
})

export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
