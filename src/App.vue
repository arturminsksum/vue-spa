<template lang="pug">
  #app.inner
    os-header
    router-view
    os-footer
</template>

<script>

import OsHeader from '@/components/sections/os-header.vue'
import OsFooter from '@/components/sections/os-footer.vue'
import OsModal from '@/components/os-modal/os-modal.vue'
import OsProfileGallery from '@/components/sections/os-profile-gallery/os-profile-gallery'

export default {
  name: 'app',
  components: {
    OsHeader,
    OsFooter,
    OsModal,
    OsProfileGallery
  }
}
</script>

<style lang="scss">
  @import './assets/reset.css';
  @import './assets/fonts.css';
  @import './assets/skeleton';
  @import './assets/common';
  @import './assets/signup';
  @import './assets/artist';
  @import './assets/profile';

</style>
