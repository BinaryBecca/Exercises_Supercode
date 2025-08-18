const paragraphElement = document.querySelector("p") as HTMLParagraphElement

// Wenn das zweite und dritte Promise resolved wird, wird der entsprechende Text angehängt

function exerciseOne(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const textOutput: string = "Exersice 1 done."
      resolve(textOutput)
      console.log(textOutput)
    }, 2000)
  })
}

function exerciseTwo(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const textOutput: string = "Exersice 2 done."
      resolve(textOutput)
      console.log(textOutput)
    }, 3000)
  })
}

function exerciseThree(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const textOutput: string = "Exersice 3 done."
      resolve(textOutput)
      console.log(textOutput)
    }, 4000)
  })
}

function homework(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const textOutput: string = "Homework done"
      resolve(textOutput)
      console.log(textOutput)
    }, 5000)
  })
}

// exerciseOne()
//   .then(() => exerciseTwo())
//   .then(() => exerciseThree())

Promise.all([exerciseOne(), exerciseTwo(), exerciseThree(), homework()]).then((results: string[]) => {
  paragraphElement.innerText = ""

  results.forEach((result: string) => {
    // paragraphElement.innerText = ""
    paragraphElement.innerText = paragraphElement.innerText + "\n" + result
  })
})
