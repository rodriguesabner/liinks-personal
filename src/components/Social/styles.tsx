import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 33px;
`

export const SocialMediaWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`

export const Item = styled.li`
  margin-right: 10px;
  
  :last-child {
    margin-right: 0;
  }
`
