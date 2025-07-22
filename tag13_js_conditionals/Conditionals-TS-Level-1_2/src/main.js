function weatherOutput() {
  const weatherInput = document.querySelector("#weather2").value
  const result = document.querySelector(".result")
  console.log(weatherInput)
  if (weatherInput >= 8 && weatherInput <= 10) {
    result.innerHTML = `<p>Das Wetter ist super</p>`
  } else if (weatherInput >= 6 && weatherInput <= 7) {
    result.innerHTML = `<p>Das Wetter ist gut</p>`
  } else if (weatherInput >= 3 && weatherInput <= 5) {
    result.innerHTML = `<p>Das Wetter ist okay</p>`
  } else if (weatherInput >= 0 && weatherInput <= 2) {
    result.innerHTML = `<p>Das Wetter ist schlecht</p>`
  }
}
