import Car from "./Car"
import { CarType } from "./CarType"

class Driver {
  _firstName: string
  _lastName: string
  _age: number
  _car: Car
  private _licenseFromYear: number

  constructor(firstName: string, lastName: string, age: number, car: Car, licenseFromYear: number) {
    this._firstName = firstName
    this._lastName = lastName
    this._age = age
    this._car = car
    this._licenseFromYear = licenseFromYear
  }
  get licenseFromYear(): number {
    return this._licenseFromYear
  }

  getCarType(): CarType {
    // soll CarType des aktuellen Autos(car) ausgeben
    // cartype von car
    return this._car._carType
  }
}

export default Driver
