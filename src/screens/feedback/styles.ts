import { css, styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  gap: 40px;

  background-color: ${({ theme }) => theme.colors.gray[50]};
`

export const Header = styled.View`
  align-items: center;
  justify-content: center;

  max-width: 350px;

  gap: 8px
`

type TitleProps = {
  variant: 'positive' | 'negative'
}

export const Title = styled.Text<TitleProps>`
  text-align: center;

  ${({ theme, variant }) => css`
    color: ${variant === 'positive' ? theme.colors.green[500] : theme.colors.red[600]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xl}px;
    line-height: 30px; /* 130% */
  `}
`

export const Description = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.base}px;
    line-height: 20px; /* 130% */
  `}
`

export const DescriptionBold = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.base}px;
    line-height: 20px; /* 130% */
  `}
`
