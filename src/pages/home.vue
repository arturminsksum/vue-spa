<template lang="pug">

  .container
    main.main
      .page-wrapper.page-wrapper--grey
        aside.aside-left
          router-link.page-home__info(:to="{ name: 'user', params: { id: 'me' }}")
            os-profile-avatar.page-home__avatar(:path="user.avatar_image")
            span.page-home__profile-name {{user.name}}
          .border-top
          .page-home__messager
            os-svg(name="message", width="15px", height="14px")
            span Open messager
        os-board
        aside.aside-right.aside-right--home
          os-profile-stats
          .page-home__events.bgc-white
            .page-home__events-header
              os-svg(name="calendar", width="15px", height="16px").page-home__events-icon
              .page-home__events-text 5 events invitations
            .border-top.border-top--20
            os-artist-events

      os-modal.modal-gallery(
      modal-title="Gallery"
      v-if="showModalGallery"
      no-header)
        .modal__body(slot="body")
          os-profile-gallery.modal__gallery(v-on:show-image='openModal' @close="showModalGallery = false", :numOpen="pictureNumber", :galleryPhotos="photos" )
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
      console.log(111111)
      this.showModalGallery = data.showModalGallery
      this.pictureNumber = data.pictureNumber
      this.photos = data.galleryPhotos
    }
  },
  data () {
    return {
      showModalGallery: false,
      pictureNumber: '',
      showPlayer: false,
      photos: []
/*
      photos: [
        {
          poster: 'gallery-04.jpg',
          artist: {
            avatar: 'avatar-1.png',
            name: 'Artist Name',
            data: '11.01.18'
          },
          managers: [
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            },
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            }
          ]
        },
        {
          poster: 'gallery-02.jpg',
          artist: {
            avatar: 'avatar-1.png',
            name: 'Artist Name',
            data: '11.01.18'
          },
          managers: [
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            },
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            }
          ]
        },
        {
          poster: 'gallery-03.jpg',
          artist: {
            avatar: 'avatar-1.png',
            name: 'Artist Name',
            data: '11.01.18'
          },
          managers: [
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            }
          ]
        },
        {
          poster: 'gallery-01.jpg',
          artist: {
            avatar: 'avatar-1.png',
            name: 'Artist Name',
            data: '11.01.18'
          },
          managers: [
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            },
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            }
          ]
        },
        {
          poster: 'gallery-05.jpg',
          artist: {
            avatar: 'avatar-1.png',
            name: 'Artist Name',
            data: '11.01.18'
          },
          managers: [
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            },
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            },
            {
              avatar: 'avatar-1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
              author: 'Maneger Name',
              date: '11.01.17'
            }
          ]
        }
      ] */
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
