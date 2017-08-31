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
              button.btn.btn--green-invert.btn--border-thin.btn--30-invert Post
          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                a(href="").post-single__avatar
                a(href="").post-single__user Major Lazer
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
                a(href="/").track-like
                  os-svg(name="like", width="10px", height="10px").track-like_icon
                  span.track-like_text 55
                a(href="/").track-share
                  os-svg(name="share", width="12px", height="10px").track-share_icon
                  span.track-like_text 55
              .post-single__footer-right
                a(href="/").track-chart
                  os-svg(name="speach", width="12px", height="10px").track-chart_icon
                  span.track-chart_text 0

          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                a(href="").post-single__avatar
                a(href="").post-single__user Major Lazer
              .post-single__header-block
                .post-single__date 3 hour ago
                .post-single__drop
                  .toggler
                    .toggler__dot
                    .toggler__dot
                    .toggler__dot
            .post-single__body
              os-audio-track(:track="track")
            .post-single__footer
              .post-single__footer-left
              .post-single__footer-right

          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                a(href="").post-single__avatar
                a(href="").post-single__user Major Lazer
              .post-single__header-block
                .post-single__date 3 hour ago
                .post-single__drop
                  .toggler
                    .toggler__dot
                    .toggler__dot
                    .toggler__dot
            .post-single__body
              .post-single__video
                .video
                  iframe(width='854', height='480', src='https://www.youtube.com/embed/sdQqgVzex_w', frameborder='0', allowfullscreen='')
                  .bg-cover
                    os-svg(name="playVideo", width="60px", height="60px").video__icon
            .post-single__footer
              .post-single__footer-left
                a(href="/").track-like
                  os-svg(name="like", width="10px", height="10px").track-like_icon
                  span.track-like_text 55
                a(href="/").track-share
                  os-svg(name="share", width="12px", height="10px").track-share_icon
                  span.track-like_text 55
              .post-single__footer-right
                a(href="/").track-chart
                  os-svg(name="speach", width="12px", height="10px").track-chart_icon
                  span.track-chart_text 0

          .post-single.bgc-white
            .post-single__header
              .post-single__header-block
                a(href="").post-single__avatar
                a(href="").post-single__user Major Lazer
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
              .post-single__photo
                img(src="../assets/img/post-img.jpg").img
              .post-single__gallery
                .post-single__gallery-item
                  img(src="../assets/img/post-img.jpg").img
                .post-single__gallery-item
                  img(src="../assets/img/post-img.jpg").img
                .post-single__gallery-item
                  img(src="../assets/img/post-img.jpg").img
                  .bg-cover
                    .post-single__gallery-count +9
            .post-single__footer
              .post-single__footer-left
                a(href="/").track-like
                  os-svg(name="like", width="10px", height="10px").track-like_icon
                  span.track-like_text 55
                a(href="/").track-share
                  os-svg(name="share", width="12px", height="10px").track-share_icon
                  span.track-like_text 55
              .post-single__footer-right
                a(href="/").track-chart
                  os-svg(name="speach", width="12px", height="10px").track-chart_icon
                  span.track-chart_text 0
              os-audio-track(:track="track")
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
        os-audio-player
</template>

<script>

import OsHeader from '@/components/sections/os-header.vue'
import OsSvg from '@/components/elements/os-svg'
import OsProfileStats from '@/components/sections/os-profile-stats/os-profile-stats'
import OsArtistEvents from '@/components/artist/os-artist-events/os-artist-events'
import OsProfileAvatar from '@/components/elements/os-profile-avatar.vue'
import OsAudioTrack from '@/components/os-audio-track/os-audio-track.vue'
import OsAudioPlayer from '@/components/os-audio-player/os-audio-player.vue'

export default {

  components: {
    OsHeader,
    OsSvg,
    OsProfileStats,
    OsArtistEvents,
    OsProfileAvatar,
    OsAudioTrack,
    OsAudioPlayer
  },

  data () {
    return {
      track: {
        songName: 'Song name',
        likes: 60,
        sheared: 40,
        listened: 1043,
        talked: 3,
        time: '05:00',
        added: '3 months',
        show: true,
        filePath: '/audio/linkin_park_victimized.mp3'
      }
    }
  },

  methods: {
  }
}

</script>

<style lang="scss">

  @import "../assets/vars";


</style>
