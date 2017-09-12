<template lang="pug">
  .post-single__footer
    .post-single__footer-left
      router-link(to="").track-like
        os-svg(name="like", width="10px", height="10px").track-like_icon
        span.track-like_text 55
      router-link(to="").track-share
        os-svg(name="share", width="12px", height="10px").track-share_icon
        span.track-like_text 55
      router-link(to="").track-add(v-if='type == "event"')
        os-svg(name="plus", width="10px", height="10px").track-add_icon
        span.track-add_text Add to calendar
    .post-single__footer-right
      router-link(to="").track-chart
        os-svg(name="speach", width="12px", height="10px").track-chart_icon
        span.track-chart_text 0
</template>
<script>
import OsSvg from '@/components/elements/os-svg'
export default {
  name: 'OsPostFooter',
  components: {
    OsSvg
  },
  props: ['type']
}
</script>
