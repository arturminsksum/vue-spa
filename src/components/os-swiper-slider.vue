<template lang="pug">
div
  .artist-slider__pagin
    span.artist-slider__prev
      os-svg(name="arrowLeft", width="12px", height="10px").artist-slider__prev-icon
    span.artist-slider__line
    span.artist-slider__next
      os-svg(name="arrowRight", width="12px", height="10px").artist-slider__next-icon
  swiper.artist-slider(:options='options' ref="mySwiper")
    swiper-slide.swiper-slide(v-if="isVideo" v-for="n in 5", :key="n" )
      .swiper-slide__cover
        a(href="/").swiper-slide__cover-button
          os-svg(name="playVideo", width="36px", height="36px").swiper-slide__cover-icon
        p.swiper-slide__cover-text Major Lazer & DJ SnakerAss
    swiper-slide.swiper-slide(v-if="isPhoto" v-for="n in 5", :key="n" @click="showPhoto(n)")
      .swiper-slide__img

</template>

<script>
import OsSvg from '@/components/elements/os-svg'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'OsSwiperSlider',

  components: {
    OsSvg,
    swiper,
    swiperSlide
  },

  props: {
    isVideo: Boolean,
    isPhoto: Boolean
  },

  data () {
    return {
      options: {
        // autoplay: 5000,
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
        nextButton: '.artist-slider__next',
        prevButton: '.artist-slider__prev'
      }
    }
  }
}
</script>
<style lang="scss">
  @import "../../node_modules/swiper/dist/css/swiper.css";
</style>
