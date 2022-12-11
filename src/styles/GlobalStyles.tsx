import { createGlobalStyle } from 'styled-components'
import settings from '../config/settings.json'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root, .App {
    width: 100%;
    height: 100%;
    background-color: ${settings.app.background_color};
  }
  
  body {
    font-family: 'Rubik', sans-serif;
    color: ${settings.app.text_color};
  }

  a {
    color: ${settings.app.text_color};
  }

  button {
    background-color: ${settings.app.button_color};
    color: ${settings.app.button_text_color};
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`
