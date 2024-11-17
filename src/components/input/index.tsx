import { useState, type RefObject } from 'react'
import type { TextInput, TextInputProps, ViewStyle } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, InputContainer, Label } from './styles'

type InputProps = TextInputProps & {
  label?: string
  inputRef?: RefObject<TextInput>
  externalContainerStyle?: ViewStyle
}

export function Input({
  label,
  inputRef,
  externalContainerStyle,
  ...rest
}: InputProps) {
  const [isFocused, setFocused] = useState(false)
  const { colors } = useTheme()

  return (
    <Container style={externalContainerStyle}>
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
