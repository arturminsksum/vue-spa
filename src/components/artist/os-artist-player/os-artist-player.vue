<template lang="pug">
.artist-center__player(v-if="audioActive")
  .artist-center__player-avatar
    os-svg(name="disc", width="23px", height="23px").artist-center__player-avatar__icon
  .artist-center__player-top
    .artist-center__player-top__controls
      .artist-center__player-top__button-play
      .artist-center__player-top__button-prev
      .artist-center__player-top__button-next
      .artist-center__player-top__track-name {{name}}
    .artist-center__player-top__actions
      .artist-center__player-top__actions-social
        .artist-center__player-top__volume
        .artist-center__player-top__like
        .artist-center__player-top__share
      .artist-center__player-top__actions-extand
    .artist-center__player-bottom
      .artist-center__player-bottom__track
        .artist-center__player-bottom__track-played
        .artist-center__player-bottom__track-currrent
</template>

<script>

import OsSvg from '~components/elements/os-svg'

export default {
  name: 'OsArtistPlayer',

  components: {
    OsSvg
  },

  data () {
    return {
      name: 'Sing song'
    }
  }
}
</script>
<style src="./os-artist-player.scss" lang="scss"></style>
