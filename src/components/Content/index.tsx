import React from 'react'
import settings from '../../config/settings.json'
import Links from './Links'
import { ContentProps } from '../../interfaces/Content'
import { ContentWrapper } from './styles'
import Divider from './Divider'
const Content = (): JSX.Element => {
  const renderContentByType = (content: ContentProps): JSX.Element | undefined => {
    switch (content.type) {
      case 'link':
        return <Links item={content} />
      case 'divider':
        return <Divider item={content} />
      default:
        return undefined
    }
  }

  return (
        <ContentWrapper>
            {settings.content.map((content) => (
              renderContentByType(content)
            ))}
        </ContentWrapper>
  )
}

export default Content
