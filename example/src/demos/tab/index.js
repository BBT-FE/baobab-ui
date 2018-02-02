import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      tabList: [
        { title: '第一个', name: 'first', hasBadge: true, value: 0 },
        { title: '第二个', name: 'second', hasBadge: true, value: 10 },
        { title: '第三个', name: 'third', hasBadge: true, value: 0 },
        { title: '第四个', name: 'third', hasBadge: false, value: 0 },
        { title: '第五个', name: 'third', hasBadge: true, value: 0 }
      ],
	    fourList: [
		    { title: '第一个', name: 'first', hasBadge: true, value: 0 },
		    { title: '第二个', name: 'second', hasBadge: true, value: 10 },
		    { title: '第三个', name: 'third', hasBadge: true, value: 0 },
		    { title: '第四个', name: 'third', hasBadge: false, value: 0 }
	    ],
	    threeList: [
		    { title: '第一个', name: 'first', hasBadge: true, value: 0 },
		    { title: '第二个', name: 'second', hasBadge: true, value: 10 },
		    { title: '第三个', name: 'third', hasBadge: true, value: 0 }
      ],
	    twoList: [
		    { title: '第一个', name: 'first' },
		    { title: '第二个', name: 'second' }
	    ],
      oneList: [
        { title: '就一个', name: 'frist' }
      ]
    }
  },
  methods: {
    onChange(item) {
      // console.log(item)
    }
  }
})
