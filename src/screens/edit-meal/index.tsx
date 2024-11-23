import { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Toggle } from '@/components/toggle'
import { dateApplyMask } from '@/utils/masks/date-apply-mask'
import { hourApplyMask } from '@/utils/masks/hour-apply-mask'
import type { MealDTO } from '@/@types/meal'

import {
  ButtonGoBack,
  ButtonGoBackIcon,
  Container,
  Content,
  DateTimeContainer,
  Form,
  Header,
  HeaderTitle,
  IsInDietContainer,
  IsInDietTitle,
} from './styles'
import dayjs from 'dayjs'

const keyboardAvoidingBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

const FAKE_MEAL: MealDTO = {
  id: '1',
  name: 'Macarrão com molho de tomate',
  description: 'Macarrão feito com molho de tomate e molho de tomate',
  datetime: '2023-02-08T10:00:00',
  isInDiet: false,
}

type RouteParams = {
  mealId: string
}

export function EditMeal() {
  const [name, setName] = useState(FAKE_MEAL.name)
  const [description, setDescription] = useState(FAKE_MEAL.description)
  const [date, setDate] = useState(
    dayjs(FAKE_MEAL.datetime).format('DD/MM/YYYY')
  )
  const [time, setTime] = useState(dayjs(FAKE_MEAL.datetime).format('HH:mm'))
  const [isInDiet, setIsInDiet] = useState(FAKE_MEAL.isInDiet)

  const navigation = useNavigation()
  const route = useRoute()

  const { mealId } = route.params as RouteParams

  function handleGoBack() {
    navigation.goBack()
  }

  function applyDateMask(value: string) {
    const onlyNumbers = value.replace(/\D/g, '')

    if (onlyNumbers.length === 8) {
      const parsedDate = dateApplyMask(onlyNumbers)

      return setDate(parsedDate)
    }

    if (onlyNumbers.length < 8) {
      return setDate(onlyNumbers)
    }
  }

  function applyHourMask(value: string) {
    const onlyNumbers = value.replace(/\D/g, '')

    if (onlyNumbers.length === 4) {
      const parsedHour = hourApplyMask(onlyNumbers)

      setTime(parsedHour)
    }

    if (onlyNumbers.length < 4) {
      setTime(onlyNumbers)
    }
  }

  function handleSaveMeal() {
    // TODO: lógica de editar refeição

    handleGoBack()
  }

  return (
    <Container>
      <Header>
        <ButtonGoBack activeOpacity={0.7} onPress={handleGoBack}>
          <ButtonGoBackIcon />
        </ButtonGoBack>

        <HeaderTitle>Editar refeição</HeaderTitle>
      </Header>

      <Content>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={keyboardAvoidingBehavior}
        >
          <Form>
            <Input.Container>
              <Input.Label>Nome</Input.Label>

              <Input.Field value={name} onChangeText={setName} />
            </Input.Container>

            <Input.Container>
              <Input.Label>Descrição</Input.Label>
              <Input.Field
                value={description}
                onChangeText={setDescription}
                style={{ minHeight: 142 }}
                multiline
                numberOfLines={5}
                textAlignVertical="top"
              />
            </Input.Container>

            <DateTimeContainer>
              <Input.Container style={{ flex: 1 }}>
                <Input.Label>Data</Input.Label>

                <Input.Field value={date} onChangeText={applyDateMask} />
              </Input.Container>

              <Input.Container style={{ flex: 1 }}>
                <Input.Label>Hora</Input.Label>

                <Input.Field value={time} onChangeText={applyHourMask} />
              </Input.Container>
            </DateTimeContainer>

            <IsInDietContainer>
              <IsInDietTitle>Esta dentro da dieta?</IsInDietTitle>

              <View style={{ flexDirection: 'row', gap: 8 }}>
                <Toggle
                  title="Sim"
                  isChecked={isInDiet}
                  onPress={() => setIsInDiet(true)}
                />
                <Toggle
                  title="Nao"
                  variant="secondary"
                  isChecked={!isInDiet}
                  onPress={() => setIsInDiet(false)}
                />
              </View>
            </IsInDietContainer>
          </Form>
        </KeyboardAvoidingView>

        <Button onPress={handleSaveMeal}>
          <Button.Title>Salvar alterações</Button.Title>
        </Button>
      </Content>
    </Container>
  )
}
