import create from './index.tpl'
import './index.styl'
import Vue from 'vue'
const component = create({
  name: 'SingleCard',
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
	  }
  },
  data() {
    return {
      dataList: [],
      selectedIndex: -1
    }
  },
  created() {
    this.dataList = this.list
  },
  computed: {
    selectedItem() {
      let item = {}
      item = this.dataList[this.selectedIndex]
      return item
    }
  },
  watch: {
	  selectedIndex(value) {
      this.$emit('onchange', { index: this.parentIndex, list: [this.dataList[value]] })
	  }
  },
  methods: {
    radio(index) {
      this.dataList.forEach((item, index) => {
	      Vue.set(item, 'isSelected', false)
      })
      this.selectedIndex = index
	    this.dataList[index].isSelected = true
    }
  }
})
export default {
  install(Vue) {
    Vue.component(component.name, component)
  }
}
