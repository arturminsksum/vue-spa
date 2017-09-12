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
        isModalMask = el.className.indexOf('modal__mask')
      if (isModalMask !== -1) {
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
