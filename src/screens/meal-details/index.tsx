import { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import dayjs from 'dayjs'
import {
  useRoute,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native'

import { Button } from '@/components/button'
import { ReusableModal } from '@/components/modal'
import { useMealsStore } from '@/store/meals'

import {
  ButtonGoBack,
  ButtonGoBackIcon,
  Container,
  Content,
  DateAndTimeDescription,
  DateAndTimeTitle,
  DeleteModalTitle,
  Header,
  HeaderTitle,
  InfoContainer,
  MealDescription,
  MealName,
  TagContainer,
  TagStatus,
  TagText,
} from './styles'
import type { MealDTO } from '@/@types/meal'

type RouteParams = {
  mealId: string
}

export function MealDetails() {
  const { getMealById } = useMealsStore()
  const { colors } = useTheme()

  const [mealData, setMealData] = useState<MealDTO>({} as MealDTO)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()

  const { mealId } = route.params as RouteParams

  function handleGoBack() {
    navigation.goBack()
  }

  function handleEditMeal() {
    navigation.navigate('edit-meal', { mealId })
  }

  function openDeleteModal() {
    setIsDeleteModalVisible(true)
  }

  function closeDeleteModal() {
    setIsDeleteModalVisible(false)
  }

  useFocusEffect(
    useCallback(() => {
      const meal = getMealById(mealId)

      if (!meal) {
        return navigation.navigate('home')
      }

      setMealData(meal)
    }, [])
  )

  return (
    <Container>
      <Header variant={mealData.isInDiet ? 'positive' : 'negative'}>
        <ButtonGoBack activeOpacity={0.7} onPress={handleGoBack}>
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
          <Button onPress={handleEditMeal}>
            <PencilSimpleLine size={18} color={colors.white} />
            <Button.Title>Editar refeição</Button.Title>
          </Button>

          <Button variant="secondary" onPress={openDeleteModal}>
            <Trash size={18} color={colors.gray[950]} />
            <Button.Title variant="secondary">Excluir refeição</Button.Title>
          </Button>
        </View>
      </Content>

      <ReusableModal
        isVisible={isDeleteModalVisible}
        onClose={closeDeleteModal}
      >
        <DeleteModalTitle>
          Deseja realmente excluir o registro da refeição?
        </DeleteModalTitle>

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Button
            variant="secondary"
            onPress={closeDeleteModal}
            style={{ flex: 1 }}
          >
            <Button.Title variant="secondary">Cancelar</Button.Title>
          </Button>

          <Button
            onPress={() => console.log('delete button pressed')}
            style={{ flex: 1 }}
          >
            <Button.Title>Sim, excluir</Button.Title>
          </Button>
        </View>
      </ReusableModal>
    </Container>
  )
}
