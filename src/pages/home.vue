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

        .page-content.page-content--home
          .post-create.bgc-white
            .post-create__header
              .post-create__tabs
                .post-create__tab.post-create__tab--active
                  os-svg.svg--green(name="edit", width="14px", height="14px")
                  span Whats new?
                .post-create__tab
                  os-svg(name="photo", width="17px", height="14px")
                  span Photo
              .post-create__drop
                .toggler
                  .toggler__dot
                  .toggler__dot
                  .toggler__dot
            .post-create__body
              textarea(placeholder="Type here" rows="1").post-create__textarea
            .post-create__footer
              button.btn.btn--green-invert.btn--border-thin.btn--30-invert Post

          os-post(v-for='event in events', :key="event.id", :event='event')

          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                router-link(to="").post-single__avatar
                router-link(to="").post-single__user Major Lazer
              .post-single__header-block
                .post-single__date 3 hour ago
                .post-single__drop
                  .toggler
                    .toggler__dot
                    .toggler__dot
                    .toggler__dot
            .post-single__body
              .post-single__news
                .post-single__news-text James Marshall "Jimi" Hendrix (born Johnny Allen Hendrix; November 27, 1942 – September 18, 1970) was an American rock guitarist, singer, and songwriter. Although his mainstream career spanned only four years, he is widely regarded as one of the most influential electric guitarists in the history of popular music, and one of the most celebrated musicians of the 20th century...
                .post-single__news-img
                  img(src="../assets/img/post-picture.jpg")
            .post-single__footer
              .post-single__footer-left
                router-link(to="").track-like
                  os-svg(name="like", width="10px", height="10px").track-like_icon
                  span.track-like_text 55
                router-link(to="").track-share
                  os-svg(name="share", width="12px", height="10px").track-share_icon
                  span.track-like_text 55
              .post-single__footer-right
                router-link(to="").track-chart
                  os-svg(name="speach", width="12px", height="10px").track-chart_icon
                  span.track-chart_text 0

          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                router-link(to="").post-single__avatar
                router-link(to="").post-single__user Major Lazer
              .post-single__header-block
                .post-single__date 3 hour ago
                .post-single__drop
                  .toggler
                    .toggler__dot
                    .toggler__dot
                    .toggler__dot
            .post-single__body
              os-audio-track(:track="track", :isPlay="track.playing", @showPlayer="showPlayer = !showPlayer")
            .post-single__footer
              .post-single__footer-left
              .post-single__footer-right

          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                router-link(to="").post-single__avatar
                router-link(to="").post-single__user Major Lazer
              .post-single__header-block
                .post-single__date 3 hour ago
                .post-single__drop
                  .toggler
                    .toggler__dot
                    .toggler__dot
                    .toggler__dot
            .post-single__body
              .post-single__video
                .video
                  //- iframe(width='854', height='480', src='https://www.youtube.com/embed/sdQqgVzex_w', frameborder='0', allowfullscreen='')
                  img(src="../assets/img/video-cover.jpg")
                  .bg-cover
                    os-svg(name="playVideo", width="60px", height="60px").video__icon
            .post-single__footer
              .post-single__footer-left
                router-link(to="").track-like
                  os-svg(name="like", width="10px", height="10px").track-like_icon
                  span.track-like_text 55
                router-link(to="").track-share
                  os-svg(name="share", width="12px", height="10px").track-share_icon
                  span.track-like_text 55
              .post-single__footer-right
                router-link(to="").track-chart
                  os-svg(name="speach", width="12px", height="10px").track-chart_icon
                  span.track-chart_text 0

          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                router-link(to="").post-single__avatar
                router-link(to="").post-single__user Major Lazer
              .post-single__header-block
                .post-single__date 3 hour ago
                .post-single__drop
                  .toggler
                    .toggler__dot
                    .toggler__dot
                    .toggler__dot
            .post-single__body(@click="openGallery")
              .post-single__photo
                img(:src="require('../assets/img/' + photos[0].poster)" ref="image").img
              .post-single__gallery
                .post-single__gallery-item(v-for="(item, index) in photos", :key="index", v-if="index != 0 && index < 4")
                  img(:src="require('../assets/img/' + photos[index].poster)" ref="image").img
                  .bg-cover(v-if="index === 3")
                    .post-single__gallery-count +{{ setIndex(index) }}
            .post-single__footer
              .post-single__footer-left
                router-link(to="").track-like
                  os-svg(name="like", width="10px", height="10px").track-like_icon
                  span.track-like_text 55
                router-link(to="").track-share
                  os-svg(name="share", width="12px", height="10px").track-share_icon
                  span.track-like_text 55
              .post-single__footer-right
                router-link(to="").track-chart
                  os-svg(name="speach", width="12px", height="10px").track-chart_icon
                  span.track-chart_text 0

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
      @close="showModalGallery = false"
      no-header)
        .modal__body(slot="body")
          os-profile-gallery.modal__gallery(@close="showModalGallery = false", :numOpen="pictureNumber", :galleryPhotos="photos" )
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
import OsPost from '@/components/os-post/os-post.vue'
import OsAudioPlayer from '@/components/os-audio-player/os-audio-player.vue'

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
    OsPost,
    OsAudioPlayer
  },

  computed: {
    ...mapState([
      'events',
      'user'
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
  },

  methods: {
    openGallery: function (event) {
      let imgs = this.$refs.image,
        self = event.target

      if (self.className === 'bg-cover' || self.className === 'post-single__gallery-count') {
        var x = imgs.length,
          i = imgs.length
      } else if (self.className === 'img') {
        while (i--) {
          if (imgs[i] === self) {
            x = i + 1
            break
          }
        }
        if (!x) {
          x = 0
        }
      } else {
        x = 0
      }
      this.pictureNumber = x
      this.showModalGallery = true
    },

    setIndex: function (arrNumber) {
      let number = arrNumber + 1,
        endNumber = this.photos.length - number
      return endNumber
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
