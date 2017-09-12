export default {
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      if (this.isOpened) {
        this.bind()
      } else {
        this.unbind()
      }
    },
    documentClick (e) {
      let el = this.$el,
        target = e.target

      if (el !== target && !el.contains(target)) {
        this.toggle()
      }
    },
    bind () {
      document.addEventListener('click', this.documentClick)
    },
    unbind () {
      document.removeEventListener('click', this.documentClick)
    }
  },
  destroyed () {
    this.unbind()
  }
}
