<template lang="pug">
  transition(name='fade', mode='in-out')
    ul.dropdown(v-show='isOpened')
      li.dropdown-item(v-for='option in menuItems', :key='option.title', @click='select')
        a(:to='option.url') {{ option.title }}
</template>
<script>
export default {
  props: ['menuItems', 'isOpened'],
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
    },
    select () {}
  }
}
</script>

<style  src="./os-dropdown.scss" lang="scss"></style>
