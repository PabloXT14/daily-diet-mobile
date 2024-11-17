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

const keyboardAvoidingBehavior =
  Platform.OS === 'android' ? 'height' : 'position'

export function NewMeal() {
  const [isInDiet, setIsInDiet] = useState(true)

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

                <Input.Field />
              </Input.Container>

              <Input.Container style={{ flex: 1 }}>
                <Input.Label>Hora</Input.Label>

                <Input.Field />
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
