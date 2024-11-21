import { styled } from 'styled-components/native'

export const Overlay = styled.View`
  flex: 1;

  background-color: rgba(0, 0, 0, 0.5);

  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.View`
  z-index: 5;

  width: 80%;
  padding: 24px;
  
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 8px;
`
