import React from 'react'
import { ContentProps } from '../../../interfaces/Content'
import { Layout, Title } from './styles'

const Divider = ({ item }: { item: ContentProps }): JSX.Element => {
  return (
        <Layout>
            <Title>
                {item.title}
            </Title>
        </Layout>
  )
}

export default Divider
