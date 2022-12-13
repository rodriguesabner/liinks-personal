import React from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, BodyModal, Container, Layout, WrapperButtons } from './styles'
import { X } from 'phosphor-react'
import settings from '../../../config/settings.json'

const ModalShare = ({ open, onClose, onCallQrCode }: { open: boolean, onClose: any, onCallQrCode: any }): any => {
  const share = (): void => {
    try {
      void navigator.share({
        title: `Check out ${settings.profile_info.fullName}'s page`,
        url: window.location.href
      })
      onClose()
    } catch (e) {
      onClose()
    }
  }

  return open && createPortal(
        <Layout>
            <Backdrop onClick={() => onClose()} />
            <Container>
                <X color={'#fff'} size={26} onClick={() => onClose()}/>
                <BodyModal>
                    <p>{settings.profile_info.fullName}</p>
                    <img src={settings.profile_info.avatar} alt={settings.profile_info.fullName}/>

                    <WrapperButtons>
                        <button onClick={() => onCallQrCode()}>
                            Ver QR Code
                        </button>
                        <button onClick={() => share()}>
                            Compartilhar com amigos
                        </button>
                    </WrapperButtons>
                </BodyModal>
            </Container>
        </Layout>
        , document.body
  )
}

export default ModalShare
