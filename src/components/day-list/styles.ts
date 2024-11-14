import { css, styled } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  gap: 8px;
`

export const Day = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
    line-height: 24px; /* 130% */
  `}
`
