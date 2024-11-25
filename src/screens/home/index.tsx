import { FlatList } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Plus } from 'phosphor-react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { Profile } from '@/components/profile'
import { Button } from '@/components/button'
import { DayList } from '@/components/day-list'
import { ListEmpty } from '@/components/list-empty'

import {
  Container,
  Header,
  MealsContainer,
  MealsNewContainer,
  MealsTitle,
  PercentButton,
  PercentContainer,
  PercentDescription,
  PercentIcon,
  PercentNumber,
} from './styles'

import DailyDietLogo from '@/assets/daily-diet-logo.svg'
import { useMealsStore } from '@/store/meals'

export function Home() {
  const { mealsByDate } = useMealsStore()
  const { colors } = useTheme()

  const navigation = useNavigation()

  function handleMealsStatistics() {
    navigation.navigate('statistics')
  }

  function handleNewMeal() {
    navigation.navigate('new-meal')
  }

  return (
    <Container>
      <Header>
        <DailyDietLogo />

        <Profile source={{ uri: 'https://github.com/pabloxt14.png' }} />
      </Header>

      <PercentContainer variant="primary">
        <PercentButton activeOpacity={0.7} onPress={handleMealsStatistics}>
          <PercentIcon variant="primary" />
        </PercentButton>

        <PercentNumber>90,86%</PercentNumber>

        <PercentDescription>das refeições dentro da dieta</PercentDescription>
      </PercentContainer>

      <MealsContainer>
        <MealsNewContainer>
          <MealsTitle>Refeições</MealsTitle>

          <Button onPress={handleNewMeal}>
            <Plus size={18} color={colors.white} />
            <Button.Title>Nova refeição</Button.Title>
          </Button>
        </MealsNewContainer>

        <FlatList
          data={Object.entries(mealsByDate)} // [[date, meals], [date, meals], [date, meals]]
          keyExtractor={([date, meals]) => date}
          renderItem={({ item: [date, meals] }) => (
            <DayList data={{ date, meals }} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            Object.keys(mealsByDate).length === 0
              ? { flex: 1 }
              : {
                  gap: 32,
                  paddingBottom: 160,
                }
          }
          ListEmptyComponent={() => (
            <ListEmpty message="Não há refeições registradas" />
          )}
        />
      </MealsContainer>

      <LinearGradient
        colors={['transparent', colors.gray[50]]}
        pointerEvents="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 160,
        }}
      />
    </Container>
  )
}
