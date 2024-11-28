import dayjs from 'dayjs'

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
      <Day>{dayjs(data.date).format('DD.MM.YYYY')}</Day>

      {data.meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </Container>
  )
}
