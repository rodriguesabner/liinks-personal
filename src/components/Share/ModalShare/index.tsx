import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, BodyModal, Container, Layout, WrapperButtons } from './styles'
import { X } from 'phosphor-react'
import settings from '../../../config/settings.json'

const ModalShare = ({ open, onClose, onCallQrCode }: { open: boolean, onClose: any, onCallQrCode: any }): any => {
  const fullName = `${settings.profile_info.firstName} ${settings.profile_info.lastName}`

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const share = (): void => {
    try {
      void navigator.share({
        title: `Check out ${fullName}'s page`,
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
                    <p>{fullName}</p>
                    <img src={settings.profile_info.avatar} alt={fullName}/>

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
