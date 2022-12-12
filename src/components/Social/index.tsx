import React from 'react'
import { Item, Layout, SocialMediaWrapper } from './styles'
import settings from '../../config/settings.json'
import { EnvelopeSimple, GithubLogo, YoutubeLogo, InstagramLogo } from 'phosphor-react'

const Social = (): JSX.Element => {
  return (
        <Layout>
            <SocialMediaWrapper>
                <Item>
                    <a href={settings.social_info.email} target={'_blank'} rel="noreferrer">
                        <EnvelopeSimple size={28} />
                    </a>
                </Item>
                <Item>
                    <a href={settings.social_info.github} target={'_blank'} rel="noreferrer">
                        <GithubLogo size={28} />
                    </a>
                </Item>
                <Item>
                    <a href={settings.social_info.youtube} target={'_blank'} rel="noreferrer">
                        <YoutubeLogo size={28} />
                    </a>
                </Item>
                <Item>
                    <a href={settings.social_info.instagram} target={'_blank'} rel="noreferrer">
                        <InstagramLogo size={28} />
                    </a>
                </Item>
            </SocialMediaWrapper>
        </Layout>
  )
}

export default Social
