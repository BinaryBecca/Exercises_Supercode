// function getHighestNumber(numbers: number[]): number {
//   return Math.max(...numbers)
// }

function getHighestNumber(numbers: number[]): number {
  let highestNumber = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    highestNumber = Math.max(highestNumber, numbers[i])
  }
  return highestNumber
}

console.log(getHighestNumber([])) //Infinity
console.log(getHighestNumber([0])) // 0
console.log(getHighestNumber([1]))
console.log(getHighestNumber([1, 0]))
console.log(getHighestNumber([1, -1]))
console.log(getHighestNumber([20, 1, 55, 56]))
console.log(getHighestNumber([-20, 1, 55, 6.7]))
console.log(getHighestNumber([-20, 1, 55, 6.7, 450 / 2])) //225
