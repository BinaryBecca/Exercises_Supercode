import Validator from "./Validator"
import * as EmailValidator from "email-validator"

class Customer {
  _name: string
  _email: string
  _address: string
  _postalCode: string
  _city: string

  constructor(name: string, email: string, address: string, postalCode: string, city: string) {
    this._name = name
    this._email = email
    this._address = address
    this._postalCode = postalCode
    this._city = city
  }

  get name(): string {
    return this._name
  }
  set name(value: string) {
    if (value.length > 60) {
      console.error("Name is too long!")
    } else {
      this._name = value
    }
  }

  get email(): string {
    return this._email
  }
  // set email(value: string) {
  //   if (value.includes("@") && value.includes(".")) {
  //     this._email = value
  //   }else {
  //     console.log("Email must have an '@' and '.' included")
  //   }
  // }
  set email(value: string) {
    if (Validator.validateEmail) {
      this._email = value
      console.log("e-mail has the right format")
    }
  }

  get address(): string {
    return this._address
  }
  set address(value: string) {
    this._address = value
  }

  get postalCode(): string {
    return this._postalCode
  }
  set postalCode(value: string) {
    if (value.length === 5 && value >= "00000" && value <= "99999") {
      this._postalCode = value
    } else {
      console.error("Sorry your postalcode has the wrong value")
    }
  }

  get city(): string {
    return this._city
  }
  set city(value: string) {
    this._city = value
  }
}

export default Customer

// # Testen:
const customer1 = new Customer("a", "a.a@web.de", "Der A-weg", "12345", "A-City")
console.log(customer1._email)
customer1._email
