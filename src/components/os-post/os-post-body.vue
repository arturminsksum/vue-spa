<template lang="pug">
  .post-single__body
    .post-event(v-if="post.type == 'event'")
      .post-event__banner
        router-link(:to="{name: 'events'}")
          img.img(:src="post.poster")
      .post-event__info
        .post-event__row
          .post-event__head {{post.eventName}}
          .post-event__price
            os-svg.svg--mr.svg--green(name="ticket", width="14px", height="14px")
            span $ {{post.price}}
        .post-event__place
          os-svg.svg--mr.svg--green(name="marker", width="9px", height="14px")
          span {{post.location}}
        .post-event__where
          .post-event__date
            os-svg.svg--mr.svg--green(name="calendar", width="13px", height="14px")
            span {{post.date}}
          .post-event__time
            os-svg.svg--mr.svg--green(name="clock", width="15px", height="15px")
            span {{post.time}}
    .post-single__news(v-else)
      .post-single__news-text(v-if='post.description') {{post.description}}
      // need to be updated
      .post-single__news-img(v-if="post.gallery", @click='openImage($event.target)')
        img.img(:src="require('../../assets/img/' + post.gallery[0].source)" ref="image" :data-index="0")
        .post-single__gallery
          .post-single__gallery-item(v-for="(item, index) in post.gallery", :key="index", v-if="index !== 0 && index < 4")
            img.img(:src="require('../../assets/img/' + item.source)", ref="image", :data-index="index")
            .bg-cover(v-if="index === 3")
              .post-single__gallery-count +{{ setIndex(index) }}
      .post-single__video(v-if='post.video')
        .video
          //iframe(width='854', height='480', :src='post.video.source', frameborder='0', allowfullscreen='')
          .bg-cover
            os-svg(name="playVideo", width="60px", height="60px").video__icon
      os-audio-track(v-if='post.tracks.length > 0' v-for='track in post.tracks' :key='track.songName', :track="track", :isPlay="track.playing", @showPlayer="showPlayer = !showPlayer")
</template>

<script>
import OsAudioTrack from '@/components/os-audio-track/os-audio-track.vue'
import OsSvg from '@/components/elements/os-svg'

export default {
  name: 'OsPostBody',
  props: ['post'],
  components: {
    OsAudioTrack,
    OsSvg
  },
  data () {
    return {}
  },
  methods: {
    setIndex: function (arrNumber) {
      let number = arrNumber + 1,
        endNumber = this.post.gallery.length - number
      return endNumber
    },
    // This is TEMP method. Rewrite when State will be ready. delete this method from all elems upper
    openImage: function (event) {
      const index = event.dataset.index
      this.$emit('show-image', {
        showModalGallery: true,
        pictureNumber: index,
        galleryPhotos: this.post.gallery,
        author: this.post.author
      })
    }
  }
}
</script>
