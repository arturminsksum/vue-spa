<template lang="pug">
  section.profile-stats
    .profile-stats__item(v-for="stat in profileStats" key="index")
      os-svg(:name="stat.icon", width="14px", height="14px").profile-stats__icon
      span.profile-stats__text {{stat.text}}
      .profile-stats__count {{stat.count}}

</template>

<script>
import OsSvg from '@/components/elements/os-svg'

export default {

  components: {
    OsSvg
  },

  name: 'OsProfileStats',

  data () {
    return {
      profileStats: [
        {
          icon: 'speach',
          text: 'feedbacks',
          count: 143
        },
        {
          icon: 'events',
          text: 'events',
          count: 143
        },
        {
          icon: 'friends',
          text: 'friends',
          count: 1043
        }
      ]
    }
  }

}
</script>

<style lang="scss">

  @import "../../../assets/vars";

  .profile-stats {
    background: $white;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    &__item {
      // width: 25%;
    }

    &__icon {
      margin-right: 4px;
      vertical-align: middle;
      fill: $grey-text;
    }

    &__text {
      font-size: 10px;
      text-transform: uppercase;
      color: $grey-text;
    }

    &__count {
      margin: 12px 0 0 15px;
      font-size: 17px;
    }

  }
</style>
