<template lang="pug">
  footer.footer
    .container
      .footer__top
        .footer__logo
          os-logo
        ul.footer__list(v-for="n in 3")
          li.footer__item(v-for="link in links")
            router-link.footer__link(to="") {{link.text}}

        .footer__follow
          .footer__follow-title Follow us
          .footer__follow-share
            router-link.footer__follow-icon(to="", :key="index", :title="icon.title", v-for="icon, index in icons")
              os-svg.footer__follow-svg(:name="icon.name", :class="`footer__follow-svg--${icon.name}`")
      .footer__bottom
        .footer__copyright © 2015 - 2017 Onstage

</template>

<script>
import OsSvg from '@/components/elements/os-svg'
import OsLogo from '@/components/elements/os-logo'

export default {

  components: {
    OsLogo,
    OsSvg
  },

  name: 'OsFooter',

  data () {
    return {
      links: [
        {
          text: 'Artists',
          href: ''
        },
        {
          text: 'Clubs',
          href: ''
        },
        {
          text: 'Managers',
          href: ''
        },
        {
          text: 'FAQ',
          href: ''
        }
      ],
      icons: [
        {
          name: 'fb',
          title: 'facebook',
          href: 'facebook.com'
        },
        {
          name: 'inst',
          title: 'instagram',
          href: 'instagram.com'
        },
        {
          name: 'linked',
          title: 'linkedin',
          href: 'linkedin.com'
        },
        {
          name: 'tw',
          title: 'twitter',
          href: 'twitter.com'
        },
        {
          name: 'vk',
          title: 'vkontakte',
          href: 'vk.com'
        }
      ]
    }
  }

}
</script>

<style lang="scss">

  @import "../../assets/vars";

  .footer {
    background-color: $dark-blue;
    padding: 30px 0 15px;

    @include desktop {
      padding: 60px 0 30px;
    }

    &__top {

      @include tablet {
        display: flex;
        justify-content: space-between;
      }
    }

    &__logo {
      margin-bottom: 20px;
      text-align: center;

      .svg {
        height: 37px;
      }

      @include tablet {
        margin-top: 30px;

        .svg {
          height: 64px;
        }
      }

    }

    &__list {
      display: none;

      @include tablet {
        display: block;
      }
    }

    &__item {
      margin-bottom: 25px;
    }

    &__link {
      color: $grey;
      font-size: 17px;

      &:hover {
        color: $grey-hover;
      }
    }

    &__follow {
      margin-bottom: 30px;
      text-align: center;

      &-title {
        color: $blue-icon;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 25px;
      }

      &-share {
        align-items: flex-end;
        display: flex;
        justify-content: center;
      }

      &-icon {
        margin: 0 15px;
      }

      &-svg {
        fill: $blue-icon;
        @include trans(fill);

        &:hover {
          fill: $blue-icon-hover;
        }
        &--fb {
          width: 13px;
          height: 25px;
        }
        &--inst {
          width: 25px;
          height: 25px;
        }
        &--linked {
          width: 25px;
          height: 25px;
        }
        &--tw {
          width: 26px;
          height: 22px;
        }
        &--vk {
          width: 29px;
          height: 18px;
        }
      }

    }

    &__bottom {
      text-align: center;

      @include tablet {
        margin-top: 10px;
        text-align: left;
      }
    }

    &__copyright {
      color: $blue-copyright;
      font-family: Ubuntu;
      font-size: 16px;
    }

  }

</style>
