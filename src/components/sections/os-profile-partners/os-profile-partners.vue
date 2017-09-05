<template lang="pug">
  section.profile-partners
    .profile-partners__header
      os-svg(:name="svgName", width="14px", height="14px").profile-partners__header-icon
      .profile-partners__header-text {{headerTitle}}
      .profile-partners__header-number {{counter}}
    .profile-partners__body
      .profile-partners__item(:key="index" v-for="item,index in items")
        .profile-partners__img
        router-link.profile-partners__name(v-if="item.id" :to="{ name: 'user', params: { id: item.id }}") {{item.name}}
        .profile-partners__name(v-else) {{item.name}}
        .profile-partners__place(v-if="item.place")
          os-svg(name="marker", width="9px", height="14px").profile-partners__place-icon
          .profile-partners__place-name {{item.place}}

</template>

<script>
import OsSvg from '@/components/elements/os-svg'

export default {

  components: {
    OsSvg
  },

  name: 'OsProfilePartners',

  props: {
    headerTitle: {
      type: String
    },
    svgName: {
      type: String
    },
    counter: {
      type: Number
    },
    items: {
      type: Array
    }
  },

  data () {
    return {
    }
  }

}
</script>

<style lang="scss">

  @import "../../../assets/vars";

  .profile-partners {
    padding: 20px;
    &__header {
      margin-bottom: 20px;
      text-transform: uppercase;
      display: flex;
      font-size: 12px;
      line-height: 18px;

      &-icon {
        margin-right: 10px;
        margin-top: 2px;
        fill: $font-color;
      }

      & div:nth-child(2) {
        flex: 3;
      }

    }
    &__body {
      display: flex;
    }
    &__item{
      padding: 0 7px;
      width: 25%;
    }
    &__img{
      background-color: $banner-grey;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    &__name{
      margin-bottom: 5px;
    }
    &__place{
      display: flex;
      &-icon{
        fill: $font-color;
      }
      &-name{
        margin-left: 5px;
      }
    }
  }


</style>
