import { Text } from 'react-native'
import {
  Container,
  Content,
  ContentData,
  ContentTitle,
  PercentButton,
  PercentContainer,
  PercentDescription,
  PercentIcon,
  PercentNumber,
} from './styles'

export function Statistics() {
  return (
    <Container>
      <PercentContainer variant="primary">
        <PercentButton>
          <PercentIcon variant="primary" />
        </PercentButton>

        <PercentNumber>90,86%</PercentNumber>

        <PercentDescription>das refeições dentro da dieta</PercentDescription>
      </PercentContainer>

      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <ContentData>
          <Text>Dado 1</Text>
          <Text>Dado 2</Text>
        </ContentData>
      </Content>
    </Container>
  )
}
