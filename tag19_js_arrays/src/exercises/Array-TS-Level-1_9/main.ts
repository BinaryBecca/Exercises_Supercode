// - Bei den Paaren Push/Pop und Unshift/Shift verlängert die Methode mit mehr Buchstaben jeweils das Array
// - Push/Pop - Push hat mehr Buchstaben als Pop = Push fügt Element(e) zum Array hinzu; Pop entfernt Element(e)
// - Unshift/Shift - Unshift hat mehr Buchstaben als Shift = Unshift fügt Element(e) zum Array hinzu, Shift entfernt Element(e)

const numbers: number[] = [23, 54, 75]

console.log(numbers)
numbers.push(11, 32, 42, 5, 71)
console.log(numbers)
numbers.unshift(1, 3, 7, 8, 14)
console.log(numbers)
numbers.pop()
numbers.pop()
console.log(numbers)
numbers.shift()
numbers.shift()
console.log(numbers)
