import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

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
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <PercentContainer variant="primary">
        <PercentButton activeOpacity={0.7} onPress={handleGoBack}>
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
            <StatisticCard color="green" style={{ flex: 1 }}>
              <StatisticCardNumber>99</StatisticCardNumber>

              <StatisticCardDescription>
                refeições dentro da dieta
              </StatisticCardDescription>
            </StatisticCard>

            <StatisticCard color="red" style={{ flex: 1 }}>
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
