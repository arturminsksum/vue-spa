<template lang="pug">
.artist-events
  .artist-events__calendar-toggler
    .artist-events__calendar-months(@click="toggleMonth('month')", :class="{'artist-events__calendar-months--passive': isToggled('month')}") Months
    .artist-events__calendar-year(@click="toggleMonth('year')", :class="{'artist-events__calendar-year--passive': isToggled('year')}") Year
  vue-event-calendar(:events='demoEvents')
    template(scope='props')
      ul.artist-concert
        li.artist-concert__item.event-item(v-for='(event, index) in demoEvents')
          .artist-concert__summary
            .artist-concert__summary-hrefs
              a(href="/").artist-concert__summary-href
                img(:src="require('~assets/img/' + event.image)").artist-concert__summary-image
              a(href="/").artist-concert__summary-date
                span.artist-concert__summary-month {{event.dateMonth}}
                span.artist-concert__summary-year {{event.dateYear}}
            p.artist-concert__summary-text
              | {{event.textFirst}}
              br
              | {{event.textLast}}
            .artist-concert__summary-dots(@click="event.show = !event.show", :class="{'artist-concert__summary-dots--active': event.show}")
              .artist-concert__summary-dot
              .artist-concert__summary-dot
              .artist-concert__summary-dot
          transition(name='fade')
            .artist-concert__full(v-show='event.show')
              img(src="~assets/img/turtle.png").img.artist-concert__full-image
              .artist-concert__full-info
                p.artist-concert__full-text TJ´s Muse Bridge LISTEN & CHAT SHOW introduces ESP EVOLUTION music to MuseBoat family!
                .artist-concert__full-container
                  p.artist-concert__full-date
                    time(datetime='16-10-2016') October 16th, 2016
                  p.artist-concert__full-time
                    time(datetime='14:00') @ 2:00pm
                a.artist-concert__full-button Visit event page
</template>

<script>

import OsSvg from '~components/elements/os-svg'

export default {
  name: 'OsArtistEvents',

  components: {
    OsSvg
  },

  data () {
    return {
      demoEvents: [
        {
          date: '2017/07/20',
          title: '',
          image: 'turtle-min.png',
          textFirst: 'Beat Funktion',
          textLast: 'Stockholm, SE',
          dateMonth: 'SEP 01',
          dateYear: '2016',
          show: false
        },
        {
          date: '2017/07/07',
          title: '',
          image: 'map-min.png',
          textFirst: 'Beat Funktion',
          textLast: 'Stockholm, SE',
          dateMonth: 'SEP 01',
          dateYear: '2016',
          show: false
        },
        {
          date: '2017/08/27',
          title: '',
          image: 'map-min.png',
          textFirst: 'Beat Funktion',
          textLast: 'Stockholm, SE',
          dateMonth: 'SEP 01',
          dateYear: '2016',
          show: false
        }
      ],

      monthShow: true,
      toggledEl: 'month'
    }
  },

  methods: {
    toggleMonth: function (val) {
      this.toggledEl = val
    },
    isToggled: function (val) {
      return this.toggledEl !== val
    }
  }
}
</script>
<style src="./os-artist-events.scss" lang="scss"></style>
