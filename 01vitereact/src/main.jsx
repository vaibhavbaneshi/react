import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const user = "username"

const reactElement = React.createElement (
    'a',
    {
      href: 'http://youtube.com',
      target: '_blank'
    },
    'click me to visits google',
    user
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
