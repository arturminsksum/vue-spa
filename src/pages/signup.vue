<template lang="pug">
  .signup
    .signup__wrap
      .signup__container
        .signup__title
          span.signup__title-text Realize your talent with
          a.signup__title-logo(href="#/")
            os-svg.signup__title-icon(name="onstage-logo-black" width="128" height="28")
        os-tabs.artist-tabs()
          os-tabs-item(name='User')
            form.form.form--signup(@submit.prevent="onSubmit", name='user-form', @keydown="formsData.user.errors.clear($event.target.name)")
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Whats your Name
                  input#name.input.input--fifty(type="text" placeholder="Ex. Frank", v-model="formsData.user.name")
                  input#surname.input.input--fifty(type="text" placeholder="Ex. Sinatra", v-model="formsData.user.surname")
                div.field-wrapper
                  span#name-error.error(v-text="formsData.user.errors.get('name')", v-if="formsData.user.errors.has('name')")
              label.form__row.direction-col
                div.field-wrapper.justify-start
                  .label.label--signup Your age
                  select.select.select--age(v-model="formsData.user.age")
                    option(v-for="n in 100") {{n+17}}
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup E-mail
                  input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.user.email")
                div.field-wrapper
                  span#email.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm E-mail
                  input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.user.confirmEmail")
                div.field-wrapper
                  span#email.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Password
                  input.input(type="password", placeholder="password", v-model="formsData.user.password")
                div.field-wrapper
                  span.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm Password
                  input.input(type="password", placeholder="password", v-model="formsData.user.confirmPassword")
                div.field-wrapper
                  span.error Error
              .form__row
                .checkbox
                  .field-wrapper
                    input.checkbox__input(type="checkbox"  id="terms", v-model="formsData.user.termsConfirm")
                    label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
                  .field-wrapper
                    span#agreement-error.error Error
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit", :disabled="formsData.user.errors.any()") Sign Up
              .form__row.form__row--bottom
                a.btn.btn--fb.btn--40(href="")
                  os-svg(name="fb" width="14" height="26")
                  span Register with facebook
                a.btn.btn--google.btn--40(href="")
                  os-svg(name="google" width="29" height="29")
                  span Register with Google
          os-tabs-item(name='Musician')
            form.form.form--signup#musician-form(@submit.prevent="onSubmit", name='musician-form')
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Tell us who you are
                  select#artist-type.select
                    option(v-for="option in ['Choose type of artist', 'Musician','DJ', 'Band', 'Session musician']", v-model="formsData.musician.type") {{option}}
                div.field-wrapper
                  span.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Whats your Name
                  input#name.input.input--fifty(type="text" placeholder="Ex. Frank", v-model="formsData.musician.name")
                  input#surname.input.input--fifty(type="text" placeholder="Ex. Sinatra", v-model="formsData.musician.surname")
                div.field-wrapper
                  span#name-error.error Error
              label.form__row.direction-col
                div.field-wrapper.justify-start
                  .label.label--signup Your age
                  select.select.select--age(v-model="formsData.musician.age")
                    option(v-for="n in 100") {{n+17}}
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup E-mail
                  input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.musician.email")
                div.field-wrapper
                  span#email.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm E-mail
                  input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.musician.confirmEmail")
                div.field-wrapper
                  span#email.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Password
                  input.input(type="password", placeholder="password", v-model="formsData.musician.password")
                div.field-wrapper
                  span.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm Password
                  input.input(type="password", placeholder="password", v-model="formsData.musician.confirmPassword")
                div.field-wrapper
                  span.error Error
              .form__row
                .checkbox
                  .field-wrapper
                    input.checkbox__input(type="checkbox"  id="terms", v-model="formsData.musician.termsConfirm")
                    label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
                  .field-wrapper
                    span.error Error
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit") Sign Up
          os-tabs-item(name='Agent')
            form.form.form--signup#agent-form(@submit.prevent="onSubmit", name='agent-form', ref='agent-form')
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Tell us who you are
                  select.select
                    option(v-for="option in ['Choose type of agent', 'Agent','Booking agency']", v-model="formsData.musician.type") {{option}}
                div.field-wrapper
                  span.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Whats your Name
                  input#name.input.input--fifty(type="text" placeholder="Ex. Frank", v-model="formsData.agent.name")
                  input#surname.input.input--fifty(type="text" placeholder="Ex. Sinatra", v-model="formsData.agent.surname")
                div.field-wrapper
                  span#name-error.error Error
              label.form__row.direction-col
                div.field-wrapper.justify-start
                  .label.label--signup Your age
                  select.select.select--age(v-model="formsData.agent.age")
                    option(v-for="n in 100") {{n+17}}
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup E-mail
                  input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.agent.email")
                div.field-wrapper
                  span#email.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm E-mail
                  input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.agent.confirmEmail")
                div.field-wrapper
                  span#email.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Password
                  input.input(type="password", placeholder="password", v-model="formsData.agent.password")
                div.field-wrapper
                  span.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm Password
                  input.input(type="password", placeholder="password", v-model="formsData.agent.confirmPassword")
                div.field-wrapper
                  span.error Error
              .form__row
                .checkbox
                  .field-wrapper
                    input.checkbox__input(type="checkbox"  id="terms", v-model="formsData.agent.termsConfirm" )
                    label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
                  .field-wrapper
                    span.error Error
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit") Sign Up
          os-tabs-item(name='Club', :selected='true')
            form.form.form--signup#club-form(@submit.prevent="onSubmit", name='club-form', ref='club-form')
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Club name
                  input.input(type="text" placeholder="Ex. Doodah King", v-model="formsData.club.name")
                div.field-wrapper
                  span.error Error
              .form__row
                label.form__col.form__col--60
                  div.field-wrapper
                    .label.label--signup Country
                    input.input(type="text" placeholder="Ex. USA", v-model="formsData.club.country")
                  div.field-wrapper
                    span.error Error
                label.form__col.form__col--40
                  div.field-wrapper
                    .label.label--between City
                    input.input(type="text" placeholder="Ex. New York", v-model="formsData.club.city")
                  div.field-wrapper
                    span.error.pl-20 Error
              .form__row
                label.form__col.form__col--60
                  .div.field-wrapper
                    .label.label--signup Adress
                    input.input(type="text" placeholder="Ex. 220202", v-model="formsData.club.adress")
                  .div.field-wrapper
                    span.error Error
                label.form__col.form__col--40
                  .div.field-wrapper
                    .label.label--between Zip Code
                    input.input(type="text" placeholder="Ex. New York", v-model="formsData.club.zip")
                  .div.field-wrapper
                    span.error.pl-20 Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup E-mail
                  input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.club.email")
                div.field-wrapper
                  span#email.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm E-mail
                  input.input(type="email", placeholder="Ex. franksinatra@example.com", v-model="formsData.club.confirmEmail")
                div.field-wrapper
                  span#email.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Password
                  input.input(type="password", placeholder="password", v-model="formsData.club.password")
                div.field-wrapper
                  span.error Error
              label.form__row.direction-col
                div.field-wrapper
                  .label.label--signup Confirm Password
                  input.input(type="password", placeholder="password", v-model="formsData.club.confirmPassword")
                div.field-wrapper
                  span.error Error
              .form__row
                .checkbox
                  .field-wrapper
                    input.checkbox__input(type="checkbox"  id="terms", v-model="formsData.club.termsConfirm" )
                    label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
                  .field-wrapper
                    span.error Error
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
import axios from 'axios'

