// 15.16698, 7.78714, "12.3", true, false, "321", "Supercode",  "3.14random", "32px"

// number(): Streng: konvertiert nur, wenn der ganze String eine Zahl ist
//parseInt(): Liest die Zahl von links, stoppt bei erstem ungültigen Zeichen
//parseFloat(): Liest die Fließkommazahl von links, stoppt bei ungültigem Zeichen

let num = 15.16698
console.log(num, parseInt(num), parseFloat(num))

let num2 = 7.78714
console.log(num2, parseInt(num2), parseFloat(num2))

let num3 = "12.3"
console.log(Number(num3), parseInt(num3), parseFloat(num3))

let num4 = true
console.log(Number(num4), parseInt(num4), parseFloat(num4))

let num5 = false
console.log(Number(num5), parseInt(num5), parseFloat(num5))

let num6 = "321"
console.log(Number(num6), parseInt(num6), parseFloat(num6))

let num7 = "Supercode"
console.log(Number(num7), parseInt(num7), parseFloat(num7))

let num8 = "3.14random"
console.log(Number(num8), parseInt(num8), parseFloat(num8))

let num9 = "32px"
console.log(Number(num9), parseInt(num9), parseFloat(num9))
