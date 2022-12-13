import React from 'react'
import {
  Si500Px,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiOnlyfans,
  SiTwitch,
  SiTwitter,
  SiYoutube,
  SiFacebook,
  SiWhatsapp,
  SiDiscord,
  SiSpotify,
  SiFigma,
  SiClubhouse,
  SiNpm,
  SiInternetexplorer,
  SiJira
} from 'react-icons/si'

const FormatIcon = ({ name }: { name: string }): JSX.Element => {
  const sizeIcon = 20

  const renderIcon = (): JSX.Element | undefined => ({
    github: <SiGithub size={sizeIcon}/>,
    email: <SiGmail size={sizeIcon}/>,
    youtube: <SiYoutube size={sizeIcon}/>,
    onlyFans: <SiOnlyfans size={sizeIcon}/>,
    twitter: <SiTwitter size={sizeIcon}/>,
    twitch: <SiTwitch size={sizeIcon}/>,
    '500px': <Si500Px size={sizeIcon}/>,
    instagram: <SiInstagram size={sizeIcon}/>,
    linkedin: <SiLinkedin size={sizeIcon}/>,
    facebook: <SiFacebook size={sizeIcon}/>,
    whatsapp: <SiWhatsapp size={sizeIcon}/>,
    discord: <SiDiscord size={sizeIcon}/>,
    spotify: <SiSpotify size={sizeIcon}/>,
    figma: <SiFigma size={sizeIcon}/>,
    clubhouse: <SiClubhouse size={sizeIcon}/>,
    npm: <SiNpm size={sizeIcon}/>,
    site: <SiInternetexplorer size={sizeIcon}/>,
    jira: <SiJira size={sizeIcon}/>
  })[name]

  return (
        <>
            {renderIcon()}
        </>
  )
}

export default FormatIcon
