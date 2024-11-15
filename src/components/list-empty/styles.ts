import { css, styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.base}px;
    line-height: 20px; /* 130% */
  `}
`
