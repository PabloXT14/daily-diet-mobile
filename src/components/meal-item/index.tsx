import type { MealDTO } from '@/@types/meal'

import { Container, Divider, Status, Time, Title } from './styles'

type MealItemProps = {
  meal: MealDTO
}

export function MealItem({ meal }: MealItemProps) {
  return (
    <Container>
      <Time>{new Date(meal.datetime).toLocaleTimeString('pt-BR')}</Time>

      <Divider />

      <Title numberOfLines={1}>{meal.name}</Title>

      <Status variant={meal.isInDiet ? 'primary' : 'secondary'} />
    </Container>
  )
}
