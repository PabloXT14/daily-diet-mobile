import { Modal, TouchableWithoutFeedback, type ModalProps } from 'react-native'
import { ModalContainer, Overlay } from './styles'

type ReusableModalProps = ModalProps

export function ReusableModal({ children, ...props }: ReusableModalProps) {
  return (
    <Modal transparent animationType="fade" {...props}>
      <TouchableWithoutFeedback onPress={props.onRequestClose}>
        <Overlay>
          <TouchableWithoutFeedback>
            <ModalContainer>{children}</ModalContainer>
          </TouchableWithoutFeedback>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
