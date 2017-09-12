<template lang="pug">
  div(@click='toggle' :class="{'dropdown-opened': isOpened}")
    slot(name='item')
    transition(name='fade', mode='in-out')
      ul.notifications(v-show='isOpened')
        li.notifications-item(v-for='item in notifications', :key='item.name')
          span.notifications-item-description
            router-link(to='') {{ item.name }}&nbsp;
            |{{item.description}}
          .notifications-item-time {{parseTime(item.time)}}
</template>

<script>
  import mixin from '@/helpers/mixin-clickaway'

  export default {
    props: ['notifications'],
    mixins: [mixin],
    methods: {
      parseTime (time) {
        return `${new Date(time).getHours()}:${new Date(time).getMinutes()}`
      }
    }
  }
</script>
<style src="./os-notifications.scss" lang="scss"></style>
