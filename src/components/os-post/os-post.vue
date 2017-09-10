<template lang="pug">
  .post-single.bgc-white
    os-post-header(:name="post.author.name")
    os-post-body(:post="post")
    os-post-footer
</template>

<script>
import OsSvg from '@/components/elements/os-svg'
import OsPostHeader from '@/components/os-post/os-post-header'
import OsPostFooter from '@/components/os-post/os-post-footer'
import OsPostBody from '@/components/os-post/os-post-body'
// import { mapState } from 'vuex'

export default {
  name: 'OsPost',

  components: {
    OsSvg,
    OsPostHeader,
    OsPostFooter,
    OsPostBody
  },
  props: ['post'],
  computed: {
    // ...mapState([
    //   'posts'
    // ])
  },
  data () {
    return {
    }
  },

  methods: {
    openGallery: function (event) {
      let imgs = this.$refs.image,
        self = event.target

      if (self.className === 'bg-cover' || self.className === 'post-single__gallery-count') {
        var x = imgs.length,
          i = imgs.length
      } else if (self.className === 'img') {
        while (i--) {
          if (imgs[i] === self) {
            x = i + 1
            break
          }
        }
        if (!x) {
          x = 0
        }
      } else {
        x = 0
      }
      this.pictureNumber = x
      this.showModalGallery = true
    },

    setIndex: function (arrNumber) {
      let number = arrNumber + 1,
        endNumber = this.photos.length - number
      return endNumber
    }
  }
}
</script>


<style lang="scss" src="./os-post.scss"></style>

