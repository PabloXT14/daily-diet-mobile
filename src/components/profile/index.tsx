import type { ImageProps } from 'react-native'

import { Container } from './styles'

type ProfileProps = ImageProps

export function Profile({ ...rest }: ProfileProps) {
  return <Container {...rest} />
}
