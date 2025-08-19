const paragraphElement1 = document.querySelector("p") as HTMLParagraphElement

// Wenn das zweite und dritte Promise resolved wird, wird der entsprechende Text angehängt

function exerciseOne1(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const textOutput: string = "Exersice 1 done."
      paragraphElement1.innerText = textOutput

      resolve(textOutput)
      console.log(textOutput)
    }, 2000)
  })
}

function exerciseTwo1(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const textOutput: string = "Exersice 2 done."
      paragraphElement1.innerText = paragraphElement1.innerText + "\n" + textOutput
      resolve(textOutput)
      console.log(textOutput)
    }, 3000)
  })
}

function exerciseThree1(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const textOutput: string = "Exersice 3 done."
      paragraphElement1.innerText = paragraphElement1.innerText + "\n" + textOutput

      resolve(textOutput)
      console.log(textOutput)
    }, 4000)
  })
}

exerciseOne1()
  .then(() => exerciseTwo1())
  .then(() => exerciseThree1())
