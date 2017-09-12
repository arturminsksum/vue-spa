<template lang="pug">
  .container
    main.main
      .page-wrapper.page-event
        aside.page-event__aside
          .page-event__banner
            img.img(src="../assets/img/turtle.png")
          .page-event__add
            button.btn.btn--green
              os-svg.svg--mr.svg--white(name="add-calendar", width="18px", height="20px")
              span Add to calendar

        .page-event__content
          .page-event__header
            .page-event__info
              h1.page-event__head Cantina (Opening Night)
              .page-event__place
                os-svg.svg--mr.svg--green(name="marker", width="9px", height="14px")
                span 6801 Hollywood Blvd #433, Los Angeles, CA 90028, USA
              .page-event__where
                .page-event__date
                  os-svg.svg--mr.svg--green(name="calendar", width="13px", height="14px")
                  span 18.10.2017
                .page-event__time
                  os-svg.svg--mr.svg--green(name="clock", width="15px", height="15px")
                  span 18:00
            .page-event__active
              .page-event__share
                os-svg.svg--mr.svg--grey(name="share", width="14px", height="11px")
                span share
              .page-event__buy
                .page-event__price
                  os-svg.svg--mr.svg--green(name="ticket", width="14px", height="14px")
                  span $ 50
                .page-event__button
                  button.btn.btn--dark-blue-invert.btn--border-thin.btn--30-invert buy tickets
          .page-event__body
            os-artist-tags(:tags="eventTags")
            .content-block
              p From the 15th of September on Cantina is your new weekly go-to Friday night at De Marktkantine. Cantina is an extraordinary ride into a colourful, eccentric and outspoken party night. Cantina is set to make a mark in, the Amsterdam, club life. The Rock and Roll Hall of Fame describes him as "arguably the greatest instrumentalist in the history of rock music"... Fame describes him as "arguably the greatest instrumentalist in the history of rock music".
          .page-event__footer
            .page-event__map
              img.img(src="../assets/img/google-map.jpg")

</template>

<script>

import OsHeader from '@/components/sections/os-header.vue'
import OsArtistTags from '@/components/artist/os-artist-tags/os-artist-tags'
import OsSvg from '@/components/elements/os-svg'

export default {

  components: {
    OsHeader,
    OsArtistTags,
    OsSvg
  },

  data () {
    return {
      eventTags: ['blues rock', 'classic rock', 'psychedelic rock', 'guitar']
    }
  },

  computed: {
  }
}

</script>

<style lang="scss" src="../assets/events.scss" ></style>
