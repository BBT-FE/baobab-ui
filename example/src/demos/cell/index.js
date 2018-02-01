import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      selectDesc: '',
      options: [
        {
          text: '土豪',
          onSelect: () => {
            this.selectDesc = '土豪'
          }
        },
        {
          text: '白富美',
          disable: true,
          onSelect: () => {
            this.selectDesc = '白富美'
          }
        },
        {
          text: '人妖',
          destructive: true,
          onSelect: () => {
            this.selectDesc = '人妖'
          }
        },
        {
          text: '同性恋',
          destructive: true,
          onSelect: () => {
            this.selectDesc = '同性恋'
          }
        }
      ]
    }
  },

  methods: {
    select() {
      this.$actionSheet.show('请选择', this.options, false)
    }
  }
})
