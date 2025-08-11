import { Gender } from "../enum/Gender"

class Actor {
  _firstName: string
  _lastName: string
  _birthday: string
  _gender: Gender

  constructor(firstName: string, lastName: string, birthday: string, gender: Gender) {
    this._firstName = firstName
    this._lastName = lastName
    this._birthday = birthday
    this._gender = gender
  }
}
export default Actor
