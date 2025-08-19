const math: Promise<number[]> = new Promise((resolve, reject) => {
  let numberArray: number[] = []

  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 130) + 1
    numberArray.push(randomNumber)

    if (randomNumber > 100) {
      reject("Werte sind höher als 100")
    } else {
      resolve(numberArray)
    }
  }

  console.log("Original-Array", numberArray)
  // Alternative:
  // numberArray.forEach((num: number) => {
  //   if (num > 100) {
  //     reject("Werte sind höher als 100")
  //   } else {
  //     resolve(numberArray)
  //   }
  // })
})

// W3 School:
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)
// function myFunction(num) {
//   return num * 10;
// }

const allArrays: number[][] = []

math
  .then((addingStuffToArray: number[]) => {
    const addingSevenToArray = addingStuffToArray.map(addingSeven)
    function addingSeven(num) {
      return num + 7
    }
    // console.log(addingSevenToArray)
    allArrays.push(addingSevenToArray)
    return addingSevenToArray
  })

  .then((addingStuffToArray: number[]) => {
    const multiplyTwoToArray = addingStuffToArray.map(multiplyTwo)
    function multiplyTwo(num) {
      return num * 2
    }
    // console.log(multiplyTwoToArray)
    allArrays.push(multiplyTwoToArray)
    return multiplyTwoToArray
  })

  .then((addingStuffToArray: number[]) => {
    const substractingOneToArray = addingStuffToArray.map(substractingOne)
    function substractingOne(num) {
      return num - 1
    }
    // console.log(substractingOneToArray)
    allArrays.push(substractingOneToArray)
    return substractingOneToArray
  })

  .then((addingStuffToArray: number[]) => {
    const moduloTwoToArray = addingStuffToArray.map(moduloTwo)
    function moduloTwo(num) {
      return num % 2
    }
    // console.log(moduloTwoToArray)
    allArrays.push(moduloTwoToArray)
    return moduloTwoToArray
  })

  .then(() => {
    console.log("All Arrays: ", allArrays)
    return allArrays
  })
  .catch((err) => console.error(err))
  .finally(() => {
    console.log("Finished")
  })
