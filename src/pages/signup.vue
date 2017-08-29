<template lang="pug">
  .signup
    .signup__wrap
      .signup__container
        .signup__title
          span.signup__title-text Realize your talent with
          a.signup__title-logo(href="#/")
            os-svg.signup__title-icon(name="onstage-logo-black" width="128" height="28")
        os-tabs.artist-tabs
          os-tabs-item(name='User')
            form.form.form--signup(@submit.prevent="onSubmit", name='user-form', ref='user-form')
              label.form__row
                .label.label--signup Whats your Name
                input.input.input--fifty(type="text" placeholder="Ex. Frank")
                input.input.input--fifty(type="text" placeholder="Ex. Sinatra")
              label.form__row
                .label.label--signup Your age
                select.select.select--age
                  option(v-for="n in 100") {{n+17}}
              label.form__row(v-for="item in formItems")
                .label.label--signup {{item.label}}
                input.input(v-if="item.type === 'email'" type="email", :placeholder="item.placeholder", v-model="item.model")
                input.input(v-else type="password", :placeholder="item.placeholder", v-model="item.model")
              .form__row
                .checkbox
                  input.checkbox__input(type="checkbox"  id="terms")
                  label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit") Sign Up
              .form__row.form__row--bottom
                a.btn.btn--fb.btn--40(href="")
                  os-svg(name="fb" width="14" height="26")
                  span Register with facebook
                a.btn.btn--google.btn--40(href="")
                  os-svg(name="google" width="29" height="29")
                  span Register with Google
          os-tabs-item(name='Musician')
            form.form.form--signup#musician-form(@submit.prevent="onSubmit", name='musician-form', ref='musician-form')
              label.form__row
                .label.label--signup Tell us who you are
                select.select
                  option(v-for="option in ['Choose type of artist', 'Musician','DJ', 'Band', 'Session musician']") {{option}}
              label.form__row
                .label.label--signup Whats your Name
                input.input.input--fifty(type="text" placeholder="Ex. Frank")
                input.input.input--fifty(type="text" placeholder="Ex. Sinatra")
              label.form__row
                .label.label--signup Your age
                select.select.select--age
                  option(v-for="n in 100") {{n+17}}
              label.form__row(v-for="item in formItems")
                .label.label--signup {{item.label}}
                input.input(v-if="item.type === 'email'" type="email", :placeholder="item.placeholder", v-model="item.model")
                input.input(v-else type="password", :placeholder="item.placeholder", v-model="item.model")
              .form__row
                .checkbox
                  input.checkbox__input(type="checkbox"  id="terms")
                  label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit") Sign Up
          os-tabs-item(name='Agent')
            form.form.form--signup#agent-form(@submit.prevent="onSubmit", name='agent-form', ref='agent-form')
              label.form__row
                .label.label--signup Tell us who you are
                select.select
                  option(v-for="option in ['Choose type of agent', 'Agent','Booking agency']") {{option}}
              label.form__row
                .label.label--signup Whats your Name
                input.input.input--fifty(type="text" placeholder="Ex. Frank")
                input.input.input--fifty(type="text" placeholder="Ex. Sinatra")
              label.form__row
                .label.label--signup Your age
                select.select.select--age
                  option(v-for="n in 100") {{n+17}}
              label.form__row(v-for="item in formItems")
                .label.label--signup {{item.label}}
                input.input(v-if="item.type === 'email'" type="email", :placeholder="item.placeholder", v-model="item.model")
                input.input(v-else type="password", :placeholder="item.placeholder", v-model="item.model")
              .form__row
                .checkbox
                  input.checkbox__input(type="checkbox"  id="terms")
                  label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
              .form__row.form__row--space-between
                .form__captcha
                  img(src="../assets/img/captcha.jpg" alt="captcha")
                .form__submit
                  button.btn.btn--green.btn--40(type="submit") Sign Up
          os-tabs-item(name='Club', :selected='true')
            form.form.form--signup#club-form(@submit.prevent="onSubmit", name='club-form', ref='club-form')
              label.form__row
                .label.label--signup Club name
                input.input(type="text" placeholder="Ex. Doodah King")
              .form__row
                label.form__col.form__col--60
                  .label.label--signup Country
                  input.input(type="text" placeholder="Ex. USA")
                label.form__col.form__col--40
                  .label.label--between City
                  input.input(type="text" placeholder="Ex. New York")
              .form__row
                label.form__col.form__col--60
                  .label.label--signup Adress
                  input.input(type="text" placeholder="Ex. 220202")
                label.form__col.form__col--40
                  .label.label--between Zip Code
                  input.input(type="text" placeholder="Ex. New York")
              label.form__row(v-for="item in formItems")
                .label.label--signup {{item.label}}
                input.input(v-if="item.type === 'email'" type="email", :placeholder="item.placeholder", v-model="item.model")
                input.input(v-else type="password", :placeholder="item.placeholder", v-model="item.model")
              .form__row
                .checkbox
                  input.checkbox__input(type="checkbox"  id="terms")
                  label.checkbox__label(for="terms") I accept the terms of use of the website, privacy policy and licensing terms
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
import axios from 'axios'
import jwtDecode from 'jwt-decode'

// class Errors {
//   constructor () {
//     this.errors = {}
//   }

//   /**
//    * check if the errors exists for given field
//    * @param String
//    */

//   hasField (field) {
//     return this.errors.hasOwnProperty(field)
//   }

//   /**
//    *  Ckeck if any errors
//    */

//   any () {
//     return Object.keys(this.errors).length > 0
//   }

//   /**
//    * record new errors
//    */

//   record (errors) {
//     this.errors = errors
//   }

//   /**
//    * clear field
//    */

//   clear (field) {
//     if (field) {
//       delete this.errors[field]
//       return
//     }
//     this.errors = {}
//   }
// }

// class Form {
//   constructor (data) {
//     this.originalData = data
//     for (let field in data) {
//       this[field] = data[field]
//     }

//     this.errors = new Errors()
//   }

//   data () {
//     let data = {}

//     for (let prop in this.originalData) {
//       data[prop] = this[prop]
//     }

//     return data
//   }

//   reset () {
//     for (let field in this.originalData) {
//       this[field] = ''
//     }
//     this.errors.clear()
//   }

//   submit (requestType, url) {
//     return new Promise((resolve, reject) => {
//       axios[requestType](url, this.data())
//         .then(response => {
//           this.onSuccess(response.data)
//           resolve(response.data)
//         })
//         .catch(error => {
//           this.onFail(error.response.data)
//           reject(error.response.data)
//         })
//     })
//   }

//   onSuccess (data) {
//     this.reset()
//   }

//   onFail (errors) {
//     this.errors.record(errors)
//   }
// }
export default {
  name: 'OsModalReg',

  components: {
    OsSvg,
    OsTabs,
    OsTabsItem
  },

  data () {
    return {
      formslist: [],
      formItems: [
        {
          label: 'E-mail',
          type: 'email',
          placeholder: 'Ex. franksinatra@example.com',
          model: ''
        },
        {
          label: 'Confirm E-mail',
          type: 'email',
          placeholder: 'Ex. franksinatra@example.com',
          model: ''
        },
        {
          label: 'Password',
          type: 'password',
          placeholder: '',
          model: ''
        },
        {
          label: 'Confirm Password',
          type: 'password',
          placeholder: '',
          model: ''
        }
      ],
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
  mounted () {
    console.log(document.querySelectorAll('form'))
  },
  methods: {
    onSubmit () {
      axios.post('http://165.227.140.41:1323/api/users/login', {
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
