import {
  ButtonGoBack,
  ButtonGoBackIcon,
  Container,
  Content,
  Header,
  HeaderTitle,
} from './styles'

export function NewMeal() {
  return (
    <Container>
      <Header>
        <ButtonGoBack activeOpacity={0.7}>
          <ButtonGoBackIcon />
        </ButtonGoBack>

        <HeaderTitle>Nova refeição</HeaderTitle>
      </Header>

      <Content></Content>
    </Container>
  )
}
