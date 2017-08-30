<template lang="pug">

  .container
    main.main
      .page-wrapper.page-wrapper--grey
        aside.aside-left
          .page-home__info
            os-profile-avatar.page-home__avatar
            a(href="").page-home__profile-name Profile Name
          .border-top
          .page-home__messager
            os-svg(name="message", width="15px", height="14px")
            span Open messager

        .page-content.page-content--home
          .post-create.bgc-white
            .post-create__header
              .post-create__tabs
                .post-create__tab.post-create__tab--active
                  os-svg(name="edit", width="14px", height="14px")
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
              .btn.btn--post.btn--green-invert Post
          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                .post-single__avatar
                .post-single__user Major Lazer
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
              .post-single__footer-right


        aside.aside-right.aside-right--home
          os-profile-stats
          .page-home__events.bgc-white
            .page-home__events-header
              os-svg(name="calendar", width="15px", height="16px").page-home__events-icon
              .page-home__events-text 5 events invitations
            .border-top.border-top--20
            os-artist-events

</template>

<script>

import OsHeader from '@/components/sections/os-header.vue'
import OsProfileStats from '@/components/sections/os-profile-stats/os-profile-stats'
import OsArtistEvents from '@/components/artist/os-artist-events/os-artist-events'

import OsSvg from '@/components/elements/os-svg'

import OsProfileAvatar from '@/components/elements/os-profile-avatar.vue'
import JwtDecode from 'jwt-decode'

export default {

  components: {
    OsHeader,
    OsSvg,
    OsProfileStats,
    OsArtistEvents,
    OsProfileAvatar
  },

  data () {
    return {
    }
  },

  methods: {
  },

  mounted () {
    const token = sessionStorage.getItem('token')

    if (!token) {
      this.$router.replace({path: '/'})
    } else {
      this.$store.dispatch('setUser', {user: JwtDecode(token)})
    }
  }
}

</script>

<style lang="scss">

  @import "../assets/vars";

  .page-home {

    &__events {
      margin-top: 20px;

      &-header {
        padding: 15px 20px 10px 20px;
        text-transform: uppercase;
        display: flex;
        font-size: 12px;
        line-height: 18px;
        color: $green-dark;
      }

      &-icon {
        margin-right: 10px;
        fill: $green-dark;
      }

    }

  }


</style>
