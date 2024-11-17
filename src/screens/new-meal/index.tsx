import { useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

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

const keyboardAvoidingBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function NewMeal() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isInDiet, setIsInDiet] = useState(true)

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

  return (
    <Container>
      <Header>
        <ButtonGoBack activeOpacity={0.7}>
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

              <Input.Field />
            </Input.Container>

            <Input.Container>
              <Input.Label>Descrição</Input.Label>
              <Input.Field
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

        <Button>
          <Button.Title>Cadastrar refeição</Button.Title>
        </Button>
      </Content>
    </Container>
  )
}
