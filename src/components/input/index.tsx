import { useState, type RefObject } from 'react'
import type { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, InputContainer, Label } from './styles'

type InputProps = TextInputProps & {
  label?: string
  inputRef?: RefObject<TextInput>
}

export function Input({ label, inputRef, ...rest }: InputProps) {
  const [isFocused, setFocused] = useState(false)
  const { colors } = useTheme()

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer
        ref={inputRef}
        isFocused={isFocused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        cursorColor={colors.gray[950]}
        {...rest}
      />
    </Container>
  )
}
