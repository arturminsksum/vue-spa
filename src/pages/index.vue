<template lang="pug">
  main.main
    .main-banner
      .container
        p.main-banner__slogan The Best music menagment tool
        .main-banner__onstage
          img(src="../assets/img/onstage.jpg")
        p.main-banner__text
          | We will help you to contact the manager, the group, the musician, the singer, the club and organize everything you need.
          br
          | With the help of us you can organize your performances on a professional level.
          br
          | Find ways to promote your music with live performances.
        .main-banner__button
          router-link.btn.btn--40.btn--dark-blue(:to="{name: 'signup'}")
            os-svg(name="start")
            span Start now
    .section.section--grey
      .container
        h2.section__title
          span Tell us who you are
        os-main-feature

    .section
      .container
        h2.section__title
          span How it works
        os-main-describe

    .section.section--grey
      .container
        h2.section__title
          span Top events
        .main-adv.row
          .main-adv__item.six.columns
            router-link.main-adv__banner(:to="{name:'events'}")
              img.img(src="../assets/img/main-advert-01.jpg")
          .main-adv__item.six.columns
            router-link.main-adv__banner(:to="{name:'events'}")
              img.img(src="../assets/img/main-advert-02.jpg")
            router-link.main-adv__banner(:to="{name:'events'}")
              img.img(src="../assets/img/main-advert-03.jpg")


    .section
      .container
        h2.section__title
          span Success stories
        .section__quote
          os-svg(name="quote", width="68px", height="55px")
        os-main-slider

</template>

<script>

import OsSvg from '@/components/elements/os-svg'
import OsMainFeature from '@/components/main/os-main-feature/os-main-feature'
import OsMainDescribe from '@/components/main/os-main-describe/os-main-describe'
import OsMainSlider from '@/components/main/os-main-slider/os-main-slider'

export default {

  name: 'Index',

  components: {
    OsSvg,
    OsMainFeature,
    OsMainDescribe,
    OsMainSlider
  }

}

</script>

<style lang="scss">

  @import "../assets/vars";

  .main {
    margin-top: 0;
    margin-bottom: 0;
  }

  .main-banner {
    text-align: center;
    padding: 30px 0;

    &__slogan {
      color: $darkest;
      font-size: 20px;
      font-weight: bold;
      line-height: 0.9;
      margin: 0 -10px 15px;
    }

    &__onstage {
      margin-bottom: 20px;
      img {
        @include img;
      }
    }

    &__text {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    &__button {
      font-family: Ubuntu;
      font-weight: 700;

      .svg {
        margin-bottom: -3px;
        margin-right: 10px;
        width: 14px;
        height: 16px;

        @include tablet {
          width: 18px;
          height: 21px;
        }
      }
    }

    @include tablet {
      padding: 60px 0;

      &__slogan {
        font-size: 40px;
        margin-bottom: 40px;
      }

      &__onstage {
        margin-bottom: 40px;
      }

      &__text {
        font-size: 18px;
        line-height: 1.7;
        margin-bottom: 40px;
      }

      &__button {
        font-size: 17px;

        img {
          margin-bottom: -5px;
          margin-right: 15px;
          width: auto;
        }
      }
    }
  }

  .main-adv {
    &__banner {
      border-radius: 15px;
      display: inline-block;
      overflow: hidden;

      & + & {
        margin-top: 16px;
      }
    }
  }

  .section__quote {
    margin-bottom: 20px;
    text-align: center;
  }
</style>
