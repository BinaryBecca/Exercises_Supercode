import "./style.css"

function meInANutShell(vorname: string, nachname: string, geburtsort: string, alter: string, wohnort: string): string {
  const innerText = `Mein Name ist ${vorname} ${nachname}.\n Ich bin in ${geburtsort} geboren.\n Ich lerne bei SuperCode.\n Ich bin ${alter} Jahre alt.\n Ich wohne in ${wohnort}.`
  return innerText
}

console.log(meInANutShell("Bob", "der Baumeister", "Bob Town", "2000", "Bob Town"))
