<template lang="pug">

  os-tabs.artist-tabs
    os-tabs-item(name='Tracks', iconName="diagram", :selected='true')
      .artist-tabs__track(v-for="(song, index) in playlistTracks", :key="index")
        os-audio-track(:track="song")
    os-tabs-item(name='Video', iconName="video")
      os-swiper-slider(is-video)
    os-tabs-item(name='Photo', iconName="photo")
      os-swiper-slider(is-photo)
    os-tabs-item(name='Events', iconName="calendar")
      .events-list.row
        a(href="/" v-for="n in 6" key="index").events-list__item.four.columns
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
          span.pagin__text {{index}}
</template>

<script>
import OsTabs from '@/components/os-tabs/os-tabs'
import OsTabsItem from '@/components/os-tabs/os-tabs-item'
import OsProfileGallery from '@/components/sections/os-profile-gallery/os-profile-gallery'
import OsSwiperSlider from '@/components/os-swiper-slider'
import OsSvg from '@/components/elements/os-svg'
import OsAudioTrack from '@/components/os-audio-track/os-audio-track.vue'
import OsModal from '@/components/os-modal/os-modal.vue'

export default {
  name: 'OsArtistTabs',

  components: {
    OsSwiperSlider,
    OsSvg,
    OsTabs,
    OsTabsItem,
    OsAudioTrack,
    OsProfileGallery,
    OsModal
  },

  data () {
    return {
      tabActive: 'video',
      openedPhoto: '',
      showModalGallery: false,
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
          filePath: '/audio/linkin_park_victimized.mp3'
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
          filePath: '/audio/placebo_every_you_every_me.mp3'
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
          filePath: '/audio/placebo_i_know.mp3'
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
          filePath: '/audio/linkin_park_victimized.mp3'
        }
      ]
    }
  },
  methods: {
    showPhoto: function (x) {
      this.openedPhoto = x - 1
      this.showModalGallery = true
      console.log(this.openedPhoto)
    }

  }
}
</script>
<style src="./os-artist-tabs.scss" lang="scss"></style>
