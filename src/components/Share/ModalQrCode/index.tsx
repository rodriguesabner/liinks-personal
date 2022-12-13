import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, BodyModal, Container, FullName, Layout, UrlComponent } from './styles'
import { X } from 'phosphor-react'
import settings from '../../../config/settings.json'
import QRCode from 'react-qr-code'

const ModalQRCode = ({ open, onClose }: { open: boolean, onClose: any }): any => {
  const fullName = `${settings.profile_info.firstName} ${settings.profile_info.lastName}`

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const sanitizeUrl = (): string => {
    const urlWithoutProtocol = window.location.href.replace(/^https?:\/\//, '')
    return urlWithoutProtocol.substring(0, urlWithoutProtocol.length - 1)
  }

  return open && createPortal(
        <Layout>
            <Backdrop onClick={() => onClose()} />
            <Container>
                <X color={'#fff'} size={26} onClick={() => onClose()}/>
                <BodyModal>
                    <FullName>{fullName}</FullName>
                    <UrlComponent>
                        {sanitizeUrl()}
                    </UrlComponent>

                    <QRCode value={location.href} level={'H'}/>
                </BodyModal>
            </Container>
        </Layout>
        , document.body
  )
}

export default ModalQRCode
