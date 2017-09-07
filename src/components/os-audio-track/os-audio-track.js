import OsSvg from '@/components/elements/os-svg'

export default {
  name: 'OsAudioTrack',

  components: {
    OsSvg
  },

  props: {
    track: Object,
    audioActive: Boolean
  },

  data () {
    return {
    }
  },

  methods: {
    toggleSong: function () {
      this.track.show = !this.track.show
      var music = this.$refs.audio
      if (music.paused) {
        music.play()
      } else {
        music.pause()
      }
      this.audioActive = !this.audioActive
      this.$emit('isAudioShow', this.audioActive)
    }
  }
}
