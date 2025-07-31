const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//.filter()
function printEvenNumbers(zahl: number): boolean {
  return zahl % 2 === 0
}
// console.log(printEvenNumbers()) => false

function printOddNumbers(zahl: number): boolean {
  return zahl % 2 !== 0
}
// console.log(printOddNumbers()) => true

const evenNumbers = zahlen.filter(printEvenNumbers)
console.log(evenNumbers)

const oddNumbers = zahlen.filter(printOddNumbers)
console.log(oddNumbers)

//Arrow-Function

const evenNumbers2 = zahlen.filter((zahl: number) => {
  return zahl % 2 === 0
})
console.log(evenNumbers2)

const oddNumbers2 = zahlen.filter((zahl: number) => {
  return zahl % 2 !== 0
})
console.log(oddNumbers2)
