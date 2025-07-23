// - Stelle das aktuelle Datum in folgenden beiden Formen dar:
// tt-mm-jjjj und tt/mm/jjjj. (Tag, Monat, Jahr).
// - Nutze:
// - getDate()
// - getMonth()
// - getFullYear()
// - getElementById() oder querySelector().
// - Stelle anschließend die aktuelle Uhrzeit auf zwei Arten dar
//     - lokal
//     - UTC
// - Lasse dir das Ergebnis im HTML-Dokument anzeigen.

// aktuelles Datum
const myDate = new Date()
console.log(myDate)

const day = myDate.getDate()
const month = myDate.getMonth()
const year = myDate.getFullYear()

const date1 = document.querySelector(".today1")
const date2 = document.querySelector(".today2")

date1.innerHTML = day + "-" + month + "-" + year
date2.innerHTML = day + "/" + month + "/" + year

// Koordienierte Weltzeit (UTC)

document.querySelector(".clock1").innerHTML = myDate.toUTCString()

// lokale Uhrzeit

document.querySelector(".clock2").innerHTML = myDate.toLocaleTimeString("de")
