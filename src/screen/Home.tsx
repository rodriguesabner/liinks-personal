import React from 'react'
import { Layout } from './styles'
import Profile from '../components/Profile'
import Social from '../components/Social'
import Content from '../components/Content'

const Home = (): JSX.Element => {
  return (
        <Layout>
            <Profile />
            <Social />
            <Content />
        </Layout>
  )
}

export default Home
