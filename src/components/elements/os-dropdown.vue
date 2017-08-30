<template lang="pug">
  transition(name='fade', mode='in-out')
    ul.dropdown(v-show='isOpened')
      li.dropdown-item(v-for='(option, index) in menuItems', :key='option.title', @click='select(index)')
        a(:href='option.url') {{ option.title }}
</template>
<script>
export default {
  props: ['menuItems', 'isOpened'],
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
    },
    select (i) {
      let action = this.menuItems[i].onClick

      if (action) action()
    }
  }
}
</script>

<style  src="./os-dropdown.scss" lang="scss"></style>
