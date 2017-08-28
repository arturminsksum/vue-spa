<template lang="pug">
  div.tabs-details__item(v-if='isActive')
    slot
</template>

<script>

export default {

  name: 'OsTabsItem',

  props: {
    name: { required: true },
    iconName: {
      type: String,
      required: false
    },
    selected: { default: false }
  },

  data () {
    return {
      isActive: false
    }
  },

  mounted () {
    this.isActive = this.selected
  }

}

</script>
