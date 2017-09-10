<template lang="pug">
  .post-single__footer
    .post-single__footer-left
      a(href="/").track-like
        os-svg(name="like", width="10px", height="10px").track-like_icon
        span.track-like_text 55
      a(href="/").track-share
        os-svg(name="share", width="12px", height="10px").track-share_icon
        span.track-like_text 55
      a(href="/").track-add
        os-svg(name="plus", width="10px", height="10px").track-add_icon
        span.track-add_text Add to calendar
    .post-single__footer-right
      a(href="/").track-chart
        os-svg(name="speach", width="12px", height="10px").track-chart_icon
        span.track-chart_text 0
</template>
<script>
import OsSvg from '@/components/elements/os-svg'
export default {
  name: 'OsPostFooter',
  components: {
    OsSvg
  }
}
</script>
