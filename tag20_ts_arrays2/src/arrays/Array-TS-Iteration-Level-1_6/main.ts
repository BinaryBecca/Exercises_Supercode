const album: string[] = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"]
console.log(album)

// .map
const withoutFileEnding = album.map((element) => {
  if (element.endsWith(".jpg") || element.endsWith(".GIF")) {
    return element.toLowerCase().slice(0, -4)
  } else {
    return (element = "invalid")
  }
})

console.log(withoutFileEnding)

// .forEach
//ohne return
//! was oben bei const?
//! was bei if? evtl. mit push

// const withoutFileEnding2

// album.forEach((element) => {
//   if (element.endsWith(".jpg") || element.endsWith(".GIF")) {

//   } else {

//   }
// })

// console.log(withoutFileEnding2)
