<template lang="pug">

  os-tabs.artist-tabs
    os-tabs-item(name='Tracks', iconName="diagram", :selected='true')
      os-artist-playlist
    os-tabs-item(name='Video', iconName="video")
      os-swiper-slider(:swiperOptions="swiperOption")
        .swiper-wrapper(slot="slider-content")
          .swiper-slide(v-for="n in 5")
            .swiper-slide__cover
              a(href="/").swiper-slide__cover-button
                os-svg(name="playVideo", width="36px", height="36px").swiper-slide__cover-icon
              p.swiper-slide__cover-text Major Lazer & DJ SnakerAss
    os-tabs-item(name='Photo', iconName="photo")
      os-swiper-slider(:swiperOptions="swiperOption")
        .swiper-wrapper(slot="slider-content")
          .swiper-slide(v-for="n in amountPhoto" @click="showPhoto(n)", :key="n")
            .swiper-slide__img
    os-tabs-item(name='Events', iconName="calendar")
      .events-list.row
        a(href="/" v-for="n in 6" key="index").events-list__item.four.columns
          .events-list__img
            img.img(src="~assets/img/event-list-item.jpg")
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
    os-modal.modal-gallery(
      modal-title="Gallery"
      v-if="showModalGallery"
      no-header)
      .modal__body(slot="body")
        os-profile-gallery.modal__gallery(@close="showModalGallery = false", :num-open="openedPhoto")
</template>

<script>
import OsTabs from '@/components/os-tabs/os-tabs'
import OsTabsItem from '@/components/os-tabs/os-tabs-item'
import OsProfileGallery from '@/components/sections/os-profile-gallery/os-profile-gallery'
import OsSwiperSlider from '@/components/os-swiper-slider'
import OsSvg from '@/components/elements/os-svg'
import OsArtistPlaylist from '@/components/artist/os-artist-playlist/os-artist-playlist'
import OsModal from '@/components/os-modal/os-modal.vue'

export default {
  name: 'OsArtistTabs',

  components: {
    OsSwiperSlider,
    OsSvg,
    OsTabs,
    OsTabsItem,
    OsArtistPlaylist,
    OsProfileGallery,
    OsModal
  },

  data () {
    return {
      tabActive: 'video',
      openedPhoto: '',
      amountPhoto: 4,
      showModalGallery: false,

      swiperOption: {
        // autoplay: 5000,
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
        nextButton: '.artist-slider__next',
        prevButton: '.artist-slider__prev',
        paginationClickable: true,
        paginationElement: 'li'
      }
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
