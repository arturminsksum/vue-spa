import OsSvg from '@/components/elements/os-svg'

export default {
  name: 'OsModal',

  components: {
    OsSvg
  },

  props: {
    modalTitle: {
      type: String,
      default: 'Modal title'
    },
    noHeader: {
      type: Boolean
    }
  },

  data () {
    return {
    }
  },

  methods: {
    closeModal: function (event) {
      let el = event.target,
        isModalMask = typeof el.className === 'string' ? el.className.indexOf('modal__mask') > -1 : false
      if (isModalMask) {
        this.$emit('close')
      }
    }
  },
  mounted () {
    document.body.style.overflow = 'hidden'
  },

  destroyed () {
    document.body.style.overflow = 'auto'
  }
}
