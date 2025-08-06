function averageNote(notes: number[]): number {
  let total = 0

  for (let i = 0; i < notes.length; i++) {
    total = total + notes[i]
  }

  const notesAverage = total / notes.length

  if (notesAverage < 50) {
    console.log("Ungenügend")
  } else if (notesAverage < 60) {
    console.log("Mangelhaft")
  } else if (notesAverage < 70) {
    console.log("Ausreichend")
  } else if (notesAverage < 80) {
    console.log("Befriedigend")
  } else if (notesAverage < 90) {
    console.log("Gut")
  } else {
    console.log("Sehr gut")
  }
  return notesAverage
}

console.log(averageNote([44, 11, 70, 80, 52, 88, 94, 3, 25, 46]))
console.log(averageNote([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
