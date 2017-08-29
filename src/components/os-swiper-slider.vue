<template lang="pug">
  swiper.artist-slider(:options='swiperOptions' ref="mySwiper")
    .artist-slider__pagin
      span.artist-slider__prev
        os-svg(name="arrowLeft", width="12px", height="10px").artist-slider__prev-icon
      span.artist-slider__line
      span.artist-slider__next
        os-svg(name="arrowRight", width="12px", height="10px").artist-slider__next-icon
    slot(name="slider-content")
</template>

<script>
import OsSvg from '@/components/elements/os-svg'
import VueAwesomeSwiper from 'vue-awesome-swiper'

export default {
  name: 'OsSwiperSlider',
  props: ['swiperOptions'],

  components: {
    OsSvg,
    VueAwesomeSwiper
  },

  data () {
    return {

    }
  }
}
</script>
<style lang="scss">

</style>
