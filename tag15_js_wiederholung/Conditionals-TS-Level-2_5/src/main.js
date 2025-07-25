const bundeslandInfo = document.querySelector("#bundeslandInfo")
const buttonElement = document.querySelector("#buttonElement")
const bundeslandInfoErgebnis = document.querySelector("#bundeslandInfoErgebnis")

buttonElement.addEventListener("click", function () {
  const userInput = bundeslandInfo.value.toLowerCase()

  switch (userInput) {
    case "baden-württemberg":
      bundeslandInfoErgebnis.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
      break

    case "bayern":
      bundeslandInfoErgebnis.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
      break

    case "berlin":
      bundeslandInfoErgebnis.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
      break

    case "brandenburg":
      bundeslandInfoErgebnis.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
      break

    case "bremen":
      bundeslandInfoErgebnis.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
      break

    case "hamburg":
      bundeslandInfoErgebnis.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
      break

    case "hessen":
      bundeslandInfoErgebnis.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
      break

    case "mecklenburg-vorpommern":
      bundeslandInfoErgebnis.innerHTML =
        "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
      break

    case "niedersachsen":
      bundeslandInfoErgebnis.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
      break

    case "nordrhein-westfalen":
      bundeslandInfoErgebnis.innerHTML =
        "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
      break

    case "rheinland-pfalz":
      bundeslandInfoErgebnis.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
      break

    case "saarland":
      bundeslandInfoErgebnis.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
      break

    case "sachsen":
      bundeslandInfoErgebnis.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
      break

    case "sachsen-anhalt":
      bundeslandInfoErgebnis.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
      break

    case "schleswig-holstein":
      bundeslandInfoErgebnis.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
      break

    case "thüringen":
      bundeslandInfoErgebnis.innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
      break

    default:
      bundeslandInfoErgebnis.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht."
      break
  }
})

//!Arrays mit Farid : )
// const Text = `Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt
// Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt`

// const bundesländerText = Text.trim().split("\n")

// const bundeslandArray = bundesländerText.map((bundesland) => {
//   return bundesland.split(" hat")[0].trim()
// })

// console.log(bundeslandArray)

// bundeslandArray

// buttonElement.addEventListener("click", function () {
//   const userInput = bundeslandInfo.value

//   if (userInput.toLowerCase() === "baden-würtemberg") {
//     bundeslandInfoErgebnis.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
//   } else if (userInput.toLowerCase() === "bayern") {
//     bundeslandInfoErgebnis.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt"
//   }
// })
