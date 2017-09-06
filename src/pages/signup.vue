<template lang="pug">
  .signup
    .signup__wrap
      .signup__container
        .signup__title
          span.signup__title-text Realize your talent with
          router-link.signup__title-logo(:to="{name: 'index'}")
            os-svg.signup__title-icon(name="onstage-logo-black" width="128" height="28")
        os-tabs.artist-tabs()
          os-tabs-item(name='User', :forms-data="formsData", :selected='true')
            form.form.form--signup(@submit.prevent="formsData.user.submit", name='user-form', @keydown="formsData.user.errors.clear($event.target.id)")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Whats your Name
                  input#name.input.input--fifty(name ="name", type="text" placeholder="Ex. Frank", v-model="formsData.user.name", @blur="formsData.user.errors.checkField($event)", :class="{required:formsData.user.errors.has('name')}")
                  input#surname.input.input--fifty(name ="surname", type="text" placeholder="Ex. Sinatra", v-model="formsData.user.surname", @blur="formsData.user.errors.checkField($event)", :class="{required:formsData.user.errors.has('surname')}")
                div.field-wrapper(v-show="formsData.user.errors.has('name') || formsData.user.errors.has('surname')")
                  span#name-error.error(v-text="formsData.user.errors.get('name') || formsData.user.errors.get('surname')")
              label.form__row.direction-col
                div.field-wrapper.justify-start
                  .label.label--signup Your age
                  select#age.select.select--age(name="age", v-model="formsData.user.age")
                    option(v-for="n in 100") {{n+17}}
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup E-mail
                  input#email.input(name="email", type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.user.email", @blur="formsData.user.errors.checkField($event)", :class="{required:formsData.user.errors.has('email')}")
                div.field-wrapper(v-show="formsData.user.errors.has('email')")
                  span#email-error.error(v-text="formsData.user.errors.get('email')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm E-mail
                  input.input#emailConfirm(name="emailConfirm", type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.user.emailConfirm", @blur="formsData.user.errors.checkField($event)", :class="{required:formsData.user.errors.has('emailConfirm')}")
                div.field-wrapper(v-show="formsData.user.errors.has('emailConfirm')")
                  span#confirm-email-error.error(v-text="formsData.user.errors.get('emailConfirm')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Password
                  input.input#password(name="password", type="password", placeholder="Password", v-model="formsData.user.password", @blur="formsData.user.errors.checkField($event)", :class="{required:formsData.user.errors.has('password')}")
                div.field-wrapper(v-show="formsData.user.errors.has('password')")
                  span#password-error.error(v-text="formsData.user.errors.get('password')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm Password
                  input#passwordConfirm.input(name="passwordConfirm", type="password", placeholder="Password", v-model="formsData.user.passwordConfirm", @blur="formsData.user.errors.checkField($event)", :class="{required:formsData.user.errors.has('passwordConfirm')}")
                div.field-wrapper(v-show="formsData.user.errors.has('passwordConfirm')")
                  span#confirm-password-error.error(v-text="formsData.user.errors.get('passwordConfirm')")
              .form__row
                .checkbox
                  .field-wrapper
                    input#terms.checkbox__input(type="checkbox", v-model="formsData.user.termsConfirm", @click="formsData.user.errors.isChecked($event.target)")
                    label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
                  .field-wrapper(v-show="!formsData.user.termsConfirm")
                    span#terms-error.error(v-text="formsData.user.errors.get('terms')")
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit", @click.prevent="formsData.user.submit") Sign Up
              .form__row.form__row--bottom
                a.btn.btn--fb.btn--40(href="")
                  os-svg(name="fb" width="14" height="26")
                  span Register with facebook
                a.btn.btn--google.btn--40(href="")
                  os-svg(name="google" width="29" height="29")
                  span Register with Google
          os-tabs-item(name='Musician', :forms-data="formsData")
            form.form.form--signup#musician-form(@submit.prevent="formsData.musician.submit", name='musician-form', @keydown="formsData.musician.errors.clear($event.target.id)")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Tell us who you are
                  select#type.select(@change="formsData.musician.errors.checkOption($event.target)", v-model="formsData.musician.type")
                    option(v-for="option in ['Choose type of artist', 'Musician','DJ', 'Band', 'Session musician']") {{option}}
                div.field-wrapper(v-show="formsData.musician.errors.has('type')")
                  span.error(v-text="formsData.musician.errors.get('type')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Whats your Name
                  input#name.input.input--fifty(type="text" placeholder="Ex. Frank", v-model="formsData.musician.name", @blur="formsData.musician.errors.checkField($event)", :class="{required:formsData.musician.errors.has('name')}")
                  input#surname.input.input--fifty(type="text" placeholder="Ex. Sinatra", v-model="formsData.musician.surname", @blur="formsData.musician.errors.checkField($event)", :class="{required:formsData.musician.errors.has('surname')}")
                div.field-wrapper(v-show="formsData.musician.errors.has('name') || formsData.musician.errors.has('surname')")
                  span#name-error.error(v-text="formsData.musician.errors.get('name') || formsData.musician.errors.get('surname')")
              label.form__row.direction-col
                div.field-wrapper.justify-start
                  .label.label--signup Your age
                  select.select.select--age(v-model="formsData.musician.age")
                    option(v-for="n in 100") {{n+17}}
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup E-mail
                  input#email.input(name="email", type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.musician.email", @blur="formsData.musician.errors.checkField($event)", :class="{required:formsData.musician.errors.has('email')}")
                div.field-wrapper(v-show="formsData.musician.errors.has('email')")
                  span#email-error.error(v-text="formsData.musician.errors.get('email')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm E-mail
                  input.input#emailConfirm(name="emailConfirm", type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.musician.emailConfirm", @blur="formsData.musician.errors.checkField($event)", :class="{required:formsData.musician.errors.has('emailConfirm')}")
                div.field-wrapper(v-show="formsData.musician.errors.has('emailConfirm')")
                  span#confirm-email-error.error(v-text="formsData.musician.errors.get('emailConfirm')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Password
                  input.input#password(name="password", type="password", placeholder="Password", v-model="formsData.musician.password", @blur="formsData.musician.errors.checkField($event)", :class="{required:formsData.musician.errors.has('password')}")
                div.field-wrapper(v-show="formsData.musician.errors.has('password')")
                  span#password-error.error(v-text="formsData.musician.errors.get('password')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm Password
                  input#passwordConfirm.input(name="passwordConfirm", type="password", placeholder="Password", v-model="formsData.musician.passwordConfirm", @blur="formsData.musician.errors.checkField($event)", :class="{required:formsData.musician.errors.has('passwordConfirm')}")
                div.field-wrapper(v-show="formsData.musician.errors.has('passwordConfirm')")
                  span#confirm-password-error.error(v-text="formsData.musician.errors.get('passwordConfirm')")
              .form__row
                .checkbox
                  .field-wrapper
                    input#terms.checkbox__input(type="checkbox", v-model="formsData.musician.termsConfirm", @click="formsData.musician.errors.isChecked($event.target)")
                    label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
                  .field-wrapper(v-show="!formsData.musician.termsConfirm")
                    span#terms-error.error(v-text="formsData.musician.errors.get('terms')")
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit") Sign Up
          os-tabs-item(name='Agent', :forms-data="formsData")
            form.form.form--signup#agent-form(@submit.prevent="formsData.agent.submit", name='agent-form', @keydown="formsData.agent.errors.clear($event.target.id)")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Tell us who you are
                  select#type.select(@change="formsData.agent.errors.checkOption($event.target)", v-model="formsData.agent.type")
                    option(v-for="option in ['Choose type of agent', 'Agent','Booking agency']") {{option}}
                div.field-wrapper(v-show="formsData.agent.errors.has('type')")
                  span.error(v-text="formsData.agent.errors.get('type')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Whats your Name
                  input#name.input.input--fifty(type="text" placeholder="Ex. Frank", v-model="formsData.agent.name", @blur="formsData.agent.errors.checkField($event)", :class="{required:formsData.agent.errors.has('name')}")
                  input#surname.input.input--fifty(type="text" placeholder="Ex. Sinatra", v-model="formsData.agent.surname", @blur="formsData.agent.errors.checkField($event)", :class="{required:formsData.agent.errors.has('surname')}")
                div.field-wrapper(v-show="formsData.agent.errors.has('name') || formsData.agent.errors.has('surname')")
                  span#name-error.error(v-text="formsData.agent.errors.get('name') || formsData.agent.errors.get('surname')")
              label.form__row.direction-col
                div.field-wrapper.justify-start
                  .label.label--signup Your age
                  select.select.select--age(v-model="formsData.agent.age")
                    option(v-for="n in 100") {{n+17}}
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup E-mail
                  input#email.input(name="email", type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.agent.email", @blur="formsData.agent.errors.checkField($event)", :class="{required:formsData.agent.errors.has('email')}")
                div.field-wrapper(v-show="formsData.agent.errors.has('email')")
                  span#email-error.error(v-text="formsData.agent.errors.get('email')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm E-mail
                  input.input#emailConfirm(name="emailConfirm", type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.agent.emailConfirm", @blur="formsData.agent.errors.checkField($event)", :class="{required:formsData.agent.errors.has('emailConfirm')}")
                div.field-wrapper(v-show="formsData.agent.errors.has('emailConfirm')")
                  span#confirm-email-error.error(v-text="formsData.agent.errors.get('emailConfirm')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Password
                  input.input#password(name="password", type="password", placeholder="Password", v-model="formsData.agent.password", @blur="formsData.agent.errors.checkField($event)", :class="{required:formsData.agent.errors.has('password')}")
                div.field-wrapper(v-show="formsData.agent.errors.has('password')")
                  span#password-error.error(v-text="formsData.agent.errors.get('password')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm Password
                  input#passwordConfirm.input(name="passwordConfirm", type="password", placeholder="Password", v-model="formsData.agent.passwordConfirm", @blur="formsData.agent.errors.checkField($event)", :class="{required:formsData.agent.errors.has('passwordConfirm')}")
                div.field-wrapper(v-show="formsData.agent.errors.has('passwordConfirm')")
                  span#confirm-password-error.error(v-text="formsData.agent.errors.get('passwordConfirm')")
              .form__row
                .checkbox
                  .field-wrapper
                    input#terms.checkbox__input(type="checkbox", v-model="formsData.agent.termsConfirm", @click="formsData.agent.errors.isChecked($event.target)")
                    label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
                  .field-wrapper(v-show="!formsData.agent.termsConfirm")
                    span#terms-error.error(v-text="formsData.agent.errors.get('terms')")
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit") Sign Up
          os-tabs-item(name='Club', :forms-data="formsData")
            form.form.form--signup#club-form(@submit.prevent="formsData.club.submit", name='club-form', @keydown="formsData.club.errors.clear($event.target.id)")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Club name
                  input#name.input(type="text" placeholder="Ex. Doodah King", v-model="formsData.club.name", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('name')}")
                div.field-wrapper(v-show="formsData.club.errors.has('name')")
                  span.error(v-text="formsData.club.errors.get('name')")
              .form__row
                label.form__col.form__col--60
                  div.field-wrapper
                    .label.label--signup Country
                    input#country.input(type="text" placeholder="Ex. USA", v-model="formsData.club.country", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('country')}")
                  div.field-wrapper(v-show="formsData.club.errors.has('country')")
                    span.error(v-text="formsData.club.errors.get('country')")
                label.form__col.form__col--40
                  div.field-wrapper
                    .label.label--between City
                    input#city.input(type="text" placeholder="Ex. New York", v-model="formsData.club.city", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('city')}")
                  div.field-wrapper(v-show="formsData.club.errors.has('city')")
                    span.error.pl-20(v-text="formsData.club.errors.get('city')")
              .form__row
                label.form__col.form__col--60
                  .div.field-wrapper
                    .label.label--signup Adress
                    input#adress.input(type="text" placeholder="Ex. 220202", v-model="formsData.club.adress", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('adress')}")
                  .div.field-wrapper(v-show="formsData.club.errors.has('adress')")
                    span.error(v-text="formsData.club.errors.get('adress')")
                label.form__col.form__col--40
                  .div.field-wrapper
                    .label.label--between Zip Code
                    input#zip.input(type="text" placeholder="Ex. New York", v-model="formsData.club.zip", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('zip')}")
                  .div.field-wrapper(v-show="formsData.club.errors.has('zip')")
                    span.error.pl-20(v-text="formsData.club.errors.get('zip')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup E-mail
                  input#email.input(name="email", type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.club.zip", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('email')}")
                div.field-wrapper(v-show="formsData.club.errors.has('email')")
                  span#email-error.error(v-text="formsData.club.errors.get('email')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm E-mail
                  input.input#emailConfirm(name="emailConfirm", type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.club.emailConfirm", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('emailConfirm')}")
                div.field-wrapper(v-show="formsData.club.errors.has('emailConfirm')")
                  span#confirm-email-error.error(v-text="formsData.club.errors.get('emailConfirm')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Password
                  input.input#password(name="password", type="password", placeholder="Password", v-model="formsData.club.password", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('password')}")
                div.field-wrapper(v-show="formsData.club.errors.has('password')")
                  span#password-error.error(v-text="formsData.club.errors.get('password')")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm Password
                  input#passwordConfirm.input(name="passwordConfirm", type="password", placeholder="Password", v-model="formsData.club.passwordConfirm", @blur="formsData.club.errors.checkField($event)", :class="{required:formsData.club.errors.has('passwordConfirm')}")
                div.field-wrapper(v-show="formsData.club.errors.has('passwordConfirm')")
                  span#confirm-password-error.error(v-text="formsData.club.errors.get('passwordConfirm')")
              .form__row
                .checkbox
                  .field-wrapper
                    input#terms.checkbox__input(type="checkbox", v-model="formsData.club.termsConfirm", @click="formsData.club.errors.isChecked($event.target)")
                    label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
                  .field-wrapper(v-show="!formsData.club.termsConfirm")
                    span#terms-error.error(v-text="formsData.club.errors.get('terms')")
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit") Sign Up
</template>

<script>

import OsSvg from '@/components/elements/os-svg'
import OsTabs from '@/components/os-tabs/os-tabs'
import OsTabsItem from '@/components/os-tabs/os-tabs-item'
import jwtDecode from 'jwt-decode'
import Form from '@/helpers/validation.js'

export default {
  name: 'OsModalReg',

  components: {
    OsSvg,
    OsTabs,
    OsTabsItem
  },

  data () {
    return {
      formsData: {
        user: new Form({
          name: '',
          surname: '',
          age: '18',
          email: '',
          password: '',
          emailConfirm: '',
          passwordConfirm: '',
          termsConfirm: true
        }),
        musician: new Form({
          type: 'Choose type of artist',
          name: '',
          surname: '',
          age: '18',
          email: '',
          password: '',
          emailConfirm: '',
          passwordConfirm: '',
          termsConfirm: true
        }),
        agent: new Form({
          type: 'Choose type of agent',
          name: '',
          surname: '',
          age: '18',
          email: '',
          password: '',
          emailConfirm: '',
          passwordConfirm: '',
          termsConfirm: true
        }),
        club: new Form({
          name: '',
          country: '',
          city: '',
          adress: '',
          zip: '',
          email: '',
          password: '',
          emailConfirm: '',
          passwordConfirm: '',
          termsConfirm: true
        })
      }
    }
  },
  methods: {
    onSubmit () {
      this.axios.post('http://165.227.140.41:1323/api/users/login', {
        email: this.formItems[0].model,
        password: this.formItems[2].model
      })
        .then((response) => {
          let token = response.data.token
          sessionStorage.setItem('token', token)
          this.$store.dispatch('setUser', {user: jwtDecode(token)})
          this.$router.replace({ path: '/artist' })
        })
        .catch((error) => {
          if (error) {
          }
        })
    }
  },

  mounted () {
    document.body.style.overflow = 'hidden'
  }
}

</script>
