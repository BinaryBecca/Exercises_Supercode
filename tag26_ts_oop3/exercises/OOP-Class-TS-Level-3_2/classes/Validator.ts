import * as EmailValidator from "email-validator"
console.log(EmailValidator.validate("test@email.com")) //true

class Validator {
  static validateEmail: boolean
  // EmailValidator.validate("test@email.com")
}

export default Validator
