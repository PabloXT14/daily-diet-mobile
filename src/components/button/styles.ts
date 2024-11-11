import { Pressable } from 'react-native'
import { css, styled } from 'styled-components/native'

export type ButtonVariant = 'primary' | 'secondary'

type ButtonStyleProps = {
  variant: ButtonVariant
  isFocused: boolean
}

export const Container = styled(Pressable)<ButtonStyleProps>`
  flex: 1;
  
  min-height: 50px;
  max-height: 50px;
  
  padding: 0 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;

  ${({ theme, variant, isFocused }) => css`
    background-color: ${
      (variant === 'primary' && !isFocused && theme.colors.gray[900]) ||
      (variant === 'primary' && isFocused && theme.colors.gray[950]) ||
      (variant === 'secondary' && !isFocused && 'transparent') ||
      (variant === 'secondary' && isFocused && theme.colors.gray[200])
    };
    border: ${variant === 'secondary' && `1px solid ${theme.colors.gray[950]}`}
  `}
`

type TitleStyleProps = {
  variant: ButtonVariant
}

export const Title = styled.Text<TitleStyleProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    color: ${variant === 'primary' ? theme.colors.white : theme.colors.gray[950]};
  `}
`
