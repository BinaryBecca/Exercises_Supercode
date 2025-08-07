import { CarType } from "./CarType"

class Car {
  _brand: string
  private _constructionYear: number
  _currentSpeed: number
  _carType: CarType

  constructor(brand: string, constructionYear: number, currentSpeed: number, carType: CarType) {
    this._brand = brand
    this._constructionYear = constructionYear
    this._currentSpeed = currentSpeed
    this._carType = carType
  }
  get constructionYear(): number {
    return this._constructionYear
  }

  getSpeedInfo(): string {
    if (this._currentSpeed <= 40) {
      return "Driving slowly"
    } else if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
      return "Driving normally"
    } else if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
      return "Driving fast"
    } else if (this._currentSpeed > 120 && this._currentSpeed <= 190) {
      return "Driving really fast"
    } else {
      return "WTF"
    }
  }
}

export default Car
