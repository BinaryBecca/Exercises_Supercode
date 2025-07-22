function adult() {
  const age = document.querySelector("#age").valueAsNumber
  const result = document.querySelector(".result")
  if (age >= 18) {
    result.innerHTML = `<p>Volljährig</p>`
  } else {
    result.innerHTML = `<p>Minderjährig</p>`
  }
}
