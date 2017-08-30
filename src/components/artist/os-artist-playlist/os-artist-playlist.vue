<template lang="pug">
ul.artist-playlist__content
  li.artist-playlist__track(v-for="(track, index) in playlistTracks", :key="track.id")
    audio(ref="audio", :src="require('../../../assets' + track.filePath)" type="audio/mp3")
    .artist-playlist__track-header
      .artist-playlist__track-avatar
        os-svg(name="disc", width="40px", height="40px").artist-playlist__track-avatar
      .artist-playlist__track-melody
        .artist-playlist__track-melody__manager
          .artist-playlist__track-melody__invoce
            a(href="/" @click.prevent="track.show = !track.show" @click="play(track.filePath, index)").artist-playlist__track-play
              os-svg(name="play", width="15px", height="20px", v-show="track.show")
              os-svg(name="stop", width="15px", height="15px", v-show="!track.show").artist-playlist__track-button-stop
            span.artist-playlist__track-name {{track.songName}}
          .artist-playlist__track-dt
            .artist-playlist__track-date(:class="{'artist-playlist__track-date--active': !track.show}") {{track.added}}
            .artist-playlist__track-time(ref="time", :class="{'artist-playlist__track-time--active': !track.show}") {{ duration }}
        .artist-playlist__track-melody__display Здесь Будет Нечто
    .artist-playlist__track-footer
      .artist-playlist__track-footer__left
        a(href="/").artist-playlist__track-like
          os-svg(name="like", width="10px", height="10px").artist-playlist__track-like_icon
          span.artist-playlist__track-like_text {{track.likes}}
        a(href="/").artist-playlist__track-share
          os-svg(name="share", width="12px", height="10px").artist-playlist__track-share_icon
          span.artist-playlist__track-like_text {{track.sheared}}
        a(href="/").artist-playlist__track-add
          os-svg(name="plus", width="10px", height="10px").artist-playlist__track-add_icon
          span.artist-playlist__track-add_text Add to playlist
      .artist-playlist__track-footer__right
        span.artist-playlist__track-popular
          os-svg(name="play", width="7px", height="10px").artist-playlist__track-popular_icon
          span.artist-playlist__track-popular_text {{track.listened}}
        a(href="/").artist-playlist__track-chart
          os-svg(name="speach", width="12px", height="10px").artist-playlist__track-chart_icon
          span.artist-playlist__track-chart_text {{track.talked}}
  os-audio-player(:audioActive="audioActive")
</template>

<script>

import OsSvg from '@/components/elements/os-svg'
import OsAudioPlayer from '@/components/os-audio-player/os-audio-player.vue'

const convertTimeHHMMSS = (val) => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
  return (hhmmss.indexOf('00:') === 0) ? hhmmss.substr(3) : hhmmss
}

export default {
  name: 'OsArtistPlaylist',

  components: {
    OsSvg,
    OsAudioPlayer
  },

  data () {
    return {
      playlistTracks: [
        {
          songName: 'Song name',
          likes: 55,
          sheared: 55,
          listened: 1043,
          talked: 3,
          time: '05:00',
          added: '3 months',
          show: true,
          filePath: '/audio/mozgi_policai.mp3'
        },
        {
          songName: 'Song name',
          likes: 60,
          sheared: 40,
          listened: 1043,
          talked: 3,
          time: '05:00',
          added: '3 months',
          show: true,
          filePath: '/audio/linkin_park_victimized.mp3'
        },
        {
          songName: 'Song name',
          likes: 20,
          sheared: 100,
          listened: 1043,
          talked: 0,
          time: '05:00',
          added: '3 months',
          show: true,
          filePath: '/audio/placebo_every_you_every_me.mp3'
        },
        {
          songName: 'Song name',
          likes: 55,
          sheared: 55,
          listened: 1043,
          talked: 999,
          time: '05:00',
          added: '3 months',
          show: true,
          filePath: '/audio/5sec.mp3'
        }
      ],

      audioActive: false,

      current: {
        song: '',
        index: '',
        delay: '',
        timeoutId: '',
        played: false
      },

      prev: {
        song: '',
        index: ''
      }

    }
  },

  computed: {
    duration: function () {
      return this.audio ? convertTimeHHMMSS(this.totalDuration) : 'I am'
    }
  },

  methods: {
    play: function (file, index) {
      if (!this.audioActive) {
        this.audioActive = !this.audioActive
      }

      this.prev.song = this.current.song
      this.current.song = ''

      this.prev.index = this.current.index
      this.current.index = ''

      this.current.song = this.$refs.audio[index]

      this.current.index = index

      var music = this.current.song
      if (music.paused) {
        if (this.prev.song && this.prev.song !== this.current.song) {
          var prevMusic = this.prev.song
          prevMusic.pause()
          prevMusic.currentTime = 0

          this.playlistTracks[this.prev.index].show = true
        }

        if (this.current.played) {
          this.current.delay = 1000 * music.duration
          this.current.played = false
        } else {
          this.current.delay = 1000 * (music.duration - music.currentTime)
        }

        var me = this.playlistTracks[index]
        this.current.timeoutId = setTimeout((index) => {
          me.show = true
          this.current.played = true
        }, this.current.delay)

        music.play()
      } else {
        music.pause()
        clearTimeout(this.current.timeoutId)
      }
    },

    currentTime: function () {
      return this.$refs.audio
    }
  }
}
</script>
<style src="./os-artist-playlist.scss" lang="scss"></style>
