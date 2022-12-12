import React from 'react'
import { ContentProps } from '../../../interfaces/Content'

const Video = ({ item }: { item: ContentProps }): JSX.Element => {
  const sanitizeUrlVideo = (): string => {
    let idVideo = ''
    if (item.url != null) {
      if (item.url.includes('v=')) {
        idVideo = item.url.split('v=')[1]
      }

      if (item.url.includes('.be/')) {
        idVideo = item.url.split('.be/')[1]
      }

      if (item.url.includes('embed/')) {
        idVideo = item.url.split('embed/')[1]
      }
    }

    return `https://www.youtube.com/embed/${idVideo}`
  }

  return (
        <li>
            <iframe
                width="100%"
                height="250"
                src={sanitizeUrlVideo()}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </li>
  )
}

export default Video
