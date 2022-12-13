import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Home from './screens/Home'
import Header from './components/Header'

function App (): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Home/>
      <GlobalStyles />
    </div>
  )
}

export default App
