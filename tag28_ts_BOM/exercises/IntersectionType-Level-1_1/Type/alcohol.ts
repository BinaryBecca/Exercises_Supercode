export type TAlcohol = {
  name: string
  percentage: number
  type: string
}

export type TMixer = {
  name: string
  type: string
  carbonated: boolean
}

// Intersection type:
export type TCocktail = TAlcohol & TMixer
