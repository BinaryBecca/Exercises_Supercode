type Apple = {
  color: string
  size: string
  isSweet?: boolean
  // ! mit ? nicht nötig, sonst Fehelermeldung!
}

const redApple: Apple = { color: "red", size: "big", isSweet: true }
const greenApple: Apple = { color: "green", size: "small", isSweet: false }
const yellowApple: Apple = { color: "yellow", size: "big" }

const apples: Apple[] = [redApple, greenApple, yellowApple]

// #for
for (const apple of apples) {
  console.log("Size: " + apple.size)
}

// #forEach

apples.forEach((apple) => {
  console.log("Color: " + apple.color)
})

// #length

console.log("Length: " + apples.length)

// #new object

const pinkApple: Apple = { color: "pink", size: "medium" }

const apples2 = apples.push(pinkApple)

console.log(apples)
console.log(apples2)
