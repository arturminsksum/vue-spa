<template lang="pug">
  .post-create.bgc-white
    .post-create__header
      .post-create__tabs
        .post-create__tab.post-create__tab--active
          os-svg.svg--green(name="edit", width="14px", height="14px")
          span Whats new?
        .post-create__tab
          os-svg(name="photo", width="17px", height="14px")
          span Photo
      .post-create__drop
        .toggler
          .toggler__dot
          .toggler__dot
          .toggler__dot
    .post-create__body
      textarea(placeholder="Type here" rows="1").post-create__textarea
    .post-create__footer
      button.btn.btn--green-invert.btn--border-thin.btn--30-invert Post
</template>

<script>
import OsSvg from '@/components/elements/os-svg'
export default {
  name: 'OsPostCreate',
  components: {
    OsSvg
  }
}
</script>
