import styled from 'styled-components'
import settings from '../../../config/settings.json'
import { SwiperSlide } from 'swiper/react'

export const SwiperWrapper = styled(SwiperSlide)`
  border-radius: 6px;
`

export const Layout = styled.li`
  background-color: ${settings.app.card_color};
  text-align: center;
  border-radius: 6px;
  cursor: default;
`

export const CoverImage = styled.img`
  width: 100%;
  height: 155px;
  object-fit: cover;
  border-radius: 6px;
`

export const Container = styled.div`
  padding: 16px;
  padding-bottom: 2em;
`

export const Title = styled.h3`
  color: ${settings.app.card_text_color};
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
  opacity: .6;
`

export const Description = styled.p`
  color: ${settings.app.card_text_color};
  font-size: 12px;
  opacity: .5;
  margin-bottom: 2.5em;
`

export const ButtonWrapper = styled.a`
  padding: 10px;
  border-radius: 4px;
  background-color: ${settings.app.button_color};
  border: 0;
  outline: 0;
  cursor: pointer;
  width: 200px;
  height: 42px;
  margin: 20px auto 0 auto !important;
  
  a {
    text-decoration: none;
    color: ${settings.app.button_text_color};
    width: 100%;
    height: 100%;
  }
`
