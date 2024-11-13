import { Profile } from '@/components/profile'
import {
  Container,
  Header,
  PercentContainer,
  PercentDescription,
  PercentIcon,
  PercentNumber,
} from './styles'

import DailyDietLogo from '@/assets/daily-diet-logo.svg'

export function Home() {
  return (
    <Container>
      <Header>
        <DailyDietLogo />

        <Profile source={{ uri: 'https://github.com/pabloxt14.png' }} />
      </Header>

      <PercentContainer activeOpacity={0.7}>
        <PercentIcon />
        <PercentNumber>90,86%</PercentNumber>
        <PercentDescription>das refeições dentro da dieta</PercentDescription>
      </PercentContainer>
    </Container>
  )
}
