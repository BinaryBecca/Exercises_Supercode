function generateLottoNumber(): number {
  const randomNumber = Math.floor(Math.random() * 100 + 1)
  // console.log(randomNumber)

  if (randomNumber > 49) {
    throw new Error("Number is bigger than 49")
  } else {
    return randomNumber
  }
}
generateLottoNumber()

const lottoResults: number[] = []

function generateSevenLottoNumbers(): void {
  while (lottoResults.length < 7) {
    try {
      const lottonumber = generateLottoNumber()
      lottoResults.push(lottonumber)
    } catch (error) {
      console.error("skipping number < 49", error)
    }
  }
}
generateSevenLottoNumbers()
console.log("lottoResults:", lottoResults)

// const oneLottoNumber = generateLottoNumber()

// lottoNumbers.forEach(() => {
//   if (lottoNumbers.length < 7) {
//     lottoNumbers.push(oneLottoNumber)
//   }
// })
// console.log(lottoNumbers)
