import "./style.css"

function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
  const nameOutput = "a. Mein:e Lieblingsheld:in ist " + heroName
  const powerOutput = "b. Er:sie hat die Fähigkeit " + heroPower
  const enemyOutput = "c. Sein:ihr größte:r Gegner:in ist " + heroEnemy

  console.log(nameOutput)
  console.log(powerOutput)
  console.log(enemyOutput)
}

showHero("The Deep", "mit Meerestieren zu interagieren", "sein Ego")
