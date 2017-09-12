<template lang="pug">
  .post-single__header
    .post-single__header-block
      router-link(to="").post-single__avatar
      router-link(to="").post-single__user {{name}}
    .post-single__header-block
      .post-single__date 3 hour ago
      .post-single__drop
        .toggler
          .toggler__dot
          .toggler__dot
          .toggler__dot
</template>
<script>
export default {
  name: 'OsPostHeader',
  props: ['name', 'surname']
}
</script>
