import Animal from "./classes/Animal"
import Person from "./classes/Person"
import { Gender } from "./classes/Person"

// Beispiel clg : )
const person = new Person("Peter", new Date("2000-01-01"), Gender.female)
console.log(person.gender)
