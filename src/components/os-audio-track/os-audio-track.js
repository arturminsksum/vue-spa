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
    }
  },

  methods: {
    toggleSong: function () {
      this.track.stoped = !this.track.stoped
      var music = this.$refs.audio,
        self = this

      if (this.trackedNow === '' || typeof this.trackedNow === 'object') {
        console.log('can you see me')
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
        this.trackedNow.delay = 1000 * (music.duration - music.currentTime)
        this.trackedNow.timeoutId = setTimeout(() => {
          self.trackedNow.stoped = true
        }, this.trackedNow.delay)
        music.play()
      } else {
        music.pause()
        clearTimeout(this.trackedNow.timeoutId)
      }
      this.audioActive = !this.audioActive
      this.$emit('isAudioShow', this.audioActive)
    }
  }
}
