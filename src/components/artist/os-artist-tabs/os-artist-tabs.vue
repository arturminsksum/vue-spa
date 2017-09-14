<template lang="pug">

  os-tabs.artist-tabs
    os-tabs-item(name='Tracks', iconName="diagram", :selected='true')
      .artist-tabs__track(v-for="(song, index) in playlistTracks", :key="index")
        os-audio-track(:track="song", :current="currentTrack", @currentWasReset="currentTrack = $event")
    os-tabs-item(name='Video', iconName="video")
      os-swiper-slider(is-video)
    os-tabs-item(name='Photo', iconName="photo")
      os-swiper-slider(is-photo)
    os-tabs-item(name='Events', iconName="calendar")
      .events-list.row
        router-link(to="" v-for="n in 6" key="index").events-list__item.four.columns
          .events-list__img
            img.img(src="../../../assets/img/event-list-item.jpg")
          .events-list__info
            .events-list__name Super Gradient Event
            .events-list__row
              .events-list__date 14/06
              .events-list__place
                os-svg(name="marker", width="9px", height="14px").events-list__place-marker
                span.events-list__place-name Toronto, USA
      ul.pagin
        li.pagin__item(v-for="(text, index) in ['<<','<','1','2','3','4','>','>>']", key="index")
          span.pagin__text {{text}}
    os-audio-player(:audioActive="currentTrack.playing")
</template>

<script>
import OsTabs from '@/components/os-tabs/os-tabs'
import OsTabsItem from '@/components/os-tabs/os-tabs-item'
import OsSwiperSlider from '@/components/os-swiper-slider'
import OsSvg from '@/components/elements/os-svg'
import OsAudioTrack from '@/components/os-audio-track/os-audio-track.vue'
import OsModal from '@/components/os-modal/os-modal.vue'
import OsAudioPlayer from '@/components/os-audio-player/os-audio-player.vue'

export default {
  name: 'OsArtistTabs',

  components: {
    OsSwiperSlider,
    OsSvg,
    OsTabs,
    OsTabsItem,
    OsAudioTrack,
    OsModal,
    OsAudioPlayer
  },

  data () {
    return {
      tabActive: 'video',
      openedPhoto: '',
      showModalGallery: false,
      showPlayer: false,
      currentTrack:
      {
        playing: false
      },
      playlistTracks: [
        {
          songName: 'Song 1',
          likes: 55,
          shared: 55,
          listened: 1043,
          talked: 3,
          time: '05:00',
          added: '3 months',
          playing: false,
          filePath: '/audio/linkin_park_victimized.mp3'
        },
        {
          songName: 'Song 2',
          likes: 60,
          shared: 40,
          listened: 1043,
          talked: 3,
          time: '05:00',
          added: '3 months',
          playing: false,
          filePath: '/audio/placebo_every_you_every_me.mp3'
        },
        {
          songName: 'Song 3',
          likes: 20,
          shared: 100,
          listened: 1043,
          talked: 0,
          time: '05:00',
          added: '3 months',
          playing: false,
          filePath: '/audio/placebo_i_know.mp3'
        },
        {
          songName: 'Song 4',
          likes: 55,
          shared: 55,
          listened: 1043,
          talked: 999,
          time: '05:00',
          added: '3 months',
          playing: false,
          filePath: '/audio/linkin_park_victimized.mp3'
        }
      ]
    }
  },

  methods: {
    stopAllTracks () {
      this.playlistTracks.forEach(track => {
        track.playing = false
      })
    }
  }
}
</script>
<style src="./os-artist-tabs.scss" lang="scss"></style>
