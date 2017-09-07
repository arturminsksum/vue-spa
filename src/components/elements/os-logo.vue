<template lang="pug">
  div.logo
    router-link( to="/")
      os-svg(name="onstage-logo")
</template>

<script>

import OsSvg from '@/components/elements/os-svg'

export default {

  name: 'OsLogo',

  components: {
    OsSvg
  }

}
</script>

<style lang="scss" scoped>

  .svg {
    width: 100%;
  }

</style>
