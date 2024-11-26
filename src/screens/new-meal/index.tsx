import { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import toast from 'react-native-toast-message'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

import { Button } from '@/components/button'
import { Input } from '@/components/input'

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
import { Toggle } from '@/components/toggle'
import { dateApplyMask } from '@/utils/masks/date-apply-mask'
import { hourApplyMask } from '@/utils/masks/hour-apply-mask'
import { useMealsStore } from '@/store/meals'

const keyboardAvoidingBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function NewMeal() {
  const { addMeal } = useMealsStore()
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isInDiet, setIsInDiet] = useState<boolean | null>(null)

  function handleGoBack() {
    navigation.goBack()
  }

  function handleFeedback() {
    if (isInDiet === null) return

    navigation.navigate('feedback', { isInDiet })
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

  function handleCreateMeal() {
    if (!name || !description || !date || !time || isInDiet === null) {
      return toast.show({
        type: 'error',
        text1: 'Preencha todos os campos',
      })
    }

    try {
      const [day, month, year] = date.split('/')
      const formattedDate = `${year}-${month}-${day}`

      // Verificar formato da data e hora antes de usar Day.js
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/ // YYYY-MM-DD
      const timeRegex = /^\d{2}:\d{2}$/ // HH:mm

      if (!dateRegex.test(formattedDate) || !timeRegex.test(time)) {
        return toast.show({
          type: 'error',
          text1: 'Data ou hora inválida',
        })
      }

      const dateHourString = `${formattedDate}T${time}`
      const isValidDate = dayjs(
        dateHourString,
        'YYYY-MM-DDTHH:mm',
        true
      ).isValid()

      if (!isValidDate) {
        return toast.show({
          type: 'error',
          text1: 'Data ou hora inválida',
        })
      }

      const datetime = dayjs(dateHourString).format('YYYY-MM-DDTHH:mm:ss')

      addMeal({
        name,
        description,
        datetime,
        isInDiet,
      })

      handleFeedback()
    } catch (error) {
      console.log(error)

      return toast.show({
        type: 'error',
        text1: 'Ocorreu um erro ao criar a refeição',
        text2: 'Verifique os campos e tente novamente',
      })
    }
  }

  return (
    <Container>
      <Header>
        <ButtonGoBack activeOpacity={0.7} onPress={handleGoBack}>
          <ButtonGoBackIcon />
        </ButtonGoBack>

        <HeaderTitle>Nova refeição</HeaderTitle>
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
                  isChecked={isInDiet === true}
                  onPress={() => setIsInDiet(true)}
                />
                <Toggle
                  title="Nao"
                  variant="secondary"
                  isChecked={isInDiet === false}
                  onPress={() => setIsInDiet(false)}
                />
              </View>
            </IsInDietContainer>
          </Form>
        </KeyboardAvoidingView>

        <Button onPress={handleCreateMeal}>
          <Button.Title>Cadastrar refeição</Button.Title>
        </Button>
      </Content>
    </Container>
  )
}
