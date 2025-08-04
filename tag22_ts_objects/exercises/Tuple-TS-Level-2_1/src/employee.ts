const employees: [number, string, string, number][] = [
  [1, "john1", "backend", 111111111],
  [2, "john2", "backend", 111111111],
  [3, "john3", "backend", 111111111],
  [4, "john4", "backend", 111111111],
]

console.log(employees)

employees.forEach(([Nummer, Name, Abteilung, Jahresgehalt]) => {
  console.log(`${Nummer} ${Name} ${Abteilung} ${Jahresgehalt}`)
})
