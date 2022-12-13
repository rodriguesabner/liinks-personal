import React, { useState } from 'react'
import { Button, Layout } from './styles'
import { Share, UserPlus } from 'phosphor-react'
import ModalShare from '../Modal'

const Header = (): JSX.Element => {
  const [openModalShare, setOpenModalShare] = useState(false)

  const shareProfile = (): void => {
    setOpenModalShare(true)
  }

  const saveContact = (): void => {

  }

  return (
        <Layout>
            <ModalShare open={openModalShare} onClose={() => setOpenModalShare(false)} />
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
