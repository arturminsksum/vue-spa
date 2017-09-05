<template lang="pug">
.artist-hashtags
  .artist-tags(:class="{'artist-tags--active': availibleTags}")
    a(href="" v-for="tag in tags" key="index").artist-tags__link.btn.btn--grey.btn--20
      span # {{tag}}
  .artist-hashtags__dots(@click="availibleTags = !availibleTags", :class="{'artist-hashtags__dots--active': availibleTags}")
    span.artist-hashtags__dot
    span.artist-hashtags__dot
    span.artist-hashtags__dot
</template>

<script>
export default {
  name: 'OsArtistTags',
  props: {
    tags: {
      type: Array
    }
  },

  data () {
    return {
      availibleTags: false
    }
  }
}
</script>
<style src="./os-artist-tags.scss" lang="scss"></style>
