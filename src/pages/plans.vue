<template lang="pug">
  .container-plans
      h1.plans-header Choose your favorite plan
      .plans-info(v-for="plan, index in plansContent", :key="index")
        .plans-info__image
          img(:src="require('../assets/img/' + plan.image)").img
          .plans-info__name.img
            p.plans-info__name-text {{ plan.planName }}
        .plans-info__free
          .plans-info__head.free-head {{ freeHead }}
          .plans-info__body
            .plans-info__cost.free-cost {{ freeCost }}
            .plans-info__advantages
              ul.plans-info__list--free
                li(v-for="advantage in plan.freeAdvantages", :key="advantage").plans-info__item {{ advantage }}
        .plans-info__pro
          .plans-info__head.chargeable-head {{ proHead }}
          .plans-info__body.chargeable
            .plans-info__cost.chargeable-cost
              .plans-info__prise {{ proCost }}
              a(href="/").plans-info__button {{ proButton }}
            .plans-info__advantages
              ul.plans-info__list--chargeable
                li(v-for="advantage, index in plan.proAdvantages", :key="index").plans-info__item {{ advantage }}
</template>

<script>

import OsHeader from '@/components/sections/os-header.vue'

import OsSvg from '@/components/elements/os-svg'

export default {

  components: {
    OsHeader,
    OsSvg
  },

  data () {
    return {
      freeHead: 'free',
      freeCost: 'free',
      proHead: 'pro',
      proCost: '10',
      proButton: 'buy now',
      plansContent: [
        {
          image: 'plan-artist.jpg',
          planName: 'Artist Plans',
          freeAdvantages: [
            'One hour per place to music',
            'Upload more than 1 hour of music',
            'Creating one rider',
            'Possibility to organize a concert',
            'Become a resident of 3 clubs'
          ],
          proAdvantages: [
            'Upload more than 1 hour of music',
            'Create more than 1 rider',
            'Create more than 1 rider',
            'Fast music upload',
            'Detailed tour on maps',
            'Send inquiries to clubs for performances organization'
          ]
        },
        {
          image: 'plan-agent.jpg',
          planName: 'Agent Plans',
          freeAdvantages: [
            'Add 3 promoted artists to your profile',
            'Organize 2 concerts for a week',
            'Planning of concerts for 1 month',
            'Tickets sales'
          ],
          proAdvantages: [
            'Permanent residents in the profile of more than 3 artists',
            'Create more than 2x events a week',
            'Statistics views',
            'Plan the concerts  for a year ahead',
            'Organize tours',
            'Possibility of coverage for the work of 10 clubs / cities / states (in the form of advertising events)'
          ]
        },
        {
          image: 'plan-club.jpg',
          planName: 'Club Plans',
          freeAdvantages: [
            'Add 3 promoted artists to your profile',
            'Organize 2 concerts for a week',
            'Planning of concerts for 1 month',
            'Tickets sales'
          ],
          proAdvantages: [
            'Permanent residents in the profile of more than 3 artists',
            'Create more than 2x events a week',
            'Statistics views',
            'Plan the concerts  for a year ahead',
            'Organize Festivals',
            'Possibility of coverage for the work of 10 clubs / cities / states (in the form of advertising events)'
          ]
        }
      ]
    }
  }
}

</script>
<style src="../assets/plans.scss" lang="scss"></style>
