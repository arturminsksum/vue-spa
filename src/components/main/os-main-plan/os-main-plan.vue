<template lang="pug">
  .main-plan
    .main-plan__item-wrap(v-for="plan in plans")
      .main-plan__item
        h3.main-plan__title {{plan.title}}
        .main-plan__price
          span.main-plan__price-value {{plan.price}}
          sup.main-plan__price-currency $
        p.main-plan__period {{plan.period}}
        .main-plan__divider
        .main-plan__button
          router-link(to='').btn.btn--green-invert {{plan.button}}

</template>

<script>

export default {

  name: 'OsMainPlan',

  data () {
    return {
      plans: [
        { title: 'Free trial',
          price: '0',
          period: '1 month for free',
          button: 'start now'
        },
        { title: 'Ninja plan',
          price: '10',
          period: 'monthly plan',
          button: 'buy now'
        },
        { title: 'Master plan',
          price: '27',
          period: '3 month plan',
          button: 'buy now'
        },
        { title: 'PRO plan',
          price: '100',
          period: '1 year plan',
          button: 'buy now'
        }
      ]
    }
  }

}
</script>

<style src="./os-main-plan.scss" lang="scss"></style>
