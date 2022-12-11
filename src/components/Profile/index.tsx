import React from 'react'
import settings from '../../config/settings.json'
import { Avatar, FullName, Layout } from './styles'
const Profile = (): JSX.Element => {
  return (
        <Layout>
            <Avatar
                src={settings.profile_info.avatar}
                alt={settings.profile_info.fullName}
                draggable={false}
            />
            <FullName>
                {settings.profile_info.fullName}
            </FullName>
        </Layout>
  )
}

export default Profile
