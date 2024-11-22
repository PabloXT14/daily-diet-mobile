import type { ReactNode } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

import { ModalContainer } from './styles'

type ReusableModalProps = {
  children: ReactNode
  isVisible: boolean
  onClose: () => void
}

export function ReusableModal({
  children,
  isVisible,
  onClose,
}: ReusableModalProps) {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver
      isVisible={isVisible}
      onBackdropPress={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ModalContainer>{children}</ModalContainer>
      </View>
    </Modal>
  )
}
