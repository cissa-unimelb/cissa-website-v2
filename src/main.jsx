import React from 'react'
import ReactDOM from 'react-dom/client'
import HeroPanel from './heroPanel'
import Initiative from './initiative'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroPanel />
    <Initiative />
  </React.StrictMode>,
)