class Errors {
  constructor () {
    this.errors = {}
  }

  get (field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  /**
   * check if the errors exists for given field
   * @param String
   */

  has (field) {
    return this.errors.hasOwnProperty(field)
  }

  /**
   *  Ckeck if any errors
   */

  any () {
    return Object.keys(this.errors).length > 0
  }

  /**
   * record new errors
   */

  record (errors) {
    this.errors = errors
  }

  /**
   * clear field
   */

  clear (field) {
    if (field) {
      delete this.errors[field]
      return
    }
    this.errors = {}
  }
}

class Form {
  constructor (data) {
    this.originalData = data
    for (let field in data) {
      this[field] = data[field]
    }

    this.errors = new Errors()
  }

  data () {
    let data = {}

    for (let prop in this.originalData) {
      data[prop] = this[prop]
    }

    return data
  }

  reset () {
    for (let field in this.originalData) {
      this[field] = ''
    }
    this.errors.clear()
  }

  submit (requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess(response.data)
          resolve(response.data)
        })
        .catch(error => {
          this.onFail(error.response.data)
          reject(error.response.data)
        })
    })
  }

  onSuccess (data) {
    this.reset()
  }

  onFail (errors) {
    this.errors.record(errors)
  }
}
export default {
  name: 'OsModalReg',

  components: {
    OsSvg,
    OsTabs,
    OsTabsItem
  },

  data () {
    return {
      usersTypes: {
        user: 'User',
        musician: 'Musician',
        agent: 'Agent',
        club: 'Club'
      },
      formsData: {
        user: new Form({
          name: '',
          surname: '',
          age: '18',
          email: '',
          password: '',
          confirmEmail: '',
          confirmPassword: '',
          termsConfirm: false
        }),
        musician: new Form({
          type: '',
          name: '',
          surname: '',
          age: '18',
          email: '',
          password: '',
          confirmEmail: '',
          confirmPassword: '',
          termsConfirm: false
        }),
        agent: new Form({
          type: '',
          name: '',
          surname: '',
          age: '18',
          email: '',
          password: '',
          confirmEmail: '',
          confirmPassword: '',
          termsConfirm: false
        }),
        club: new Form({
          name: '',
          country: '',
          city: '',
          adress: '',
          zip: '',
          email: '',
          password: '',
          confirmEmail: '',
          confirmPassword: '',
          termsConfirm: false
        })
      },
      availableErrors: {
        emptyName: 'Please enter your name',
        emptySurname: 'Please enter your surname',
        emptyEmail: 'Please enter your email',
        emptyConfirmEmail: 'Please confirm your email',
        emptyPassword: 'Please enter your password',
        emptyConfirmPassword: 'Please confirm your password',
        emptyCountry: 'Please enter your country',
        emptyCity: 'Please enter your country',
        emptyAdress: 'Please enter your adress',
        emptyZip: 'Please enter your zip code',
        errorEmail: 'Seems your email is incorrect, ex. youremail@domain.com',
        errorConfirmEmail: 'Seems your emails do not match',
        errorConfirmPassword: 'Seems your passwords do not match',
        unCheckedTerms: 'You must accept the terms'
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
    },
    getFields (userType) {
      return this.getForm(userType)
    },
    getForm (userType) {
      console.log()
    }
  }
}

</script>
