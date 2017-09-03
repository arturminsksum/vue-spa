<template lang="pug">
.calendar
  .calendar__add-event
    os-svg.svg--mr(name="plus", width="14px", height="14px")
    strong Add event
  vue-event-calendar(:events='demoEvents')
    template(scope='props')
      .calendar__actions
        .calendar__actions-row
          .calendar__actions-col
            os-svg.svg--mr(name="edit", width="14px", height="14px")
            span Edit event
          .calendar__actions-col-divider
          .calendar__actions-col
            os-svg.svg--mr(name="delete", width="10px", height="15px")
            span Delete
        .calendar__actions-row-divider
        .calendar__actions-row
          .calendar__actions-col
            os-svg.svg--mr(name="friends", width="12px", height="12px")
            span Invite friends
          .calendar__actions-col-divider
          .calendar__actions-col
            os-svg.svg--mr(name="share", width="14px", height="11px")
            span Share

      ul.artist-concert
        li.artist-concert__item.event-item(v-for='(event, index) in demoEvents')
          .artist-concert__summary
            .artist-concert__summary-hrefs
              a(href="/").artist-concert__summary-href
                img(:src="require('../../../assets/img/' + event.image)").artist-concert__summary-image
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
              img(src="../../../assets/img/turtle.png").img.artist-concert__full-image
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

import OsSvg from '@/components/elements/os-svg'

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
      ]
    }
  },

  methods: {
  }
}
</script>
<style src="./os-artist-events.scss" lang="scss"></style>
