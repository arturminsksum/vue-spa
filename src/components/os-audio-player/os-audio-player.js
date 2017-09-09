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

      playerFull: false
    }
  },

  methods: {
    makePlay: function () {
      this.playerActs = !this.playerActs
    },
    isPlay: function () {
      return this.playerActs
    },
    togglePlayerFull: function () {
      this.playerFull = !this.playerFull
      this.playerSmall = !this.playerSmall
    },
    isAudioActive: function () {
      if (!this.playerFull && this.audioActive) {
        this.playerSmall = this.audioActive
      }
      return this.playerSmall
    }
  }
}
