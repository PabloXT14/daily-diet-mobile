import { View } from 'react-native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import dayjs from 'dayjs'

import type { MealDTO } from '@/@types/meal'
import { Button } from '@/components/button'

import {
  ButtonGoBack,
  ButtonGoBackIcon,
  Container,
  Content,
  DateAndTimeDescription,
  DateAndTimeTitle,
  Header,
  HeaderTitle,
  InfoContainer,
  MealDescription,
  MealName,
  TagContainer,
  TagStatus,
  TagText,
} from './styles'

export function MealDetails() {
  const mealData: MealDTO = {
    id: '1',
    name: 'Sanduíche',
    description:
      'Sanduíche de pão integral com atum e salada de alface e tomate',
    datetime: '2023-02-08T10:00:00',
    isInDiet: true,
  }

  const { colors } = useTheme()

  return (
    <Container>
      <Header variant={mealData.isInDiet ? 'positive' : 'negative'}>
        <ButtonGoBack activeOpacity={0.7}>
          <ButtonGoBackIcon />
        </ButtonGoBack>

        <HeaderTitle>Refeição</HeaderTitle>
      </Header>

      <Content>
        <InfoContainer>
          <View style={{ gap: 8 }}>
            <MealName>{mealData.name}</MealName>
            <MealDescription>{mealData.description}</MealDescription>
          </View>

          <View style={{ gap: 8 }}>
            <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
            <DateAndTimeDescription>
              {dayjs(mealData.datetime).format('DD/MM/YYYY[ às ]HH:mm')}
            </DateAndTimeDescription>
          </View>

          <TagContainer>
            <TagStatus variant={mealData.isInDiet ? 'positive' : 'negative'} />
            <TagText>
              {mealData.isInDiet ? 'dentro da dieta' : 'fora da dieta'}
            </TagText>
          </TagContainer>
        </InfoContainer>

        <View style={{ gap: 12 }}>
          <Button>
            <PencilSimpleLine size={18} color={colors.white} />
            <Button.Title>Editar refeição</Button.Title>
          </Button>

          <Button variant="secondary">
            <Trash size={18} color={colors.gray[950]} />
            <Button.Title variant="secondary">Excluir refeição</Button.Title>
          </Button>
        </View>
      </Content>
    </Container>
  )
}
