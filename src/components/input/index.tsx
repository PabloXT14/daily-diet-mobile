import { useState, type RefObject } from 'react'
import type {
  TextInput,
  TextInputProps,
  TextProps,
  ViewProps,
  ViewStyle,
} from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, Field, Label } from './styles'

type InputProps = TextInputProps & {
  label?: string
  inputRef?: RefObject<TextInput>
  externalContainerStyle?: ViewStyle
}

function InputContainer({ ...props }: ViewProps) {
  return <Container {...props} />
}

type InputFieldProps = TextInputProps & {
  inputRef?: RefObject<TextInput>
}

function InputField({ inputRef, ...rest }: InputFieldProps) {
  const [isFocused, setFocused] = useState(false)
  const { colors } = useTheme()

  return (
    <Field
      ref={inputRef}
      isFocused={isFocused}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      cursorColor={colors.gray[950]}
      numberOfLines={1}
      {...rest}
    />
  )
}

function InputLabel({ ...props }: TextProps) {
  return <Label {...props} />
}

export const Input = {
  Container: InputContainer,
  Field: InputField,
  Label: InputLabel,
}
