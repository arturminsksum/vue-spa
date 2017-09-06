<template lang="pug">
div.audio-player
  .audio-player-small(v-if="isAudioActive()")
    .audio-player-small-avatar
      os-svg(name="disc", width="23px", height="23px").audio-player-small-avatar__icon
    .audio-player-small-melody
      .audio-player-small-top
        .audio-player-small-top__controls
          button(@click="makePlay()" v-if="isPlay()").audio-player-small-top__controls-play
            os-svg(name="play", width="16px", height="16px")
          button(@click="makePlay()" v-else).audio-player-small-top__controls-stop
            os-svg(name="stop", width="16px", height="16px")
          button.audio-player-small-top__controls-prev
            os-svg(name="prev-track", width="7px", height="10px")
          button.audio-player-small-top__controls-next
            os-svg(name="next-track", width="7px", height="10px")
        p.audio-player-small-top__name Song name
        .audio-player-small-top__actions
          button.audio-player-small-top__actions-volume
            os-svg(name="volume", width="13px", height="10px")
          button.audio-player-small-top__actions-like
            os-svg(name="like", width="13px", height="10px")
          button.audio-player-small-top__actions-share
            os-svg(name="share", width="13px", height="10px")
          button(@click="togglePlayerFull()").audio-player-small-top__actions-expand
            os-svg(name="expand", width="12px", height="12px")
      .audio-player-small-bottom
        .audio-player-small-bottom__track
          span.audio-player-small-bottom__track-played
          .audio-player-small-bottom__track-currrent
  figure.audio-player-full(v-if="playerFull")
    .audio-player-full__image
      .audio-player-full__image-icon
        button(@click="togglePlayerFull()").audio-player-full__image-icon__button
          os-svg(name="to-curtail", width="14px", height="14px")
      p.audio-player-full__image-name
        span.audio-player-full__image-name__artist Artist Name
        button.audio-player-full__image-name__button
          os-svg(name="like", width="16px", height="14px")
      p.audio-player-full__image-song Playing Song
      .audio-player-full__image-track
        span.audio-player-full__image-track__played
        .audio-player-full__image-track__currrent
      .audio-player-full__image-time
        time.audio-player-full__image-time__current 00:00
        time.audio-player-full__image-time__full 01:50
    figcaption.audio-player-full__controll
      .audio-player-full__controll-buttons
        button(v-for="fuature in controlPlayer" key="index").audio-player-full__controll-button
          os-svg(:name="fuature.icon").audio-player-full__controll-button__icon
      ul.audio-player-full__controll-list
        li.audio-player-full__controll-list__track(v-for="song in playedList" key="index")
          button.audio-player-full__controll-list__track-button
            os-svg(name="playVideo").audio-player-full__controll-button__icon
          .audio-player-full__controll-list__track-info
            p.audio-player-full__controll-list__track-info__song {{song.song}}
            p.audio-player-full__controll-list__track-info__name {{song.artist}}
          .audio-player-full__controll-list__track-duration {{song.duration}}


</template>

<script type="text/babel" src="./os-audio-player.js"></script>

<style lang="scss" src="./os-audio-player.scss"></style>

