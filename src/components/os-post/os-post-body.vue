<template lang="pug">
  .post-single__body
    .post-event(v-if="post.type == 'event'")
      .post-event__banner
        router-link(:to="{name: 'events'}")
          img.img(:src="post.poster")
      .post-event__info
        .post-event__row
          .post-event__head {{post.name}}
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
      .post-single__news-img(v-if="post.gallery")
        //-img(:src="require('../../assets/img/' + post.gallery[0])" ref="image").img
        .post-single__gallery(v-if="post.gallery.length > 1")
          .post-single__gallery-item(v-for="(item, index) in post.gallery", :key="index", v-if="index != 0 && index < 3")
            img(:src="require('../../assets/img/' + post.gallery[index])" ref="image").img
            .bg-cover(v-if="index === 3")
              .post-single__gallery-count +{{ setIndex(index) }}
        //
      //os-audio-track(v-if='post.tracks' :track="post.tracks.[0]", :isPlay="post.track.playing", @showPlayer="showPlayer = true")
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
  }
}
</script>
