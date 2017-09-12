import OsSvg from '@/components/elements/os-svg'

export default {
  name: 'OsAudioPlayer',

  components: {
    OsSvg
  },

  props: {
    audioActive: Boolean
  },

  data () {
    return {
      controlPlayer: [
        {icon: 'share'},
        {icon: 'prev-track'},
        {icon: 'playVideo'},
        {icon: 'next-track'},
        {icon: 'volume'}
      ],

      playedList: [
        {
          song: 'Song Name',
          artist: 'Artist Name',
          duration: '05:00'
        },
        {
          song: 'Song Name',
          artist: 'Artist Name',
          duration: '05:00'
        },
        {
          song: 'Song Name',
          artist: 'Artist Name',
          duration: '05:00'
        },
        {
          song: 'Song Name',
          artist: 'Artist Name',
          duration: '05:00'
        },
        {
          song: 'Song Name',
          artist: 'Artist Name',
          duration: '05:00'
        },
        {
          song: 'Song Name',
          artist: 'Artist Name',
          duration: '05:00'
        }
      ],

      playerActs: true,

      playerSmall: false,

      playerFull: false,

      playerOpened: false
    }
  },

  methods: {
    makePlay () {
      this.playerActs = !this.playerActs
    },
    isPlay () {
      return this.playerActs
    },
    togglePlayerFull () {
      this.playerFull = !this.playerFull
      this.playerSmall = !this.playerSmall
    },
    closePlayer () {
      this.playerSmall = false
      this.playerOpened = false
    }
  },
  watch: {
    audioActive (value) {
      if (value) {
        this.playerFull ? this.playerSmall = false : this.playerSmall = true
        this.playerOpened = true
      }
    }
  }
}
