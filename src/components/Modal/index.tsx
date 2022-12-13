import React from 'react'
import { createPortal } from 'react-dom'
import { BodyModal, Container, Layout, WrapperButtons } from './styles'
import { X } from 'phosphor-react'
import settings from '../../config/settings.json'

const ModalShare = ({ open, onClose }: { open: boolean, onClose: any }): any => {
  const share = (): void => {
    void navigator.share({
      title: `Check out ${settings.profile_info.fullName}'s page`,
      url: window.location.href
    })
  }

  return open && createPortal(
        <Layout>
            <Container>
                <X color={'#fff'} size={26} onClick={() => onClose()}/>
                <BodyModal>
                    <p>{settings.profile_info.fullName}</p>
                    <img src={settings.profile_info.avatar} alt={settings.profile_info.fullName}/>

                    <WrapperButtons>
                        <button>
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
