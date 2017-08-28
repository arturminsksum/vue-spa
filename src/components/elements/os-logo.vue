<template lang="pug">
  div.logo
    a(v-if="isLogin"  href="/")
      os-svg(name="onstage-logo")
    os-svg(v-else name="onstage-logo")
</template>

<script>

import OsSvg from '@/components/elements/os-svg'
import { mapState } from 'vuex'

export default {

  name: 'OsLogo',

  components: {
    OsSvg
  },

  computed: {
    ...mapState([
      'isLogin'
    ])
  }

}
</script>

<style lang="scss" scoped>

  .svg {
    width: 100%;
  }

</style>
