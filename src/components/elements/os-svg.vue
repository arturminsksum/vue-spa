<template lang="pug">
  svg.svg(:width="width", :height="height")
    use(:xlink:href="'#'+name")
</template>

<script>
export default {
  name: 'OsSvg',
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: String
    },
    height: {
      type: String
    }
  },
  created () {
    require(`@/assets/svg/${this.name}.svg`)
  }
}
</script>

<style lang="scss">

</style>
