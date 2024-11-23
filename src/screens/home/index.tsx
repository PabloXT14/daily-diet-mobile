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
import type { MealDTO } from '@/@types/meal'

const MEALS_BY_DATE: Record<string, MealDTO[]> = {
  '2023-02-08': [
    {
      id: '1',
      name: 'Refeição 1',
      description: 'Descrição da refeição 1',
      datetime: '2023-02-08T10:00:00',
      isInDiet: true,
    },
    {
      id: '2',
      name: 'Refeição 2',
      description: 'Descrição da refeição 2',
      datetime: '2023-02-08T11:00:00',
      isInDiet: false,
    },
    {
      id: '3',
      name: 'Refeição 3',
      description: 'Descrição da refeição 3',
      datetime: '2023-02-08T12:00:00',
      isInDiet: true,
    },
  ],
  '2023-02-09': [
    {
      id: '4',
      name: 'Refeição 4',
      description: 'Descrição da refeição 4',
      datetime: '2023-02-09T10:00:00',
      isInDiet: true,
    },
    {
      id: '5',
      name: 'Refeição 5',
      description: 'Descrição da refeição 5',
      datetime: '2023-02-09T11:00:00',
      isInDiet: false,
    },
    {
      id: '6',
      name: 'Refeição 6',
      description: 'Descrição da refeição 6',
      datetime: '2023-02-09T12:00:00',
      isInDiet: true,
    },
    {
      id: '7',
      name: 'Refeição 7',
      description: 'Descrição da refeição 7',
      datetime: '2023-02-09T13:00:00',
      isInDiet: false,
    },
    {
      id: '8',
      name: 'Refeição 8',
      description: 'Descrição da refeição 8',
      datetime: '2023-02-09T14:00:00',
      isInDiet: true,
    },
  ],
}

export function Home() {
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
          data={Object.entries(MEALS_BY_DATE)} // [[date, meals], [date, meals], [date, meals]]
          keyExtractor={([date, meals]) => date}
          renderItem={({ item: [date, meals] }) => (
            <DayList data={{ date, meals }} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            Object.keys(MEALS_BY_DATE).length === 0
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
