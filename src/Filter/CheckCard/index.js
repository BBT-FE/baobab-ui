import create from './index.tpl'
import './index.styl'

import Vue from 'vue'
const component = create({
  name: 'CheckCard',
  props: {
    list: {
      type: Array,
      default: [],
      validator: value => value.length > 0
    },
	  parentIndex: {
    	type: [String, Number],
		  required: true,
		  validator: value => value >= 0
	  },
    topIndex: {
    	type: [Number],
	    default: null
    },
    mixed: {
    	type: [Boolean],
		  default: false
	  }
  },
  data() {
    return {
      dataList: [],
	    selectedList: []
    }
  },
  created () {
    this.dataList = this.list
  },
  watch: {
    selectedList(value) {
	     this.$emit('onchange', { index: this.parentIndex, list: value || [], topIndex: this.topIndex || null })
    }
  },
  methods: {
    // checkbox clicked
    checkBox(index) {
      let item = this.dataList[index]
	    // when item do not have isSelected property
	    if (!item.isSelected) {
		    Vue.set(item, 'isSelected', true)
	    } else {
      	item.isSelected = false
	    }
      this.dataList[index] = item
	    let list = this.selectedList
	    if (item.isSelected) {
      	if (list.indexOf(item) === -1) {
      		list.push(item)
	      }
	    } else {
      	let pos = list.indexOf(item)
		    if (pos !== -1) {
			    list.splice(pos, 1)
		    }
	    }
	    this.selectedList = list.sort(this.sortForSe())
    },
	  reset() {
		  this.resetSelectArr()
	  },
	  resetSelectArr() {
		  this.dataList.forEach((item) => {
			  item.isSelected = false
		  })
		  this.selectedList = []
	  },
	  confirm() {
		  this.$emit('onconfirm', { index: this.parentIndex, list: this.selectedList || [] })
	  },
	  sortForSe() {
		  return (before, after) => {
			  return this.dataList.indexOf(before) > this.dataList.indexOf(after)
		  }
	  }
  }
})
export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
