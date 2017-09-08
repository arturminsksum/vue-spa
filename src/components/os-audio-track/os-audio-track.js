import OsSvg from '@/components/elements/os-svg'

export default {
  name: 'OsAudioTrack',

  components: {
    OsSvg
  },

  props: {
    track: Object,
    audioActive: Boolean,
    trackedNow: [String, Object]
  },

  data () {
    return {
      timeoutId: '',
      delay: ''
    }
  },

  methods: {
    toggleSong: function () {
      this.track.stoped = !this.track.stoped
      var music = this.$refs.audio,
        self = this

      if (this.trackedNow === '' || typeof this.trackedNow === 'object') {
        if (music !== this.trackedNow.currentSong && typeof this.trackedNow === 'object') {
          this.trackedNow.currentSong.pause()
          this.trackedNow.currentSong.currentTime = 0
          clearTimeout(this.trackedNow.timeoutId)
          this.trackedNow.stoped = true
        }
        this.trackedNow = this.track
        this.trackedNow.currentSong = this.$refs.audio
        this.$emit('setComposition', this.trackedNow)
      }

      if (music.paused) {
        this.audioActive = !this.audioActive
        this.$emit('isAudioShow', this.audioActive)
        music.play()
        this.track.delay = 1000 * (music.duration - music.currentTime)
        this.track.timeoutId = setTimeout(() => {
          self.track.stoped = true
        }, this.track.delay)
      } else {
        music.pause()
        clearTimeout(this.track.timeoutId)
      }
    }
  }
}
