const inputField = document.getElementById("inputField") as HTMLInputElement
const buttonField = document.getElementById("buttonField") as HTMLButtonElement
const resultInputUser = document.getElementById("resultInputUser") as HTMLDivElement

function inputOs(): void {
  const userInputValue: number = Number(inputField.value)
  let resultO: string = ""
  let completeResult = ""

  for (let i = 0; i < userInputValue; i++) {
    resultO += "o"
    completeResult = `L${resultO}ps`
  }
  resultInputUser.innerText = completeResult
}

// inputOs()

buttonField.addEventListener("click", inputOs)
console.log(inputOs())
