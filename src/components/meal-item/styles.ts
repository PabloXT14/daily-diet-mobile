import { TouchableOpacity } from 'react-native'
import { css, styled } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  gap: 12px;

  padding: 14px 12px 14px 16px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xs}px;
    line-height: 16px; /* 130% */
  `}
`

export const Divider = styled.View`
  width: 1px;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.gray[300]};
`

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.base}px;
    line-height: 20px; /* 130% */
  `}
`

type StatusProps = {
  variant: 'primary' | 'secondary'
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;

  border-radius: 9999px;

  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.green[200] : theme.colors.red[300]};
`
