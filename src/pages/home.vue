<template lang="pug">

  .container
    main.main
      .page-wrapper.page-wrapper--grey
        aside.aside-left
          router-link.page-home__info(:to="`/${user.role}/me`")
            os-profile-avatar.page-home__avatar(:path="user.avatar_image")
            span.page-home__profile-name {{user.name}}
          .border-top
          .page-home__messager
            os-svg(name="message", width="15px", height="14px")
            span Open messager
          .aside-adv
            img.img(src="../assets/img/sidebar-banner-01.jpg")
          .aside-adv
            img.img(src="../assets/img/sidebar-banner-02.jpg")
        os-board(v-on:show-image='openModal')
        aside.aside-right.aside-right--home
          os-profile-stats
          .page-home__events.bgc-white
            .page-home__events-header
              os-svg(name="calendar", width="15px", height="16px").page-home__events-icon
              .page-home__events-text 5 events invitations
            .border-top.border-top--20
            os-artist-events(:author="user")

      os-modal.modal-gallery(
      modal-title="Gallery"
      v-if="showModalGallery"
      @close="showModalGallery = false"
      no-header)
        .modal__body(slot="body")
          os-profile-gallery.modal__gallery(@close="showModalGallery = false", :numOpen="pictureNumber", :galleryPhotos="photos", :author="author" )
      os-audio-player(:audioActive="showPlayer")
</template>

<script>

import OsHeader from '@/components/sections/os-header.vue'
import OsSvg from '@/components/elements/os-svg'
import OsProfileStats from '@/components/sections/os-profile-stats/os-profile-stats'
import OsArtistEvents from '@/components/artist/os-artist-events/os-artist-events'
import OsProfileAvatar from '@/components/elements/os-profile-avatar.vue'
import OsAudioTrack from '@/components/os-audio-track/os-audio-track.vue'
import OsModal from '@/components/os-modal/os-modal.vue'
import OsProfileGallery from '@/components/sections/os-profile-gallery/os-profile-gallery'
import { mapState } from 'vuex'
import OsAudioPlayer from '@/components/os-audio-player/os-audio-player.vue'
import OsBoard from '@/components/os-board/os-board.vue'

export default {

  components: {
    OsHeader,
    OsSvg,
    OsProfileStats,
    OsArtistEvents,
    OsProfileAvatar,
    OsAudioTrack,
    OsModal,
    OsProfileGallery,
    OsAudioPlayer,
    OsBoard
  },

  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    openModal: function (data) {
      this.showModalGallery = data.showModalGallery
      this.pictureNumber = data.pictureNumber
      this.photos = data.galleryPhotos
      this.author = data.author // Temp param, need to be taken from state
    }
  },
  data () {
    return {
      showModalGallery: false,
      pictureNumber: '',
      showPlayer: false,
      photos: [],
      track: {
        songName: 'Song name',
        likes: 60,
        shared: 40,
        listened: 1043,
        talked: 3,
        time: '05:00',
        added: '3 months',
        playing: false,
        filePath: '/audio/linkin_park_victimized.mp3',
        timeoutId: '',
        delay: ''
      },

      posts: []
     /* events: [
        {
          name: 'ffesfe',
          location: '6801 Hollywood Blvd #433, Los Angeles, CA 90028, USA',
          date: '18.10.2017',
          time: '12.05',
          tags: ['tag'],
          description: 'fesfe',
          price: '50',
          errors: false,
          id: new Date().getTime(),
          poster: 'http://carpentercollective.com/wp-content/uploads/2013/12/JackJohnson02_tadcarpenter1.jpg' // '../../assets/img/event-banner.jpg'
        }
      ] // temp! Events are subclass of posts */

    }
  }
}

</script>

<style lang="scss">

  @import "../assets/vars";

  .modal-gallery{

    .modal__container {
      width: 1170px;
    }
  }

</style>
