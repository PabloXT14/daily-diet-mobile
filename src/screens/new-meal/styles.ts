import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

import { css, styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  position: relative;

  width: 100%;
  height: 132px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray[200]};
`

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
    line-height: 24px; /* 130% */
  `}
`

export const ButtonGoBack = styled(TouchableOpacity)`
  position: absolute;
  top: 56px;
  left: 24px;
`

export const ButtonGoBackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray[900],
}))``

export const Content = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray[50]};

  justify-content: space-between;

  margin-top: -32px;
  padding: 40px 24px;

  border-radius: 20px 20px 0 0;
`

export const Form = styled.View`
  gap: 24px;

  /* border: 1px solid red; */
`

export const DateTimeContainer = styled.View`
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: center;

  gap: 20px;
`

export const IsInDietContainer = styled.View`
  gap: 8px;
`

export const IsInDietTitle = styled.Text`
   ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    line-height: 18px; /* 130% */
  `}
`
