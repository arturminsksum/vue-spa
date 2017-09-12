<template lang="pug">
  .page-content.page-content--home
    os-post-create
    div(v-for='post in posts', :key="post.id")
      os-post(:post='post', v-on:show-image='openModal')
</template>

<script>
import OsSvg from '@/components/elements/os-svg'
import OsPost from '@/components/os-post/os-post.vue'
import OsPostCreate from '@/components/os-post/os-post-create.vue'
import OsAudioTrack from '@/components/os-audio-track/os-audio-track.vue'
import OsAudioPlayer from '@/components/os-audio-player/os-audio-player.vue'
import OsProfileGallery from '@/components/sections/os-profile-gallery/os-profile-gallery'
import { mapState } from 'vuex'

export default {
  name: 'OsBoard',
  components: {
    OsSvg,
    OsAudioTrack,
    OsPost,
    OsPostCreate,
    OsAudioPlayer,
    OsProfileGallery
  },
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    openModal: function (data) {
      this.$emit('show-image', data)
    }
  },
  data () {
    return {
      showModalGallery: false,
      pictureNumber: '',
      showPlayer: false,

      track: {
        songName: 'Song name',
        likes: 60,
        sheared: 40,
        listened: 1043,
        talked: 3,
        time: '05:00',
        added: '3 months',
        playing: false,
        filePath: '/audio/linkin_park_victimized.mp3',
        timeoutId: '',
        delay: ''
      }

      // posts: [
      //   {
      //     author: {
      //       name: 'Club',
      //       id: 156484878,
      //       publishDate: 1505161842421,
      //       avatar: 'artist-avatar-01.jpg' // take it from state when it will be ready
      //     },
      //     type: 'event',
      //     location: '6801 Hollywood Blvd #433, Los Angeles, CA 90028, USA',
      //     date: '18.10.2017',
      //     time: '12.05',
      //     tags: ['tag'],
      //     description: 'fesfe',
      //     price: '50',
      //     errors: false,
      //     id: new Date().getTime(),
      //     poster: 'http://carpentercollective.com/wp-content/uploads/2013/12/JackJohnson02_tadcarpenter1.jpg' // '../../assets/img/event-banner.jpg'
      //   },
      //   {
      //     type: 'news',
      //     author: {
      //       name: '1111',
      //       surname: '',
      //       id: 12318968745,
      //       publishDate: 1505161842421,
      //       avatar: 'artist-avatar-01.jpg' // take it from state when it will be ready
      //     },
      //     description: 'feshyyfe',
      //     video: {
      //       thumbnail: '',
      //       source: 'https://www.youtube.com/embed/sdQqgVzex_w'
      //     }
      //   },
      //   {
      //     type: 'news',
      //     author: {
      //       name: '22222',
      //       surname: '',
      //       id: 123184968745,
      //       publishDate: 1505161842421,
      //       avatar: 'artist-avatar-01.jpg' // take it from state when it will be ready
      //     },
      //     description: 'grsfe',
      //     tracks: [
      //       {
      //         songName: 'Song name',
      //         likes: 55,
      //         shared: 55,
      //         listened: 1043,
      //         talked: 3,
      //         time: '05:00',
      //         added: '3 months',
      //         show: true,
      //         filePath: '/audio/linkin_park_victimized.mp3'
      //       }
      //     ]
      //   },
      //   {
      //     type: 'news',
      //     author: {
      //       name: '3333',
      //       surname: '',
      //       id: 1505161842421,
      //       publishDate: 1505161842421,
      //       avatar: 'artist-avatar-01.jpg' // take it from state when it will be ready
      //     },
      //     description: 'gfessfe',
      //     gallery: [
      //       {
      //         source: 'gallery-01.jpg',
      //         comments: [
      //           {
      //             author: {
      //               name: 'Fefsgsr',
      //               avatar: 'artist-avatar-02.jpg'
      //             },
      //             publishDate: 1505161842421,
      //             text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
      //           }
      //         ]
      //       },
      //       {
      //         source: 'gallery-02.jpg',
      //         comments: [
      //           {
      //             author: {
      //               name: 'Fefsgsr',
      //               avatar: 'artist-avatar-02.jpg'
      //             },
      //             publishDate: 1505161842421,
      //             text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
      //           }
      //         ]
      //       },
      //       {
      //         source: 'gallery-03.jpg',
      //         comments: [
      //           {
      //             author: {
      //               name: 'Fefsgsr',
      //               avatar: 'artist-avatar-02.jpg'
      //             },
      //             publishDate: 1505161842421,
      //             text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
      //           }
      //         ]
      //       },
      //       {
      //         source: 'gallery-04.jpg',
      //         comments: [
      //           {
      //             author: {
      //               name: 'Fefsgsr',
      //               avatar: 'artist-avatar-02.jpg'
      //             },
      //             publishDate: 1505161842421,
      //             text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
      //           }
      //         ]
      //       },
      //       {
      //         source: 'gallery-05.jpg',
      //         comments: [
      //           {
      //             author: {
      //               name: 'Fefsgsr',
      //               avatar: 'artist-avatar-02.jpg',
      //               publishDate: 1505161842421,
      //               text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
      //             }
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ]
    }
  }
}
</script>
