import { Person } from "../../OOP-Class-TS-Level-2_1/src/Person"

export class SchoolClass {
  _id: number
  _name: string
  _endDate?: number
  _persons: Person[]

  constructor(id: number, name: string) {
    this._id = id
    this._name = name
    this._persons = []
    // console.log("School class creation successful")
  }
  addStudent(newStudent: Person): void {
    this._persons.push(newStudent)
  }
}

const schoolClass1 = new SchoolClass(1, "schoolclass 1")
const schoolClass2 = new SchoolClass(2, "schoolclass 2")
const schoolClass3 = new SchoolClass(3, "schoolclass 3")

schoolClass1._name = "cool class"
schoolClass2._name = "even cooler class"

// console.log(schoolClass1)
// console.log(schoolClass2)
// console.log(schoolClass3)
