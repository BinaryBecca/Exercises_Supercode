type Pet = {
  tiertyp: string
  namen: string[]
}

const unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
]

console.log(unsereHaustiere)

console.log(unsereHaustiere[0].namen[1])
console.log(unsereHaustiere[1].namen[2])

console.log(unsereHaustiere[1].namen)

unsereHaustiere[1].namen[2] = "Snoopy"
unsereHaustiere[0].namen[2] = "Pinky"

const Hamster: Pet = {
  tiertyp: "Hamster",
  namen: ["Tick", "Trick", "Track"],
}

unsereHaustiere.push(Hamster)
