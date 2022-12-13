import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import settings from './config/settings.json'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const fullName = `${settings.profile_info.firstName} ${settings.profile_info.lastName}`
const job = settings.profile_info.jobTitle
document.title = `${fullName} - ${job}`

root.render(
    <App />
)
