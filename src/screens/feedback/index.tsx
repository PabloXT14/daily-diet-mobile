import { Button } from '@/components/button'
import { useRoute, useNavigation } from '@react-navigation/native'

import FeedbackPositive from '@/assets/img-feedback-positive.svg'
import FeedbackNegative from '@/assets/img-feedback-negative.svg'

import {
  Container,
  Description,
  DescriptionBold,
  Header,
  Title,
} from './styles'

type RouteParams = {
  isInDiet: boolean
}

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()

  const { isInDiet } = route.params as RouteParams

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Header>
        <Title variant={isInDiet ? 'positive' : 'negative'}>
          {isInDiet ? 'Continue assim!' : 'Que pena!'}
        </Title>
        <Description>
          {isInDiet ? (
            <>
              Você continua <DescriptionBold>dentro da dieta</DescriptionBold>.
              Muito bem!
            </>
          ) : (
            <>
              Você <DescriptionBold>saiu da dieta</DescriptionBold> dessa vez,
              mas continue se esforçando e não desista!
            </>
          )}
        </Description>
      </Header>

      {isInDiet ? <FeedbackPositive /> : <FeedbackNegative />}

      <Button style={{ width: 'auto' }} onPress={handleGoHome}>
        <Button.Title>Ir para a página inicial</Button.Title>
      </Button>
    </Container>
  )
}
