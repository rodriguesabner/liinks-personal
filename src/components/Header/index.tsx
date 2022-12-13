import React, { useState } from 'react'
import { Button, Layout } from './styles'
import { Share, UserPlus } from 'phosphor-react'
import ModalShare from '../Share/ModalShare'
import VCard from 'vcard-creator'
import settings from '../../config/settings.json'
import ModalQRCode from '../Share/ModalQrCode'

const Header = (): JSX.Element => {
  const [openModalShare, setOpenModalShare] = useState(false)
  const [openQrCodeModal, setOpenQrCodeModal] = useState(false)

  const shareProfile = (): void => {
    setOpenModalShare(true)
  }

  const saveContact = (): void => {
    const myVCard = new VCard()

    const firstname = settings.profile_info.firstName
    const lastname = settings.profile_info.lastName
    const additional = ''
    const prefix = ''
    const suffix = ''

    myVCard
      .addName(lastname, firstname, additional, prefix, suffix)
      .addCompany(settings.profile_info.company)
      .addJobtitle(settings.profile_info.jobTitle)
      .addRole(settings.profile_info.role)
      .addEmail(settings.profile_info.email)
      .addPhotoURL(settings.profile_info.avatar)
      .addPhoneNumber(settings.profile_info.phoneNumber, 'PREF;WORK')
      .addURL(location.href)

    generateDownloadFile(myVCard)
  }

  const generateDownloadFile = (vCard: any): void => {
    const myFile = new File([vCard.toString()], `${settings.profile_info.fullName}.vcf`)

    const link: any = document.createElement('a')
    link.style.display = 'none'
    link.href = URL.createObjectURL(myFile)
    link.download = myFile.name

    document.body.appendChild(link)
    link.click()

    setTimeout(() => {
      URL.revokeObjectURL(link.href)
      link.parentNode.removeChild(link)
    }, 0)
  }

  const handleOpenQrCodeModal = (): void => {
    setOpenModalShare(false)
    setOpenQrCodeModal(true)
  }

  const handleCloseQrCodeModal = (): void => {
    setOpenQrCodeModal(false)
  }

  return (
        <Layout>
            <ModalShare
                open={openModalShare}
                onClose={() => setOpenModalShare(false)}
                onCallQrCode={handleOpenQrCodeModal}
            />
            <ModalQRCode open={openQrCodeModal} onClose={handleCloseQrCodeModal}/>
            <Button onClick={() => saveContact()}>
                <UserPlus size={24} />
            </Button>

            <Button onClick={() => shareProfile()}>
                <Share size={24} />
            </Button>
        </Layout>
  )
}

export default Header
