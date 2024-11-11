import { Pressable } from 'react-native'
import { css, styled } from 'styled-components/native'

export type ToggleVariant = 'primary' | 'secondary'

type ToggleStyleProps = {
  variant: ToggleVariant
  isChecked: boolean
}

export const Container = styled(Pressable)<ToggleStyleProps>`
  flex: 1;

  max-height: 50px;
  min-height: 50px;

  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 6px;

  ${({ theme, variant, isChecked }) => css`
    background-color: ${
      (variant === 'primary' && isChecked && theme.colors.green[100]) ||
      (variant === 'secondary' && isChecked && theme.colors.red[100]) ||
      (!isChecked && theme.colors.gray[100])
    };
    border: 1px solid ${
      (variant === 'primary' && isChecked && theme.colors.green[500]) ||
      (variant === 'secondary' && isChecked && theme.colors.red[600]) ||
      (!isChecked && theme.colors.gray[100])
    };
  `}
`

type CircleStyleProps = {
  variant: ToggleVariant
}

export const Circle = styled.View<CircleStyleProps>`
  width: 8px;
  height: 8px;

  border-radius: 9999px;

  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.green[500] : theme.colors.red[600]};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    line-height: 18px; /* 130% */
  `}
`
