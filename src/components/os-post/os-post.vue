<template lang="pug">
  .post-single.bgc-white
    .post-single__header
      .post-single__header-block
        a(href="").post-single__avatar
        a(href="").post-single__user RE:PUBLIC
      .post-single__header-block
        .post-single__date 3 hour ago
        .post-single__drop
          .toggler
            .toggler__dot
            .toggler__dot
            .toggler__dot
    .post-single__body
      .post-event
        .post-event__banner
          img.img(src="../../assets/img/event-banner.jpg")
        .post-event__info
          .post-event__row
            .post-event__head Major Lazer presents TBRG Beat
            .post-event__price
              os-svg.svg--mr.svg--green(name="ticket", width="14px", height="14px")
              span $ 50
          .post-event__place
            os-svg.svg--mr.svg--green(name="marker", width="9px", height="14px")
            span 6801 Hollywood Blvd #433, Los Angeles, CA 90028, USA
          .post-event__where
            .post-event__date
              os-svg.svg--mr.svg--green(name="calendar", width="13px", height="14px")
              span 18.10.2017
            .post-event__time
              os-svg.svg--mr.svg--green(name="clock", width="15px", height="15px")
              span 18:00
    .post-single__footer
      .post-single__footer-left
        a(href="/").track-like
          os-svg(name="like", width="10px", height="10px").track-like_icon
          span.track-like_text 55
        a(href="/").track-share
          os-svg(name="share", width="12px", height="10px").track-share_icon
          span.track-like_text 55
        a(href="/").track-add
          os-svg(name="plus", width="10px", height="10px").track-add_icon
          span.track-add_text Add to calendar
      .post-single__footer-right
        a(href="/").track-chart
          os-svg(name="speach", width="12px", height="10px").track-chart_icon
          span.track-chart_text 0

</template>

<script type="text/babel" src="./os-post.js"></script>

<style lang="scss" src="./os-post.scss"></style>

