import { TextInput } from 'react-native'
import { css, styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  max-height: 70px;
  gap: 4px;
`

type InputContainerProps = {
  isFocused: boolean
}

export const InputContainer = styled(TextInput)<InputContainerProps>`
  height: 48px;
  padding: 0 14px;

  flex-direction: row;
  align-items: center;
  gap: 8px;

  border-radius: 6px;

  ${({ theme, isFocused }) => css`
    border: 1px solid ${isFocused ? theme.colors.gray[600] : theme.colors.gray[200]};

    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.base}px;
    line-height: 20px; /* 130% */
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[900]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    line-height: 18px; /* 130% */
  `}
`
