import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

import { css, styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

type PercentVariant = 'primary' | 'secondary'

type PercentStyleProps = {
  variant: PercentVariant
}

export const PercentContainer = styled.View<PercentStyleProps>`
  flex: 1;
  position: relative;

  align-items: center;
  justify-content: center;

  min-height: 200px;
  max-height: 200px;

  gap: 2px;
  background-color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.green[100] : theme.colors.red[100])};
`

export const PercentNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize['2xl']}px;
    color: ${theme.colors.gray[950]};
    line-height: 42px; /* 130% */
  `}
`

export const PercentDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm}px;
    color: ${theme.colors.gray[900]};
    line-height: 18px; /* 130% */
  `}
`

export const PercentButton = styled(TouchableOpacity)`
  position: absolute;
  top: 56px;
  left: 24px;
`

export const PercentIcon = styled(ArrowLeft).attrs<PercentStyleProps>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === 'primary' ? theme.colors.green[500] : theme.colors.red[600],
  })
)``

export const Content = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray[50]};

  gap: 24px;
  margin-top: -32px;
  padding: 32px 24px;

  border-radius: 20px 20px 0 0;
`

export const ContentTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray[950]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm}px;
    line-height: 18px; /* 130% */
  `}
`

export const ContentData = styled.View`
  gap: 12px;
`
