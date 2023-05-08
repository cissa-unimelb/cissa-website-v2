import React from 'react'
import ReactDOM from 'react-dom/client'

import HeroPanel from './heroPanel'
import Initiative from './initiative'
import WhatWeDo from './infoCards'

import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroPanel />
    <Initiative />
    <WhatWeDo />
  </React.StrictMode>
)
