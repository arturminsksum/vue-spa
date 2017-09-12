<template lang="pug">
.calendar
  .calendar__add-event(@click="showModalEvent = true")
    os-svg.svg--mr(name="plus", width="14px", height="14px")
    strong Add event
  os-modal.modal-event(
  modal-title="Create event"
  v-if="showModalEvent"
  @close="showModalEvent = false")
    .modal-event__body(slot="body")
      form.form.form--signup#club-form(@submit.prevent="submit", name='event-form')

        label.form__row.direction-col
          div.field-wrapper
            .label.label--signup Event name
            input#name.input(type="text" placeholder="Ex. Super Mega Festival", v-model="formsData.event.name")
          div.field-wrapper(v-show="formsData.event.errors")
            span.error

        label.form__row.direction-col
          div.field-wrapper
            .label.label--signup Location
            input#location.input(type="text" placeholder="Ex. Doodah King", v-model="formsData.event.location")
          div.field-wrapper(v-show="formsData.event.errors")
            span.error
        .form__row
          label.form__col
            div.field-wrapper
              .label.label--signup Date
              input#date.input.input--small(type="date", v-model="formsData.event.date")
            div.field-wrapper(v-show="formsData.event.errors")
              span.error

          label.form__col
            div.field-wrapper
              .label.label--between Time
              input#time.input.input--small(type="time", v-model="formsData.event.time")
            div.field-wrapper(v-show="formsData.event.errors")
              span.error

        .form__row
          label.form__col
            div.field-wrapper
              .label.label--signup Ticket price
              input#price.input.input--small(type="number" placeholder="Ex. 100", v-model="formsData.event.price")
            div.field-wrapper(v-show="formsData.event.errors")
              span.error

        .form__row
          .form__col
            div.field-wrapper
              .label.label--signup Add Artists
              .event-artist__row
                .event-artist(v-for="n in 3")
                  input.event-artist__input(:id="`artist${n}`" type="checkbox", :value="n", v-model="checkedArtists")
                  label.btn.btn--20(:for="`artist${n}`").event-artist__label Artist{{n}}

        //-       .form-search
        //-         input#artist.input(type="text" placeholder="Ex. Prodigy", v-model="formsData.addedArtist")
        //-         .form-search__icon
        //-           os-svg(name="search", width="13px", height="14px")
        //-     div.field-wrapper(v-show="formsData.event.errors")
        //-       span.error
        //-   .form__col
        //-     button.form-plus(@click.prevent="addArtist")
        //-       os-svg(name="plus", width="12px", height="12px")
        //- .form-added
        //-   button.btn.btn--grey.btn--20(v-for="user, index in artistTags", :key="index")
        //-     span {{user}}
        //-     os-svg(name="close", width="9px", height="9px")

        label.form__row.direction-col
          div.field-wrapper
            .label.label--signup Description
            textarea#description.textarea(placeholder="Ex. Super Mega Festival in the world", rows="6", v-model="formsData.event.description")
          div.field-wrapper(v-show="formsData.event.errors")
            span.error

        .form__row
          label.form__col.form__col--60
            div.field-wrapper
              .label.label--signup Add tags
              .form-search
                input#tags.input(type="text" placeholder="Ex. rock", v-model="formsData.addedTag")
                //- .form-search__icon
                //-   os-svg(name="search", width="13px", height="14px")
            div.field-wrapper(v-show="formsData.event.errors")
              span.error
          .form__col
            button.form-plus(@click.prevent="addTag")
              os-svg(name="plus", width="12px", height="12px")
        .form-added
          template(v-for="genre, index in genreTags")
            .btn.btn--grey.btn--20(:data-id="genre" @click="removeTag")
              span # {{genre}}
              os-svg(name="close", width="9px", height="9px")

        .form__row.form__row--align-center
          .label.label--signup Upload poster
          .upload__added(v-if="posterName !== ''")
            span.upload__file-name {{posterName}}
            button.upload__delete.btn.btn--grey(@click.prevent="deleteFile") Delete
          label.upload__button.btn.btn--dark-blue Select
            input.upload__input(type="file" ref="file" accept="image/jpeg, image/png" @change="uploadFile")
        .form__row.form__row--start-end
          .form__submit
            button.btn.btn--green.btn--40(type="submit") Create event

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
              router-link(to="").artist-concert__summary-href
                img(:src="require('../../../assets/img/' + event.image)").artist-concert__summary-image
              router-link(to="").artist-concert__summary-date
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
import OsModal from '@/components/os-modal/os-modal.vue'
import { mapState } from 'vuex'
// import Form from '@/helpers/validation.js'

export default {
  name: 'OsArtistEvents',

  components: {
    OsSvg,
    OsModal
  },
  computed: {
    ...mapState([
      'events'
    ])
  },

  data () {
    return {
      showModalEvent: false,

      // artistTags: ['The Offsping', 'Prodigy'],

      checkedArtists: [],

      genreTags: [],

      posterName: '',

      formsData: {
        /* event: new Form({
          name: '',
          location: '',
          time: '',
          price: '',
          description: '',
          tags: '',
          upload: ''
        }) */
        event: {
          name: '',
          location: '',
          date: '',
          time: '',
          tags: this.genreTags,
          description: '',
          price: '',
          errors: false,
          id: new Date().getTime(),
          poster: '',
          artist: this.checkedArtists
        },
        addedTag: '',
        addedArtist: ''
      },

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
    submit: function () {
      const data = Object.assign({}, this.formsData.event)
      const payload = Object.assign({}, {event: data})
      this.$store.commit('ADD_EVENT', payload)
      this.showModalEvent = false
    },
    uploadFile (event) {
      this.$set(this.formsData.event, 'poster', 'http://carpentercollective.com/wp-content/uploads/2013/12/JackJohnson02_tadcarpenter1.jpg') // event.target.files[0].name
    },
    deleteFile () {
      this.$refs.file.value = ''
      this.posterName = ''
    },
    addTag () {
      const value = this.formsData.addedTag
      this.genreTags.splice(0, 0, value)
      this.formsData.addedTag = ''
    },

    removeTag () {
      const tag = arguments[0].currentTarget.getAttribute('data-id')

      this.genreTags = this.genreTags.filter((item) => {
        return item !== tag
      })
    },

    addArtist () {
      const value = this.formsData.addedArtist
      this.artistTags.splice(0, 0, value)
      this.formsData.addedArtist = ''
    }
  }
}
</script>
<style src="./os-artist-events.scss" lang="scss"></style>
