import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

import { css, styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

type HeaderProps = {
  variant: 'positive' | 'negative'
}

export const Header = styled.View<HeaderProps>`
  position: relative;

  width: 100%;
  height: 132px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, variant }) => (variant === 'positive' ? theme.colors.green[100] : theme.colors.red[100])};
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

export const InfoContainer = styled.View`
  gap: 24px;

  /* border: 1px solid red; */
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.bold};
    font-size: 20px;
    line-height: 26px; /* 130% */
  `}
`

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.base}px;
    line-height: 20px; /* 130% */
  `}
`

export const DateAndTimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    line-height: 18px; /* 130% */
  `}
`

export const DateAndTimeDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.base}px;
    line-height: 20px; /* 130% */
  `}
`

export const TagContainer = styled.View`
  flex-direction: row;
  margin-right: auto;

  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 8px 16px;

  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`

export const TagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm}px;
    line-height: 18px; /* 130% */
  `}
`

type TagStatusProps = {
  variant: 'positive' | 'negative'
}

export const TagStatus = styled.View<TagStatusProps>`
  width: 8px;
  height: 8px;

  border-radius: 9999px;
  background-color: ${({ theme, variant }) => (variant === 'positive' ? theme.colors.green[500] : theme.colors.red[600])};
`

export const DeleteModalTitle = styled.Text`
  text-align: center;
  margin-bottom: 32px;

  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
    line-height: 24px; /* 130% */
  `}
`
