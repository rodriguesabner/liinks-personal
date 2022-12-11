import React from 'react'
import { Item, Layout, SocialMediaWrapper } from './styles'
import settings from '../../config/settings.json'
import { EnvelopeSimple, GithubLogo, YoutubeLogo, InstagramLogo } from 'phosphor-react'

const Social = (): JSX.Element => {
  return (
        <Layout>
            <SocialMediaWrapper>
                <Item>
                    <a href={settings.social_info.email}>
                        <EnvelopeSimple size={28} />
                    </a>
                </Item>
                <Item>
                    <a href={settings.social_info.github}>
                        <GithubLogo size={28} />
                    </a>
                </Item>
                <Item>
                    <a href={settings.social_info.youtube}>
                        <YoutubeLogo size={28} />
                    </a>
                </Item>
                <Item>
                    <a href={settings.social_info.instagram}>
                        <InstagramLogo size={28} />
                    </a>
                </Item>
            </SocialMediaWrapper>
        </Layout>
  )
}

export default Social
