<template lang="pug">
  transition(name='fade', mode='in-out')
    ul.dropdown(v-show='isOpened')
      li.dropdown-item(v-for='(option, index) in menuItems', :key='option.title')
        router-link(v-if='option.url' :to='option.url') {{ option.title }}
        a(v-else @click.prevent='option.onClick') {{ option.title }}
</template>
<script>
export default {
  props: ['menuItems', 'isOpened'],
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style  src="./os-dropdown.scss" lang="scss"></style>
