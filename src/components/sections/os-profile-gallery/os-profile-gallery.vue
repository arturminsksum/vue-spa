<template lang="pug">
.profile-gallery
  .profile-gallery__picture
    img(:src="require('../../../assets/img/' + photos[currentNumber].poster)").img.profile-gallery__image
    button(@click.prevent="showNext()").profile-gallery__button.profile-gallery__button--next
      os-svg(:name="arrowRight", width="20px", height="35px")
    button(@click.prevent="showPrev()").profile-gallery__button.profile-gallery__button--prev
      os-svg(:name="arrowLeft", width="20px", height="35px")
    .profile-gallery__close(@click="$emit('close')")
      os-svg(name="close", width="25px", height="25px")
  .profile-gallery__comments-place
    .profile-gallery__content
      .profile-gallery__header-modal
        .profile-gallery__avatar
          img(:src="require('../../../assets/img/' + photos[currentNumber].artist.avatar)").profile-gallery__artist-avatar
        .profile-gallery__text
          h1.profile-gallery__title {{ photos[currentNumber].artist.name }}
          time.profile-gallery__data {{ photos[currentNumber].artist.data }}
      .profile-gallery__body-modal
        ul.profile-gallery__list
          li(v-for="(manager,index) in photos[currentNumber].managers", :key="index").profile-gallery__item
            .profile-gallery__manager-avatar
              img(:src="require('../../../assets/img/' + manager.avatar)")
            .profile-gallery__comment-content
              .profile-gallery__text {{ manager.text }}
              .profile-gallery__comment-author
                .author__comment-name {{ manager.author }}
                .author__comment-data {{ manager.date }}
    .profile-gallery__footer-modal
      textarea(placeholder="Leave Comment" v-model="currentText").profile-gallery__message
      button.profile-gallery__send
        os-svg(:name="send", width="18px", height="16px")
</template>

<script>
import OsSvg from '@/components/elements/os-svg'

export default {
  name: 'OsArtistmodalap',

  components: {
    OsSvg
  },

  props: ['numOpen', 'galleryPhotos'],

  data () {
    return {
      close: 'close',
      arrowRight: 'gallery-right',
      arrowLeft: 'gallery-left',
      send: 'paper-plane',
      currentText: '',
      currentNumber: this.numOpen,
      photos: this.galleryPhotos
    }
  },
  methods: {
    // addToComments: function () {
    //   let newComment = {avatar: 'avatar-1.png', text: this.currentText, author: 'Maneger Name', date: '11.01.17'}
    //   this.currentPhoto.managers.push(newComment)
    //   this.currentText = ''
    // },
    showNext: function () {
      this.currentNumber = (this.currentNumber === this.photos.length - 1) ? 0 : ++this.currentNumber
      this.currentPhoto = this.photos[this.currentNumber]
    },
    showPrev: function () {
      this.currentNumber = (this.currentNumber === 0) ? (this.photos.length - 1) : --this.currentNumber
      this.currentPhoto = this.photos[this.currentNumber]
    }
  }
}
</script>
<style scoped src="./os-profile-gallery.scss" lang="scss"></style>
