<template lang="pug">
  .artist-feedback
    .artist-feedback__header
      .artist-feedback__title
        os-svg(name="feedbacks", width="14px", height="12px").artist-feedback__icon
        | feedback
      .artist-feedback__count 43
    .artist-feedback__content
      .artist-feedback__text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...
      .artist-feedback__name Manager Name
      time(datetime="2017-01-11").artist-feedback__date 11.01.2017
    .artist-feedback__footer
      nuxt-link(to="").artist-feedback__link Show all
</template>

<script>

import OsSvg from '~components/elements/os-svg'

export default {
  name: 'OsArtistFeedback',

  components: {
    OsSvg
  }
}

</script>
<style src="./os-artist-feedback.scss" lang="scss"></style>
