enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

function showHtmlError() {
  const randomNumber = Math.floor(Math.random() * 6)
  // ! 0-5; also: 6!!!
  if (randomNumber === 0 || randomNumber === 1 || randomNumber === 2) {
    return HtmlError.OK
  } else if (randomNumber === 3) {
    return HtmlError.Redirect
  } else if (randomNumber === 4) {
    return HtmlError.BadRequest
  } else {
    return HtmlError.InternalServerError
  }
}

const result = showHtmlError()

console.log(result)
