<template lang="pug">
  #app
    //- os-header
    router-view
    os-footer
</template>

<script>

// import OsHeader from './components/sections/os-header.vue'
import OsFooter from './components/sections/os-footer.vue'

export default {
  name: 'app',
  components: {
    // OsHeader,
    OsFooter
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
