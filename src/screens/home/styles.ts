import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { css, styled } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 38px 24px 0;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`

type PercentVariant = 'primary' | 'secondary'

type PercentStyleProps = {
  variant: PercentVariant
}

export const PercentContainer = styled(TouchableOpacity)<PercentStyleProps>`
  flex: 1;
  position: relative;

  min-height: 102px;
  max-height: 102px;

  align-items: center;
  justify-content: center;

  gap: 2px;

  margin-bottom: 40px;

  border-radius: 8px;
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

export const PercentIcon = styled(ArrowUpRight).attrs<PercentStyleProps>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === 'primary' ? theme.colors.green[500] : theme.colors.red[600],
  })
)`
  position: absolute;
  top: 8px;
  right: 8px;
`
