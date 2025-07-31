const oldPainters = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"]

const newerPainters = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"]

console.log(oldPainters)
console.log(newerPainters)

const allPainters = oldPainters.concat(newerPainters).sort()
console.log(allPainters)

const allPainters2 = [...oldPainters, ...newerPainters].sort()
console.log(allPainters2)

const femalePainters = [allPainters[2], allPainters[3], allPainters[4], allPainters[5]]
console.log(femalePainters)

const malePainters = [allPainters[0], allPainters[1], allPainters[6], allPainters[7], allPainters[8]]
console.log(malePainters)
