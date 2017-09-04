<template lang="pug">
  .profile-avatar
    img(:src="path")
</template>

<script>

export default {
  name: 'OsProfileAvatar',
  props: ['path']
}
</script>

<style lang="scss">

  @import "../../assets/vars";

  .profile-avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    background-color: $grey-text;
    border: solid 3px $border-color;

    img {
      @include img;
    }
  }

</style>
