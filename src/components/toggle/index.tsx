import type { PressableProps } from 'react-native'

import { Circle, Container, Title, type ToggleVariant } from './styles'

type ToggleProps = PressableProps & {
  variant?: ToggleVariant
  isChecked?: boolean
  title: string
}
export function Toggle({
  variant = 'primary',
  isChecked = false,
  title,
  ...rest
}: ToggleProps) {
  return (
    <Container variant={variant} isChecked={isChecked} {...rest}>
      <Circle variant={variant} />
      <Title>{title}</Title>
    </Container>
  )
}
