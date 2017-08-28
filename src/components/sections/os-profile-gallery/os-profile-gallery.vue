<template lang="pug">
.profile-gallery
  .profile-gallery__picture
    img(:src="require('~assets/img/' + currentPhoto.poster)").img.profile-gallery__image
    a(href="#", @click="showNext()").profile-gallery__button.profile-gallery__button--next
      os-svg(:name="arrowRight", width="20px", height="35px")
    a(href="#", @click="showPrev()").profile-gallery__button.profile-gallery__button--prev
      os-svg(:name="arrowLeft", width="20px", height="35px")
    .profile-gallery__close(@click="$emit('close')")
      os-svg(name="close", width="25px", height="25px")
  .profile-gallery__comments-place
    .profile-gallery__content
      .profile-gallery__header-modal
        .profile-gallery__avatar
          img(:src="require('~assets/img/' + currentPhoto.artist.avatar)").profile-gallery__artist-avatar
        .profile-gallery__text
          h1.profile-gallery__title {{ currentPhoto.artist.name }}
          time.profile-gallery__data {{ currentPhoto.artist.data }}
      .profile-gallery__body-modal
        ul.profile-gallery__list
          li(v-for="manager in currentPhoto.managers", :key="manager").profile-gallery__item
            .profile-gallery__manager-avatar
              img(:src="require('~assets/img/' + manager.avatar)")
            .profile-gallery__comment-content
              .profile-gallery__text {{ manager.text }}
              .profile-gallery__comment-author
                .author__comment-name {{ manager.author }}
                .author__comment-data {{ manager.date }}
    .profile-gallery__footer-modal
      textarea(placeholder="Leave Comment" v-model="currentText").profile-gallery__message
      button(@click="addToComments()").profile-gallery__send
        os-svg(:name="send", width="18px", height="16px")
</template>

<script>
import OsSvg from '~components/elements/os-svg'

export default {
  name: 'OsArtistmodalap',

  components: {
    OsSvg
  },

  props: ['numOpen'],

  data () {
    return {
      close: 'close',
      arrowRight: 'gallery-right',
      arrowLeft: 'gallery-left',
      send: 'paper-plane',
      currentText: '',

      currentPhoto: {
        poster: 'hinemachinem.jpg',
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

      photos: [
        {
          poster: 'hinemachinem.jpg',
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
          poster: 'hinemachinem.jpg',
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
        },
        {
          poster: 'hinemachinem.jpg',
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
          poster: 'hinemachinem.jpg',
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
          poster: 'hinemachinem.jpg',
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
      ]
    }
  },
  methods: {
    addToComments: function () {
      let newComment = {avatar: 'avatar-1.png', text: this.currentText, author: 'Maneger Name', date: '11.01.17'}
      this.currentPhoto.managers.push(newComment)
      console.log(newComment)
      this.currentText = ''
    },
    showNext: function () {
      this.numOpen = (this.numOpen === this.photos.length - 1) ? 0 : ++this.numOpen
      this.currentPhoto = this.photos[this.numOpen]
      console.log(this.numOpen)
    },
    showPrev: function () {
      this.numOpen = (this.numOpen === 0) ? (this.photos.length - 1) : --this.numOpen
      this.currentPhoto = this.photos[this.numOpen]
      console.log(this.numOpen)
    }
  }
}
</script>
<style scoped src="./os-profile-gallery.scss" lang="scss"></style>
