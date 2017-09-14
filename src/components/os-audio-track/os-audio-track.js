import OsSvg from '@/components/elements/os-svg'

export default {
  name: 'OsAudioTrack',

  components: {
    OsSvg
  },

  props: {
    track: Object,
    current: [String, Object]
  },

  data () {
    return {
    }
  },

  methods: {
    trackPlay () {
      if (this.current !== this.track) {
        this.$emit('currentWasReset', this.track)
        if (this.current.music) {
          this.current.music.pause()
          this.current.music.currentTime = 0
          this.current.playing = false
          clearTimeout(this.current.timeoutId)
        }
      }
      this.track.music = this.$refs.audio
      this.track.music.play()
      this.track.playing = !this.track.playing

      if (this.track.timeoutId) {
        clearTimeout(this.track.timeoutId)
      }
      let delay = 1000 * (this.track.music.duration - this.track.music.currentTime),
        self = this
      this.track.timeoutId = setTimeout(() => {
        self.track.playing = false
        self.track.music.pause()
      }, delay)
    },
    trackStop () {
      this.track.music.pause()
      this.track.playing = !this.track.playing
      clearTimeout(this.track.timeoutId)
    }
  }
}
