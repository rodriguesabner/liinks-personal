import React from 'react'
import { Swiper } from 'swiper/react'
import { ContentProps } from '../../../interfaces/Content'
import { Container, CoverImage, Description, Layout, Link, SwiperWrapper, Title } from './styles'
import 'swiper/css'

const Gallery = ({ items }: { items: ContentProps[] }): JSX.Element => {
  return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1.45}
            centeredSlides={true}
        >
            {items.map((item, index) => (
                <SwiperWrapper key={index}>
                    <Layout>
                        <CoverImage src={item.cover_image} alt={'Cover Image'} />
                        <Container>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>

                            {item.text_button != null && (
                                <Link href={item.url} target={'_blank'} rel={'noreferrer'}>
                                    {item.text_button}
                                </Link>
                            )}
                        </Container>
                    </Layout>
                </SwiperWrapper>
            ))}
        </Swiper>
  )
}

export default Gallery
