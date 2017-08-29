<template lang="pug">
  div.tabs
    ul.tabs-list
      li.tabs-list__button(v-for='tab in tabs', :class="{ 'tabs-list__button--is-active': tab.isActive }")
        a.tabs-list__link(@click.prevent='selectTab(tab)')
          svg.svg(v-if="tab.iconName", :class="'svg--'+tab.iconName")
            use(:xlink:href="'#'+tab.iconName")
          span.tabs-list__text {{ tab.name }}
    .tabs-details
      slot
</template>

<script>

import OsSvg from '@/components/elements/os-svg'

export default {

  name: 'OsTabs',

  components: {
    OsSvg
  },

  data () {
    return {
      tabs: []
    }
  },

  created () {
    this.tabs = this.$children
  },

  mounted () {
    this.tabs.forEach(tab => {
      tab.iconName ? require(`@/assets/svg/${tab.iconName}.svg`) : false
    })
  },

  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  }
}

</script>

<style src="./os-tabs.scss" lang="scss"></style>
