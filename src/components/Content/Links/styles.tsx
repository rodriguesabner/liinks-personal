import styled from 'styled-components'
import settings from '../../../config/settings.json'

export const Layout = styled.li`
  background-color: ${settings.app.card_color};
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
`

export const Title = styled.h3`
  color: ${settings.app.card_text_color};
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 5px;
`

export const Description = styled.p`
  color: ${settings.app.card_text_color};
  font-size: 13px;
  opacity: .6;
`
