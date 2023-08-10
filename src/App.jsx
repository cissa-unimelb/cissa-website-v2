import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from './gallery/gallery'
import AboutPage from './about/aboutPage.jsx'
import UpEventPage from './upEvent/upEventPage'
import PastEventPage from './pastEvent/pastEventPage'
import HeroPage from './hero/heroPage'
import ContactPage from './contact/contactPage'
import SharedLayout from './sharedLayout/sharedLayout'
import CommitteeArchive from './committeeArchive/CommitteeArchive'
import './assets/css/main.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HeroPage />}></Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="committee-archive" element={<CommitteeArchive />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="upcoming-events" element={<UpEventPage />} />
            <Route path="previous-events" element={<PastEventPage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
