<template lang="pug">
  transition(name='fade', mode='in-out')
    ul.notifications(v-show='isOpened')
      li.notifications-item(v-for='item in notifications', :key='item.name')
        span.notifications-item-description 
          a(:to='item.url') {{ item.name }}&nbsp;
          |{{item.description}}
        .notifications-item-time {{parseTime(item.time)}}
</template>

<script>
export default {
  props: ['notifications', 'isOpened'],
  methods: {
    parseTime (time) {
      return `${new Date(time).getHours()}:${new Date(time).getMinutes()}`
    }
  }
}
</script>
<style src="./os-notifications.scss" lang="scss"></style>
