<template lang="pug">
  .profile-avatar
    img(src="../../assets/img/artist-avatar-01.jpg")
</template>

<script>

export default {
  name: 'OsProfileAvatar'
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
