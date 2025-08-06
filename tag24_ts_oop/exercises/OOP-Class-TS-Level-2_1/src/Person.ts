export class Person {
  _id: number
  _firstName: string
  _lastName: string
  _birthday: number

  constructor(id: number, firstName: string, lastName: string, birthday: number) {
    this._id = id
    this._firstName = firstName
    this._lastName = lastName
    this._birthday = birthday
  }
}
