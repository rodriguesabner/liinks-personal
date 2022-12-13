import { createGlobalStyle } from 'styled-components'
import settings from '../config/settings.json'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  
  html, body, #root, .App {
    width: 100%;
    height: 100%;
    background-color: ${settings.app.background_color};
  }
  
  .App {
    position: relative;
    
    @media(min-width: 768px) {
      max-width: 500px;
      margin: 0 auto;
      border: 2px solid ${settings.app.card_color};
      overflow: auto;
    }
  }
  
  body {
    font-family: 'Rubik', sans-serif;
    color: ${settings.app.text_color};
    position: relative;
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

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: #070807;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
