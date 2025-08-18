import { WeatherType } from "./weather-type"

const weather: Promise<WeatherType> = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 9)
  if (randomNumber <= 6) {
    resolve(randomNumber)
  } else {
    reject("Weather forecast could not be determined")
  }
})

weather
  .then((resp: WeatherType) => {
    console.log(resp)
    return resp
  })
  .catch((err: Error) => console.error(err))
