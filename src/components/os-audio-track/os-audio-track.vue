<template lang="pug">
  .track
    audio(ref="audio", :src="require('../../assets' + track.filePath)" type="audio/mp3")
    .track-header
      .track-avatar
        os-svg(name="disc", width="40px", height="40px").track-avatar
      .track-melody
        .track-melody__manager
          .track-melody__invoce
            span.track-play
              os-svg(name="play", width="15px", height="20px", v-show="!track.playing" @click.native="trackPlay")
              os-svg(name="stop", width="15px", height="15px", v-show="track.playing" @click.native="trackStop").track-button-stop
            span.track-name {{track.songName}}
          .track-dt
            .track-date(:class="{'track-date--active': track.playing}") {{track.added}}
            .track-time(ref="time", :class="{'track-time--active': track.playing}") {{ track.time }}
        .track-melody__display
          os-svg(name="wave", width="652px", height="40px")
    .track-footer
      .track-footer__left
        router-link(to="").track-like
          os-svg(name="like", width="10px", height="10px").track-like_icon
          span.track-like_text {{track.likes}}
        router-link(to="").track-share
          os-svg(name="share", width="12px", height="10px").track-share_icon
          span.track-like_text {{track.shared}}
        router-link(to="").track-add
          os-svg(name="plus", width="10px", height="10px").track-add_icon
          span.track-add_text Add to playlist
      .track-footer__right
        span.track-popular
          os-svg(name="play", width="7px", height="10px").track-popular_icon
          span.track-popular_text {{track.listened}}
        router-link(to="").track-chart
          os-svg(name="speach", width="12px", height="10px").track-chart_icon
          span.track-chart_text {{track.talked}}


</template>

<script type="text/babel" src="./os-audio-track.js"></script>

<style lang="scss" src="./os-audio-track.scss"></style>

