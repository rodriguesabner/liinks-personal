import styled from 'styled-components'

export const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  svg {
    z-index: 2;
    cursor: pointer;
  }

  @media(min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  z-index: 1;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -4em;
  z-index: 2;
`

export const BodyModal = styled.div`
  background-color: #fcfcfc;
  max-height: 50%;
  border-radius: 4px;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    margin: 1em 0;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 30%);
  }

  button {
    cursor: pointer;
    background-color: #121212;
    min-height: 40px;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 15px;
  }
`
export const FullName = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 15px;
`

export const UrlComponent = styled.p`
  font-weight: 400;
  color: #000;
  margin-bottom: 20px;
  font-size: 14px;
  margin-top: 5px;
`
