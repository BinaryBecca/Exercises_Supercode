const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
]

const actorsReference = oldHollywoodActors
actorsReference.push("Marilyn Monroe")

// console.log(oldHollywoodActors)
// console.log(actorsReference)

const oldHollywoodActorsCopy1 = oldHollywoodActors.concat()
oldHollywoodActorsCopy1.push("Robert Downey Jr.")
const oldHollywoodActorsCopy2 = oldHollywoodActors.slice()
oldHollywoodActorsCopy2.push("Iron Man")
const oldHollywoodActorsCopy3 = [...oldHollywoodActors]
oldHollywoodActorsCopy3.push("Tony Stark")

console.log(oldHollywoodActors)
console.log(oldHollywoodActorsCopy1)
console.log(oldHollywoodActorsCopy2)
console.log(oldHollywoodActorsCopy3)
