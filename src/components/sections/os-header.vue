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
            router-link.btn.btn--30.btn--green(:to="{name: 'signup'}")
             | Free
             span.show-tablet &nbsp;1-month
             |  trial
        .header__registered(v-else)
          ul.header-menu
            li.header-menu__item(v-for="item in artistMenu")
              router-link.header-menu__link(:to="{name:item.link}") {{item.text}}
          .header-search
            input.header-search__input(type="text" placeholder="search")
            .header-search__icon
              os-svg.svg--white(name="search", width="13px", height="14px")
          .header-upload
            os-svg.header-upload__icon(name="upload", width="20px", height="20px")
            span.header-upload__text Upload
          os-dropdown.header-artist(:menu-items="userDropdownItems")
            .header-artist(slot="item")
              .header-artist__avatar
                img(:src="user.avatar_image")
              .header-artist__name {{user.name}}
                os-svg.header-artist__arrow(name="arrow-down", width="11px", height="6px")
          .header-notify
            .header-notify__letter(:class="{incoming: letterIscoming}")
              os-svg(name="letter", width="19px", height="14px")
            os-notifications(:notifications="notificationItems")
              .header-notify__bell(slot="item" :class="{incoming: checkNotifications()}")
                os-svg(name="bell", width="17px", height="18px")

    os-modal.modal-login(
      v-if="showLoginModal"
      modal-title="Sign In"
      @close="showLoginModal = false"
    )
      .signup__container(slot="body")
        .signup__title
          .signup__title-logo
            os-svg.signup__title-icon(name="onstage-logo-black" width="128" height="28")
          span.signup__title-text Great to see you again!
        form.form.form--signup(@submit.prevent="onSubmit")
          label.form__row
            .label.label--signup E-mail
            input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="credentials.email")
          label.form__row
            .label.label--signup Password
            input.input(type="password", v-model="credentials.password")
          .form__row.form__row--space-between.form__row--align-top
            .checkbox
              input.checkbox__input(type="checkbox"  id="terms")
              label.checkbox__label(for="terms") Remember me
            .form__links
              .form__start
                span.form__start-text Don't have an account?&nbsp;
                router-link(to="{name:'signup'}").form__start-link Get started
              router-link(to="{name:'signup'}").form__forgot Forgot Password?

          .form__row.form__row--space-between
            .form__captcha
              img(src="../../assets/img/captcha.jpg" alt="captcha")
            .form__submit
              button.btn.btn--green.btn--40(type="submit") Sign In
          .form__row.form__row--bottom
            router-link(to="").btn.btn--fb.btn--40
              os-svg(name="fb" width="14" height="26")
              span Sign In using facebook
            router-link(to="").btn.btn--google.btn--40
              os-svg(name="google" width="29" height="29")
              span Sign In using Google


</template>

<script>

import OsModal from '@/components/os-modal/os-modal.vue'
import OsSvg from '@/components/elements/os-svg'
import OsLogo from '@/components/elements/os-logo'
import OsDropdown from '@/components/elements/os-dropdown'
import OsNotifications from '@/components/elements/os-notifications'
import { mapState } from 'vuex'

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
      credentials: {
        email: '',
        password: ''
      },
      showLoginModal: false,
      letterIscoming: true,

      artistMenu: [
        {
          link: 'home',
          text: 'Home'
        },
        {
          link: '',
          text: 'Promote'
        },
        {
          link: 'events',
          text: 'My events'
        }
      ],
      userDropdownItems: [
        {
          title: 'My Profile',
          onClick: () => {
            this.$router.push({path: `/${this.user.role}/me`})
          }
        },
        {
          title: 'Edit Account',
          url: '/'
        },
        {
          title: 'Get PRO Account',
          url: '/plans'
        },
        {
          title: 'Logout',
          onClick: () => {
            this.$store.dispatch('signOut')
            sessionStorage.clear()
            this.$router.replace({name: 'index'})
          }
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
      'isLogin',
      'user'
    ])
  },

  methods: {
    onSubmit () {
      this.$store.dispatch('login', this.credentials)
        .then(() => {
          this.showLoginModal = false
          this.$router.replace({name: 'home'})
        })
        .catch((error) => {
          if (error) {
            this.showLoginModal = false
          }
        })
    },
    checkNotifications () {
      return this.notificationItems.length !== 0
    }
  }
}
</script>

<style  src="./os-header.scss" lang="scss"></style>
