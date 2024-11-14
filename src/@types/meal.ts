export type MealDTO = {
  id: string
  name: string
  description: string
  datetime: string
  isInDiet: boolean
}

export type MealsByDateDTO = {
  [date: string]: MealDTO[]
}
