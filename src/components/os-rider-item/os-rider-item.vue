<template lang="pug">
  .rider-item
    .rider-item__main
      .rider-item__info
        .rider-item__thumb
          img(src="~assets/img/txt-file.png")
        .rider-item__action
          .rider-item__name Concert rider
          .rider-item__buttons
            os-svg(name="print", width="20px", height="18px")
            os-svg(name="save", width="18px", height="18px")
            os-svg(name="download", width="14px", height="18px")
      .rider-item__toggle(@click="toggleRiderDetail")
        os-svg(name="show", width="21px", height="12px" v-show="!isExpand")
        os-svg(name="hide", width="13px", height="13px" v-show="isExpand")
    .rider-item__detail(v-show="isExpand")
      .rider-item__row.row
        .rider-item__column.six.columns
          | STAGE AND SOUND EQUIPMENT
          br
          br
          | In order to assure a quality concert, PURCHASER agrees to provide ARTIST
          br
          br
          | with the following, at PURCHASER'S sole cost and expense:
          br
          br
          | A.  A stage for performance which must be a minimum of  two hundred and twenty  (220) square feet.  The stage must be flat, smooth and stable.  A close cropped gray carpet measuring six (6) feet by (6) feet for the drum kit.
          br
          br
          | B.  A professional lighting system suitable to adequately illuminate the stage area.
          br
          br
          | C.  A professional sound augmentation system, with at least 24
          br
          br
          | inputs, capable of providing clear, undistorted, evenly distributed sound throughout the audience area.  The system must be complete with at least fifteen (15) high quality low impedance microphones.  Also five (5) high quality monitor speakers (see stage diagram attached).  An engineer to operate said system for the full sound check and performance.
          br
          br
          | MICROPHONES & STANDS:
          br
          br
          | Two (2)   vocal microphones
          br
          br
          | One (1) saxophone microphone
          br
          br
          | One   (1) bass microphone
          br
          br
          | Two (2) piano microphones
          br
          br
          | Four  (4) drum reinforcement microphones
          br
          br
          | Five  (5) heavyweight black music stands
        .rider-item__column.six.columns
          | ACCOMMODATIONS
          br
          br
          | PURCHASER shall provide, at no cost to ARTIST, four (4) Standard Rooms and one (1) King or Deluxe Room in a Three Star or Equivalent Hotel throughout the duration of the engagement.  All hotel room charges shall be paid in advance of the ARTIST'S arrival.
          br
          br
          | Artist will be responsible for depositing a personal credit card with each hotel upon check-in to cover any incidental costs including telephone and  room service.
          br
          br
          | BACKSTAGE  AMENITIES / SECURITY / FOOD
          br
          br
          | PURCHASER shall furnish ARTIST, at PURCHASER'S sole cost and expense, with
          br
          br
          | One (1) large, safe, comfortable, private dressing room for ARTIST'S sole
          br
          br
          | use with access to a private laboratory.  This room is to be clean, dry,  heated or air
          br
          br
          | conditioned as the weather shall require. The dressing room will be under guard by club or capable of being locked, particularly when ARTIST is performing.
          br
          br
          | The dressing room is to contain the following at PURCHASER'S sole cost
          br
          br
          | and expense:
          br
          br
          | A.  One (1) Large Platter of  Assorted Cheeses and Crackers
          br
          br
          | B.  One (1) Large Platter of Assorted Fresh Fruit (Apples,
          br
          br
          | Oranges, Bananas and Grapes)
          br
          br
          | C.  Five     (5)  Quarts of fresh Fruit Juices (Apple, Orange, Cranberry and Grape)         and assorted soft drinks sufficient for (4) people including drinking         glasses
          br
          br
          | D.  Five  (5) Bottles of Evian Spring Water (Liter Size Bottles)
          br
          br
          | E.      Utensils, Napkins, Plenty of Ice and a Sufficient
          br
          br
          | F.  Five  (5) Clean Bath Towels
          br
          br
          | G.  Five  5)  Clean Hand Towels
          br
          br
          | H.      HOT FOOD sufficient for Five (5) people.  (Chicken, Fish,           Vegetables)
          br
          br
          | NO RED MEAT OR PROCESSED COLD CUTS. NO FAST FOOD

</template>

<script>

import OsSvg from '~components/elements/os-svg'

export default {
  name: 'OsRiderItem',

  components: {
    OsSvg
  },

  data () {
    return {
      isExpand: false
    }
  },

  methods: {
    toggleRiderDetail () {
      this.isExpand = !this.isExpand
    }
  }
}

</script>

<style lang="scss" src="./os-rider-item.scss"></style>
