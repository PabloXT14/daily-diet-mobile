import type { MealDTO } from '@/@types/meal'
import { MealItem } from '../meal-item'

import { Container, Day } from './styles'

type DayListProps = {
  data: {
    date: string
    meals: MealDTO[]
  }
}

export function DayList({ data }: DayListProps) {
  return (
    <Container>
      <Day>{data.date}</Day>

      {data.meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </Container>
  )
}
