<template lang="pug">
  swiper.main-slider(:options='swiperOption' ref="mySwiper")
    swiper-slide.swiper-slide.main-slider__item(:key="index" v-for="banner, index in banners")
      div.main-slider__text {{banner.text}}
      div.main-slider__divider
        .divider
      div.main-slider__person {{banner.person}}
      div.main-slider__prof {{banner.prof}}
    .swiper-pagination.swiper-pagination-bullets(slot="pagination")
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

  name: 'OsMainSlider',

  components: {
    swiper,
    swiperSlide
  },

  data () {
    return {
      banners: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          person: 'Serge Gabets',
          prof: 'Musician, Super Awesome Band'
        },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          person: 'Serge Gabets',
          prof: 'Musician, Super Awesome Band'
        }
      ],
      swiperOption: {
        autoplay: 5000,
        initialSlide: 1,
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationElement: 'li'
      }
    }
  }
}

</script>

<style src="./os-main-slider.scss" lang="scss"></style>
