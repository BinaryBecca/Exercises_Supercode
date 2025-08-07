export enum Gender {
  female = "female",
  male = "male",
  divers = "divers",
}

class Person {
  _name: string
  _birthday: Date
  _gender: Gender

  constructor(name: string, birthday: Date, gender: Gender) {
    this._name = name
    this._birthday = birthday
    this._gender = gender
  }

  get birthday(): Date {
    return this._birthday
  }

  get gender(): Gender {
    return this._gender
  }
  set gender(value: Gender) {
    this._gender = value
  }

  get name(): string {
    return this._name
  }
  set name(value: string) {
    this._name = value
  }
}

export default Person
