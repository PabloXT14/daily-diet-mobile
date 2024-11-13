import { Profile } from '@/components/profile'
import { Button } from '@/components/button'

import {
  Container,
  Header,
  MealsContainer,
  MealsNewContainer,
  MealsTitle,
  PercentContainer,
  PercentDescription,
  PercentIcon,
  PercentNumber,
} from './styles'

import DailyDietLogo from '@/assets/daily-diet-logo.svg'
import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

const MEALS_BY_DATE = {
  '2023-02-08': [
    {
      id: '1',
      name: 'Refeição 1',
      description: 'Descrição da refeição 1',
      datetime: '2023-02-08T10:00:00',
      isInDiet: true,
    },
    {
      id: '2',
      name: 'Refeição 2',
      description: 'Descrição da refeição 2',
      datetime: '2023-02-08T11:00:00',
      isInDiet: false,
    },
    {
      id: '3',
      name: 'Refeição 3',
      description: 'Descrição da refeição 3',
      datetime: '2023-02-08T12:00:00',
      isInDiet: true,
    },
  ],
  '2023-02-09': [
    {
      id: '4',
      name: 'Refeição 4',
      description: 'Descrição da refeição 4',
      datetime: '2023-02-09T10:00:00',
      isInDiet: true,
    },
    {
      id: '5',
      name: 'Refeição 5',
      description: 'Descrição da refeição 5',
      datetime: '2023-02-09T11:00:00',
      isInDiet: false,
    },
    {
      id: '6',
      name: 'Refeição 6',
      description: 'Descrição da refeição 6',
      datetime: '2023-02-09T12:00:00',
      isInDiet: true,
    },
  ],
}

export function Home() {
  const { colors } = useTheme()

  return (
    <Container>
      <Header>
        <DailyDietLogo />

        <Profile source={{ uri: 'https://github.com/pabloxt14.png' }} />
      </Header>

      <PercentContainer variant="primary" activeOpacity={0.7}>
        <PercentIcon variant="primary" />
        <PercentNumber>90,86%</PercentNumber>
        <PercentDescription>das refeições dentro da dieta</PercentDescription>
      </PercentContainer>

      <MealsContainer>
        <MealsNewContainer>
          <MealsTitle>Refeições</MealsTitle>

          <Button>
            <Plus size={18} color={colors.white} />
            <Button.Title>Nova refeição</Button.Title>
          </Button>
        </MealsNewContainer>
      </MealsContainer>
    </Container>
  )
}
