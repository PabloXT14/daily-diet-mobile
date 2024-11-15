import { View } from 'react-native'
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
  StatisticCard,
  StatisticCardDescription,
  StatisticCardNumber,
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
          <StatisticCard color="gray">
            <StatisticCardNumber>22</StatisticCardNumber>

            <StatisticCardDescription>
              melhor sequencia de pratos dentro da dieta
            </StatisticCardDescription>
          </StatisticCard>

          <StatisticCard color="gray">
            <StatisticCardNumber>109</StatisticCardNumber>

            <StatisticCardDescription>
              refeições registradas
            </StatisticCardDescription>
          </StatisticCard>

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <StatisticCard color="green">
              <StatisticCardNumber>99</StatisticCardNumber>

              <StatisticCardDescription>
                refeições dentro da dieta
              </StatisticCardDescription>
            </StatisticCard>

            <StatisticCard color="red">
              <StatisticCardNumber>10</StatisticCardNumber>

              <StatisticCardDescription>
                refeições fora da dieta
              </StatisticCardDescription>
            </StatisticCard>
          </View>
        </ContentData>
      </Content>
    </Container>
  )
}
