function weather() {
  const weatherInput = document.querySelector("#weather").valueAsNumber
  const result = document.querySelector(".result")
  if (weatherInput >= 8 && weatherInput <= 10) {
    result.innerHTML = `<p>super</p>`
  } else if (weatherInput >= 6 && weatherInput <= 7) {
    result.innerHTML = `<p>gut</p>`
  } else if (weatherInput >= 3 && weatherInput <= 5) {
    result.innerHTML = `<p>okay</p>`
  } else if (weatherInput >= 0 && weatherInput <= 2) {
    result.innerHTML = `<p>schlecht</p>`
  }
}
