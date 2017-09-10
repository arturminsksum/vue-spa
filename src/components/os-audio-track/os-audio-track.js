import OsSvg from '@/components/elements/os-svg'

export default {
  name: 'OsAudioTrack',

  components: {
    OsSvg
  },

  props: {
    track: Object,
    isPlay: Boolean
  },

  data () {
    return {
      timeoutId: '',
      music: ''
    }
  },

  methods: {
    trackPlay () {
      this.$emit('showPlayer')
      this.$emit('stopAllTracks')
      this.track.playing = true
    },
    trackStop () {
      this.track.playing = false
    },
    timerToggle (value) {
      if (value) {
        let delay = 1000 * (this.music.duration - this.music.currentTime),
          self = this
        this.timeoutId = setTimeout(() => {
          self.track.playing = false
        }, delay)
      } else {
        clearTimeout(this.timeoutId)
      }
    }
  },

  computed: {
    makeMusic: function () {
      this.music = this.$refs.audio
    }
  },

  watch: {
    isPlay: function (value) {
      if (!this.music) {
        this.makeMusic
      }
      if (value) {
        this.music.play()
        this.timerToggle(true)
      } else {
        this.music.pause()
        this.timerToggle(false)
      }
    }
  }
}
