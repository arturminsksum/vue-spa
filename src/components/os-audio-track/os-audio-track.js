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
    }
  },

  watch: {
    isPlay: function (value) {
      if (value) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    }
  }
}
