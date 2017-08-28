<template lang="pug">
  header.header
    .container
      .header__wrap
        .header__logo
          os-logo
        .header__actions(v-if="!isLogin")
          .header__signin
            a.link.link--white(href='' @click.prevent="showLoginModal = true") Sign in
          .header__register
            nuxt-link.btn.btn--30.btn--green(to="/signup")
             | Free
             span.show-tablet &nbsp;1-month
             |  trial
        .header__registered(v-else)
          ul.header-menu
            li.header-menu__item(v-for="item in artistMenu")
              nuxt-link.header-menu__link(:to="`/${item.link}`") {{item.text}}
          .header-search
            input.header-search__input(type="text" placeholder="search")
            os-svg.header-search__icon(name="search", width="13px", height="14px")
          .header-upload
            os-svg.header-upload__icon(name="upload", width="20px", height="20px")
            span.header-upload__text Upload
          .header-artist
            .header-artist__avatar
              img(src="~assets/img/artist.jpg")
            .header-artist__name(@click.prevent="toggleUserDropdown") Artist Name
              os-svg.header-artist__arrow(name="arrow-down", width="11px", height="6px", :class="{'dropdown-opened': dropdownIsOpened}")
              os-dropdown(:menu-items="userDropdownItems", :is-opened="dropdownIsOpened")
          .header-notify
            .header-notify__letter(:class="{incoming: letterIscoming}")
              os-svg(name="letter", width="19px", height="14px")
            .header-notify__bell(@click.prevent="toggleNotifications", :class="{incoming: checkNotifications()}")
              os-svg(name="bell", width="17px", height="18px")
              os-notifications(:notifications="notificationItems", :is-opened="notificationsIsOpened")
    os-modal.modal-login(
      v-if="showLoginModal"
      modal-title="Sign In"
      @close="showLoginModal = false"
    )
      .signup__container(slot="body")
        .signup__title
          nuxt-link.signup__title-logo(to="/")
            os-svg.signup__title-icon(name="onstage-logo-black" width="128" height="28")
          span.signup__title-text Great to see you again!
        form.form.form--signup
          label.form__row
            .label.label--signup E-mail
            input.input(type="email", placeholder="Ex. franksinatra@example.com")
          label.form__row
            .label.label--signup Password
            input.input(type="password")
          .form__row.form__row--space-between.form__row--align-top
            .checkbox
              input.checkbox__input(type="checkbox"  id="terms")
              label.checkbox__label(for="terms") Remember me
            .form__links
              .form__start
                span.form__start-text Don't have an account?&nbsp;
                nuxt-link(to="/signup").form__start-link Get started
              nuxt-link(to="/signup").form__forgot Forgot Password?

          .form__row.form__row--space-between
            .form__captcha
              img(src="~assets/img/captcha.jpg" alt="captcha")
            .form__submit
              button.btn.btn--green.btn--40(type="button" @click="getData") Sign In
          .form__row.form__row--bottom
            a.btn.btn--fb.btn--40(href="")
              os-svg(name="fb" width="14" height="26")
              span Sign In using facebook
            a.btn.btn--google.btn--40(href="")
              os-svg(name="google" width="29" height="29")
              span Sign In using Google


</template>

<script>

import OsModal from '~components/os-modal/os-modal.vue'
import OsSvg from '~components/elements/os-svg'
import OsLogo from '~components/elements/os-logo'
import OsDropdown from '~components/elements/os-dropdown'
import OsNotifications from '~components/elements/os-notifications'
import { mapState } from 'vuex'
import axios from 'axios'

export default {

  components: {
    OsModal,
    OsSvg,
    OsLogo,
    OsDropdown,
    OsNotifications
  },

  name: 'OsHeader',

  data () {
    return {
      showLoginModal: false,
      dropdownIsOpened: false,
      notificationsIsOpened: false,
      letterIscoming: true,

      artistMenu: [
        {
          link: 'home',
          text: 'Home'
        },
        {
          link: 'promote',
          text: 'Promote'
        },
        {
          link: 'events',
          text: 'My events'
        }
      ],
      userDropdownItems: [
        {
          title: 'Edit Account',
          url: '/'
        },
        {
          title: 'Logout',
          url: '/'
        }
      ],
      notificationItems: [
        {
          name: 'John Smith',
          url: '/',
          description: 'follow you',
          time: 1503778775231
        },
        {
          name: 'John Smith',
          url: '/',
          description: 'follow you',
          time: 1503778775231
        }
      ]
    }
  },

  computed: {
    ...mapState([
      'isLogin'
    ])
  },

  methods: {

    async getData () {
      try {
        const response = await axios.get('/cfg.json')
        this.showLoginModal = false
        this.$router.replace({ path: '/artist' })
        console.log(response)
      } catch (error) {
        this.showLoginModal = false
        this.$router.replace({ path: '/error' })
      }
    },
    toggleUserDropdown () {
      this.dropdownIsOpened = !this.dropdownIsOpened
    },
    toggleNotifications () {
      this.notificationsIsOpened = !this.notificationsIsOpened
    },
    checkNotifications () {
      return this.notificationItems.length !== 0
    }
  }
}
</script>

<style  src="./os-header.scss" lang="scss"></style>
