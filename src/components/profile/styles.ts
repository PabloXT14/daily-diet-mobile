import { styled } from 'styled-components/native'

export const Container = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.colors.gray[900]};
`
