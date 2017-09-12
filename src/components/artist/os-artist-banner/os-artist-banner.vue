<template lang="pug">
 .artist-banner
        .artist-banner__bg(:style="{ backgroundImage: `url(${user.header_image})` }")
        .artist-banner__bottom
          .artist-banner__info
            os-profile-avatar(:path="user.avatar_image").artist-banner__avatar
            .artist-banner__about
              p.artist-banner__name {{user.name}}
              .artist-banner__block
                .artist-banner__genre(v-if="!isUser && user.genre")
                  router-link(to="").artist-banner__genre-link Blues rock
                  span &nbsp;/&nbsp;
                  router-link(to="").artist-banner__genre-link Classic Rock
                  span &nbsp;/&nbsp;
                  router-link(to="").artist-banner__genre-link Guitar
                router-link(to="" v-if="user.location").artist-banner__location
                  os-svg(name="marker", width="9px", height="14px").artist-banner__location-icon
                  span.artist-banner__location-spot {{user.location}}
          .artist-banner__action
            router-link(to="" v-if="!isArtist").artist-banner__link
              os-svg(name="message", width="15px", height="11px").artist-banner__link-icon
              span.artist-banner__link-text message
            router-link(to="").artist-banner__link
              os-svg(name="share", width="14px", height="11px").artist-banner__link-icon
              span.artist-banner__link-text share
</template>

<script>

import OsSvg from '@/components/elements/os-svg'
import OsProfileAvatar from '@/components/elements/os-profile-avatar.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'OsArtistBanner',

  components: {
    OsSvg,
    OsProfileAvatar
  },

  props: {
    user: {
      type: Object
    }
  },

  computed: {
    ...mapGetters([
      'isUser',
      'isArtist',
      'isAgent',
      'isClub'
    ])
  }
}
</script>
<style src="./os-artist-banner.scss" lang="scss"></style>
