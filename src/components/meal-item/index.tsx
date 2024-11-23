import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

import type { MealDTO } from '@/@types/meal'

import { Container, Divider, Status, Time, Title } from './styles'

type MealItemProps = {
  meal: MealDTO
}

export function MealItem({ meal }: MealItemProps) {
  const navigation = useNavigation()

  function handleMealDetails(mealId: string) {
    navigation.navigate('meal-details', { mealId })
  }

  return (
    <Container activeOpacity={0.7} onPress={() => handleMealDetails(meal.id)}>
      <Time>{dayjs(meal.datetime).format('HH:mm')}</Time>

      <Divider />

      <Title numberOfLines={1}>{meal.name}</Title>

      <Status variant={meal.isInDiet ? 'primary' : 'secondary'} />
    </Container>
  )
}
