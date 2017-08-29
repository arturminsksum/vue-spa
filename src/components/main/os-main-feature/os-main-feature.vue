<template lang="pug">
  .main-feature.row
    a.main-feature__item.four.columns(href="" v-for="feature in features")
      .main-feature__picture
        os-svg.main-feature__img(:name="feature.img")
      .main-feature__info
        h3.main-feature__title {{feature.title}}
          .main-feature__underline
        .main-feature__more Learn More
          span.main-feature__arrow-right

</template>

<script>

import OsSvg from '@/components/elements/os-svg'

export default {

  name: 'OsMainFeature',

  components: {
    OsSvg
  },

  data () {
    return {
      features: [
        { img: 'main-feature-01',
          title: 'Musician'
        },
        { img: 'main-feature-02',
          title: 'Manager'
        },
        { img: 'main-feature-03',
          title: 'Club'
        }
      ]
    }
  }
}
</script>

<style src="./os-main-feature.scss" lang="scss"></style>
