import { Car } from "./main"
import { Driver } from "./main"

const car1 = new Car("VW", 2001, 130)
const car2 = new Car("BMW", 2001, 130)

const driver1 = new Driver("Hans", "Willy", 12, car1)
console.log(driver1)

const driver2 = new Driver("Willy", "Hans", 201, car2)
console.log(driver2)
