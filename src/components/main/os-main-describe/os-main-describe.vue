<template lang="pug">
  .main-describe.row
    .main-describe__item.three.columns(v-for="describe in describes")
      .main-describe__picture
        img.main-describe__img(:src="require('../../../assets/img/' + describe.img)")
      .main-describe__info
        h3.main-describe__title {{describe.title}}
        .main-describe__divider
          .divider
        p.main-describe__text {{describe.text}}

</template>

<script>

// const DESKTOP_WIDTH = 1200
// const TABLET_WIDTH = 768

// function isDesktop () {
//   return window.innerWidth >= DESKTOP_WIDTH
// }

// function isMobile () {
//   return window.innerWidth < TABLET_WIDTH
// }

// function isTablet () {
//   return window.innerWidth >= TABLET_WIDTH && window.innerWidth < DESKTOP_WIDTH
// }

export default {

  name: 'OsMainDescribe',

  data () {
    return {
      describes: [
        { img: 'describe-find.png',
          title: 'Find',
          text: 'You can be a musician who is looking for a manager. Or you are a manager - you are always looking for new talents and fresh ideas for the show Our service will help you find each other'
        },
        { img: 'describe-organize.png',
          title: 'Organize',
          text: "It's always great to organize concerts and festivals, especially when you can quickly find artists, who will create a pleasant atmosphere and help you to have a wonderful time"
        },
        { img: 'describe-show.png',
          title: 'Show',
          text: 'You can unite people, organizing unforgettable shows, finding all the necessary people who will help you in this.'
        },
        { img: 'describe-popular.png',
          title: 'Be popular',
          text: 'Find new ways to promote your music, get the best offers, enjoy.'
        }
      ]
      // isMobile: false
    }
  }

  // mounted () {
  //   this.isMobile = isMobile()
  // }
}
</script>

<style src="./os-main-describe.scss" lang="scss"></style>
