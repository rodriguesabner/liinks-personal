import styled from 'styled-components'
import settings from '../../config/settings.json'

export const Layout = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  height: 68px;
`

export const Button = styled.button`
  background-color: transparent;
  color: ${settings.app.text_color};
`
