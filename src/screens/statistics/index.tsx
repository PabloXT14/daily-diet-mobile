import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useMealsStore } from '@/store/meals'

import {
  Container,
  Content,
  ContentData,
  ContentTitle,
  PercentButton,
  PercentContainer,
  PercentDescription,
  PercentIcon,
  PercentNumber,
  StatisticCard,
  StatisticCardDescription,
  StatisticCardNumber,
} from './styles'

export function Statistics() {
  const { getMealsStatistics } = useMealsStore()

  const navigation = useNavigation()

  const {
    bestSequenceInDiet,
    totalMeals,
    totalMealsInDiet,
    totalMealsOutDiet,
  } = getMealsStatistics()

  const mealsInDietPercent = (totalMealsInDiet / totalMeals) * 100

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <PercentContainer
        variant={mealsInDietPercent > 50 ? 'primary' : 'secondary'}
      >
        <PercentButton activeOpacity={0.7} onPress={handleGoBack}>
          <PercentIcon
            variant={mealsInDietPercent > 50 ? 'primary' : 'secondary'}
          />
        </PercentButton>

        <PercentNumber>{mealsInDietPercent.toFixed(2)}%</PercentNumber>

        <PercentDescription>das refeições dentro da dieta</PercentDescription>
      </PercentContainer>

      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <ContentData>
          <StatisticCard color="gray">
            <StatisticCardNumber>{bestSequenceInDiet}</StatisticCardNumber>

            <StatisticCardDescription>
              melhor sequencia de pratos dentro da dieta
            </StatisticCardDescription>
          </StatisticCard>

          <StatisticCard color="gray">
            <StatisticCardNumber>{totalMeals}</StatisticCardNumber>

            <StatisticCardDescription>
              refeições registradas
            </StatisticCardDescription>
          </StatisticCard>

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <StatisticCard color="green" style={{ flex: 1 }}>
              <StatisticCardNumber>{totalMealsInDiet}</StatisticCardNumber>

              <StatisticCardDescription>
                refeições dentro da dieta
              </StatisticCardDescription>
            </StatisticCard>

            <StatisticCard color="red" style={{ flex: 1 }}>
              <StatisticCardNumber>{totalMealsOutDiet}</StatisticCardNumber>

              <StatisticCardDescription>
                refeições fora da dieta
              </StatisticCardDescription>
            </StatisticCard>
          </View>
        </ContentData>
      </Content>
    </Container>
  )
}
