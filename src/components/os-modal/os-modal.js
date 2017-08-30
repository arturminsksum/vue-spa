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

  }
}
