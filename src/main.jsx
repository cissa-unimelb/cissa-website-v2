import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/main.css'


import Gallery from './gallery/gallery'
import AboutPage from './about/aboutPage.jsx'
import UpEventPage from './upEvent/upEventPage'
import PastEventPage from './pastEvent/pastEventPage'
import HeroPage from './hero/heroPage'
import ContactPage from './contact/contactPage'

import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactPage />
  </React.StrictMode>
)
