<template lang="pug">
.artist-hashtags
  .artist-tags(ref="tagsContainer", :class="{'artist-tags--active': availibleTags}")
    a(ref="tags", href="" v-for="tag, index in tags", :key="index").artist-tags__link.btn.btn--grey.btn--20
      span # {{tag}}
  .artist-hashtags__dots(v-if="showDots", @click="availibleTags = !availibleTags", :class="{'artist-hashtags__dots--active': availibleTags}")
    span.artist-hashtags__dot
    span.artist-hashtags__dot
    span.artist-hashtags__dot
</template>

<script>
export default {
  name: 'OsArtistTags',

  props: {
    tags: Array
  },

  data () {
    return {
      availibleTags: false,
      showDots: false
    }
  },

  methods: {
    checkTagsCapacity () {
      const containerWidth = this.$refs.tagsContainer.offsetWidth
      let tagsSumWidth = 0

      this.$refs.tags.forEach(tag => {
        tagsSumWidth += (tag.offsetWidth + parseInt(getComputedStyle(tag).marginRight, 10))
      })

      this.showDots = (tagsSumWidth > containerWidth)
    }
  },

  mounted () {
    this.checkTagsCapacity()
  }
}
</script>
<style src="./os-artist-tags.scss" lang="scss"></style>
