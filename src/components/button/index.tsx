import { useState } from 'react'
import type { PressableProps, TextProps } from 'react-native'

import { type ButtonVariant, Container, Title as StyledTitle } from './styles'

type ButtonProps = PressableProps & {
  variant?: ButtonVariant
}

function Button({ variant = 'primary', ...rest }: ButtonProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Container
      variant={variant}
      isFocused={isFocused}
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      {...rest}
    />
  )
}

type TitleProps = TextProps & {
  variant?: ButtonVariant
}

function Title({ variant = 'primary', ...rest }: TitleProps) {
  return <StyledTitle variant={variant} {...rest} />
}

Button.Title = Title

export { Button }
