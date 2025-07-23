import { differenceInYears, differenceInHours, differenceInSeconds, format } from "date-fns"
// import { de } from "date-fns/locale"

const date1 = "01.01.1970"
console.log(date1)

const jetzt = new Date()
console.log(jetzt)

console.log(differenceInYears(jetzt, date1))
console.log(differenceInHours(jetzt, date1))
console.log(differenceInSeconds(jetzt, date1))

const myBirthday = "01.01.2000"
const date2 = "07.04.2007"
console.log(differenceInYears(jetzt, myBirthday))
console.log(differenceInYears(date2, myBirthday))

//format
console.log(format(myBirthday, "'Today is a' eeee"))
