import Actor from "./classes/Actor"
import Episode from "./classes/Episode"
import Series from "./classes/Series"
import { Gender } from "./enum/Gender"

// console.log("hi")

const actor1 = new Actor("Bryan ", "Cranston", "1956-03-07", Gender.male)
// console.log(actor1)
const actor2 = new Actor("Aaron ", "Paul", "1979-08-27", Gender.male)
const actor3 = new Actor("Anna", "Gunn", "1968-04-11", Gender.female)

const episode1 = new Episode("episode1", 210, "amazing", [actor1])
const episode2 = new Episode("episode1", 210, "amazing", [actor1, actor2, actor3])

const seriesBreakingBad = new Series(
  "Breaking Bad",
  "A high school chemistry teacher turned methamphetamine manufacturer",
  2008,
  2013,
  [episode1, episode2]
)

const actorsArray = [episode1._actors, episode2._actors]
console.log(actorsArray)

const actorsArray2 = [...episode1._actors, ...episode2._actors]
console.log(actorsArray2)

function printSeriesInfo(series: Series) {
  console.log(
    ` Title: ${series._title}\n Start Year: ${series._startYear}\n End Year: ${series._endYear}\n Number of Episodes: ${series._episodes.length}`
  )
  console.log("Actors: ")

  actorsArray2.forEach((actor) => {
    console.log(
      ` - ${actor._firstName} ${actor._lastName}\n - Birthday: ${actor._birthday}\n - Gender: ${actor._gender}`
    )
  })
}

printSeriesInfo(seriesBreakingBad)
