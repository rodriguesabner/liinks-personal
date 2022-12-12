import React from 'react'
import { Description, Layout, Title } from './styles'
import { ContentProps } from '../../../interfaces/Content'

const Links = ({ item }: { item: ContentProps }): JSX.Element => {
  return (
        <Layout>
            <a href={item.url} target={'_blank'} rel="noreferrer">
                <Title>
                    {item.title}
                </Title>
                <Description>
                    {item.description}
                </Description>
            </a>
        </Layout>
  )
}

export default Links
