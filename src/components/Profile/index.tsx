import React from 'react'
import settings from '../../config/settings.json'
import { Avatar, FullName, Layout } from './styles'

const Profile = (): JSX.Element => {
  const fullName = `${settings.profile_info.firstName} ${settings.profile_info.lastName}`

  return (
        <Layout>
            <Avatar
                src={settings.profile_info.avatar}
                alt={fullName}
                draggable={false}
            />
            <FullName>
                {fullName}
            </FullName>
        </Layout>
  )
}

export default Profile
