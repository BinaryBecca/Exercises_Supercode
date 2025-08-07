class IceCreamFlavor {
  _name: string = ""
  _price: number = 0
  _isPopular: boolean = false
  _description?: string = "undefined"

  constructor(name: string, price: number, isPopular: boolean, description: string) {
    this._name = name
    this._price = price
    this._isPopular = isPopular
    this._description = description
  }
  // → gibt den Gesamtpreis anhand der übergebenen Anzahl an Eiskugeln auf der Konsole aus
  getTotalPrice(numberOfScoops: number): void {
    const icePrice = this._price * numberOfScoops
    console.log(`Total: ${icePrice}`)
  }

  printInfo(): void {
    console.log(`Flavor ${this._name} is popular and costs ${this._price} Euro.`)
  }
  // → gibt die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist
  getLengthOfDescription(): void {
    if (this._description) {
      console.log(this._description.length)
    } else {
      console.log(0)
    }
  }
}

export default IceCreamFlavor
