import { SchoolClass } from "../../OOP-Class-TS-Level-1_2/src/schoolclass"
import { Person } from "./Person"

//Erstelle eine Schulklasse und füge mehrere Personen hinzu
//du kannst eine Schleife zur Erstellung von den Personen benutzen.

const anotherSchoolClass = new SchoolClass(4, "another schoolclass")
// ! class SchoolClass

const person1 = new Person(1, "Henry", "H", 1999)
const person2 = new Person(2, "Henrike", "H", 1998)
const person3 = new Person(3, "Henriette", "H", 1997)
const person4 = new Person(4, "Hen", "H", 1996)

const allPersons = [person1, person2, person3, person4]
console.log(allPersons)

// ! push f. array
allPersons.forEach((student) => {
  anotherSchoolClass.addStudent(student)
})

//Lass dir alle Personen aus der Schulklasse ausgeben
console.log(anotherSchoolClass)
