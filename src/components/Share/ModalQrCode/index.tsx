import React from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, BodyModal, Container, FullName, Layout, UrlComponent } from './styles'
import { X } from 'phosphor-react'
import settings from '../../../config/settings.json'
import QRCode from 'react-qr-code'

const ModalQRCode = ({ open, onClose }: { open: boolean, onClose: any }): any => {
  return open && createPortal(
        <Layout>
            <Backdrop onClick={() => onClose()} />
            <Container>
                <X color={'#fff'} size={26} onClick={() => onClose()}/>
                <BodyModal>
                    <FullName>{settings.profile_info.fullName}</FullName>
                    <UrlComponent>
                        {location.href.split('//')[1]}
                    </UrlComponent>

                    <QRCode value={location.href} level={'H'}/>
                </BodyModal>
            </Container>
        </Layout>
        , document.body
  )
}

export default ModalQRCode
