<template lang="pug">
  div(@click='toggle' :class="{'dropdown-opened': isOpened}")
    slot(name='item')
    transition(name='fade', mode='in-out')
      ul.dropdown(v-show='isOpened')
        li.dropdown-item(v-for='(option, index) in menuItems', :key='option.title')
          router-link(v-if='option.url' :to='option.url') {{ option.title }}
          a(v-else @click.prevent='option.onClick') {{ option.title }}
</template>
<script>
  import mixin from '@/helpers/mixin-clickaway'

  export default {
    mixins: [mixin],
    props: ['menuItems']
  }
</script>

<style  src="./os-dropdown.scss" lang="scss"></style>
