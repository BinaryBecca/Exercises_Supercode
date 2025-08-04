// for loop
// for...of loop

const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

// for loop

for (let i = 0; i < friendNames.length; i++) {
  console.log(friendNames[i])
}

// for...of loop

for (const friend of friendNames) {
  console.log(friend)
}
