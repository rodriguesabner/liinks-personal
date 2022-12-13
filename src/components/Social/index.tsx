import React, { useEffect, useState } from 'react'
import { Item, Layout, SocialMediaWrapper } from './styles'
import settings from '../../config/settings.json'
import { SocialInfoProps } from '../../interfaces/Config'
import FormatIcon from './FormatIcon'

const Social = (): JSX.Element => {
  const [config, setConfig] = useState<SocialInfoProps[]>([])

  useEffect(() => {
    const arr = []
    for (const elem of settings.social_info) {
      arr.push({
        ...elem,
        icon: <FormatIcon name={elem.name.toLowerCase()} />
      })
    }

    setConfig(arr)
  }, [])

  return (
        <Layout>
            <SocialMediaWrapper>
                {config.map((item: any, index) => (
                    <Item key={index}>
                        <a href={item.url} target={'_blank'} rel="noreferrer">
                            {item.icon}
                        </a>
                    </Item>
                ))}
            </SocialMediaWrapper>
        </Layout>
  )
}

export default Social
