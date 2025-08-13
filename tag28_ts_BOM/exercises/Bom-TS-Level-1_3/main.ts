// import "./style.css"

console.log("hi")

const holDaten = document.querySelector('button[type="button"]') as HTMLButtonElement
const divInnerHTML = document.getElementById("innerHTML") as HTMLDivElement

const showingCurrentuserAgent = window.navigator.userAgent
console.log(showingCurrentuserAgent)

const windowResolution1 = window.screen.availHeight
const windowResolution2 = window.screen.availWidth
const showingInnerHeight = window.innerHeight
const showingInnerWidth = window.innerWidth
const colorDepth = window.screen.colorDepth
const pixelDepth = window.screen.pixelDepth
const operatingSystem = navigator.platform
console.log(operatingSystem)

function getBrowserName(userAgent) {
  if (userAgent.includes("Firefox")) {
    // "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0"
    return "Mozilla Firefox"
  } else if (userAgent.includes("SamsungBrowser")) {
    // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36"
    return "Samsung Internet"
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    // "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 OPR/90.0.4480.54"
    return "Opera"
  } else if (userAgent.includes("Edge")) {
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    return "Microsoft Edge (Legacy)"
  } else if (userAgent.includes("Edg")) {
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 Edg/104.0.1293.70"
    return "Microsoft Edge (Chromium)"
  } else if (userAgent.includes("Chrome")) {
    // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
    return "Google Chrome or Chromium"
  } else if (userAgent.includes("Safari")) {
    // "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
    return "Apple Safari"
  }
  return "unknown"
}

const browserName = getBrowserName(navigator.userAgent)
console.log(`You are using: ${browserName}`)

holDaten.addEventListener("click", () => {
  divInnerHTML.innerHTML = `
<p>Browsername: ${browserName}</p>
<p>Betriebssytem-Architektur: ${operatingSystem}</p>
<p>Browser-Version: ${showingCurrentuserAgent} </p>
<p>Window-Auflösung: ${windowResolution1}x${windowResolution2}</p>
<p>Innere Größe: ${showingInnerHeight} x ${showingInnerWidth}</p>
<p>Farbtiefe: ${colorDepth}</p>
<p>Pixel-Tiefe: ${pixelDepth}</p>
`
})
