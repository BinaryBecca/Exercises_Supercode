function addToFifty(): void {
  let i = 0

  while (i < 50) {
    const randomNumber = Math.random() * 10 + 1 //! von 1-10
    const roundNumber = Math.floor(randomNumber)
    console.log(roundNumber)
    i += roundNumber
    console.log(`This is the sum of each round: ${i}`)
  }
  console.log(`${i} Stopping right here.`)
}

addToFifty()

//   for (let i = 1; i <= 10; i++) {
//     console.log(Math.random() + i)
//   }
//   if ((Math.random() + i) < 50) {
//     "Stopping right here."
//   }
