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

  @import "../../assets/vars";

  .svg {
    top: 1px;
    position: relative;
    &--mr {
      margin-right: 10px;
    }
    &--white {
      fill: $white;
    }
    &--green {
      fill: $green;
    }
    &--grey {
      fill: $grey;
    }
  }
</style>
