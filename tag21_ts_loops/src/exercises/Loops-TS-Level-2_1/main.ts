// for loop
// conditional statement

// image_001.jpg

function createImageNames(): string[] {
  const returnArray: string[] = []

  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      console.log(`image_00${i}.jpg`)
    } else if (i < 100) {
      console.log(`image_0${i}.jpg`)
    } else {
      console.log(`image_${i}.jpg`)
    }
  }

  return returnArray
}

console.log(createImageNames())

// ! ALternative: padStart()
