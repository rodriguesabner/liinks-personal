interface ContentProps {
  type: string
  url?: string
  title?: string
  description?: string
  cover_image?: string
  text_button?: string
  linkGalleryItems?: ContentProps[]
}

export type {
  ContentProps
}
