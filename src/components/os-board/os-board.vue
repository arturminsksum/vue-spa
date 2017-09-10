<template lang="pug">
  .page-content.page-content--home
    os-post-create
    div(v-for='post in posts', :key="post.id")
      os-post(:post='post')
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
    ...mapState([
      'events'
    ])
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
      },

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
      ],

      posts: [
        {
          author: {
            name: 'Club',
            id: 156484878
          },
          type: 'event',
          location: '6801 Hollywood Blvd #433, Los Angeles, CA 90028, USA',
          date: '18.10.2017',
          time: '12.05',
          tags: ['tag'],
          description: 'fesfe',
          price: '50',
          errors: false,
          id: new Date().getTime(),
          poster: 'http://carpentercollective.com/wp-content/uploads/2013/12/JackJohnson02_tadcarpenter1.jpg' // '../../assets/img/event-banner.jpg'
        },
        {
          type: 'news',
          author: {
            name: '1111',
            surname: '',
            id: 12318968745
          },
          description: 'feshyyfe',
          video: {
            thumbnail: '',
            source: 'https://www.youtube.com/embed/sdQqgVzex_w'
          }
        },
        {
          type: 'news',
          author: {
            name: '22222',
            surname: '',
            id: 123184968745
          },
          description: 'grsfe',
          tracks: [
            {
              songName: 'Song name',
              likes: 55,
              shared: 55,
              listened: 1043,
              talked: 3,
              time: '05:00',
              added: '3 months',
              show: true,
              filePath: '/audio/linkin_park_victimized.mp3'
            }
          ]
        },
        {
          type: 'news',
          author: {
            name: '3333',
            surname: '',
            id: 123184968745
          },
          description: 'gfessfe',
          gallery: [
            {
              source: 'gallery-01.jpg'
            },
            {
              source: 'gallery-02.jpg'
            },
            {
              source: 'gallery-03.jpg'
            },
            {
              source: 'gallery-04.jpg'
            },
            {
              source: 'gallery-05.jpg'
            }
          ]
        }
      ]
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
