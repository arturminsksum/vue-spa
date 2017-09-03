export default class Errors {
  constructor () {
    this.errors = {}
    this.availableErrors = {
      name: 'Please enter your name',
      surname: 'Please enter your surname',
      password: 'Please enter your password',
      country: 'Please enter your country',
      city: 'Please enter your country',
      adress: 'Please enter your adress',
      zip: 'Please enter your zip code',
      email: 'Seems your email is incorrect, ex. youremail@domain.com',
      emailConfirm: 'Seems your emails do not match',
      passwordConfirm: 'Seems your passwords do not match',
      terms: 'You must accept the terms',
      empty: 'Please fill this field',
      type: 'Please choose your type'
    }
  }
  /**
   * check value of inputs, if it's empty - record error
   */
  checkField (event) {
    if (!event.target.value) {
      this.record(event.target.id, this.availableErrors.empty)
    }
  }
  isChecked (checkbox) {
    if (!checkbox.checked) {
      this.record(event.target.id, this.availableErrors.terms)
    }
  }

  checkOption (target) {
    const defaultValue = target.children[0].text
    if (target.value === defaultValue) {
      this.record(target.id, this.availableErrors.artistType)
    } else {
      this.clear(target.id)
    }
  }
  checkEmail (value) {
    // const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // return value.test(reg)
  }

  get (field) {
    if (this.errors[field]) {
      return this.errors[field]
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

  record (field, error) {
    Vue.set(this.errors, field, error)
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