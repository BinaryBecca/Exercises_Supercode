let userInput = window.prompt("Please enter your name.")

function greetUser() {
  // const userInput = window.prompt("Please enter your name.")
  try {
    if (userInput === "") {
      throw new Error("No name entered")
      // window.alert(`hello ${userInput}`)
    }
    window.alert(`hello ${userInput}`)
  } catch (error) {
    console.error("mistake got catched", error)
    window.alert("greetings humanoid person")
  }
}

greetUser()
