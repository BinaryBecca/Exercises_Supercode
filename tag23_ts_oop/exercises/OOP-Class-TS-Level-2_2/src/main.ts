export class Car {
  _brand: string
  _constructionYear: number
  _currentSpeed: number

  constructor(brand: string, constructionYear: number, currentSpeed: number) {
    this._brand = brand
    this._constructionYear = constructionYear
    this._currentSpeed = currentSpeed
  }
}

export class Driver {
  _firstName: string
  _lastName: string
  _age: number
  _car: Car

  constructor(firstName: string, lastName: string, age: number, car: Car) {
    this._firstName = firstName
    this._lastName = lastName
    this._age = age
    this._car = car
  }
}
