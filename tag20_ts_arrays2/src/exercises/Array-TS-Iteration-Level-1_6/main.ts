const album: string[] = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"]
console.log("Original: " + album)

// .map
const withoutFileEnding = album.map((element) => {
  if (element.endsWith(".jpg") || element.endsWith(".GIF")) {
    return element.toLowerCase().slice(0, -4)
  } else {
    return "invalid"
  }
})

console.log("Variante 1: " + withoutFileEnding)

// .forEach
//ohne return => forEach gibt nicht zurück!
//leeres Array am Anfang definieren!
//mit push

const withoutFileEnding2: string[] = []

album.forEach((element) => {
  if (element.endsWith(".jpg") || element.endsWith(".GIF")) {
    withoutFileEnding2.push(element.toLowerCase().slice(0, -4))
  } else {
    withoutFileEnding2.push("invalid")
  }
})

console.log("Variante 2: " + withoutFileEnding2)
