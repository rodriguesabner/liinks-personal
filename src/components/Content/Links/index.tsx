import React from 'react'
import { Description, Layout, Title } from './styles'
import { ContentProps } from '../../../interfaces/Content'

const Links = ({ item }: { item: ContentProps }): JSX.Element => {
  return (
        <Layout>
            <Title>
                {item.title}
            </Title>
            <Description>
                {item.description}
            </Description>
        </Layout>
  )
}

export default Links
