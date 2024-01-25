import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom"; 

import './assets/css/headerFooter/headerFooter.css'
import './assets/css/main.css'

import DemoPage from './demo/demoPage.jsx' // Temporary
import Gallery from './gallery/gallery'
import AboutPage from './about/aboutPage.jsx'
import UpEventPage from './upEvent/upEventPage'
import PastEventPage from './pastEvent/pastEventPage'
import HeroPage from './hero/heroPage'
import ContactPage from './contact/contactPage'
import SponsorsPage from "./sponsors/sponsorsPage.jsx"
import CareersPage from "./careers/careersPage.jsx"
import GuidePage from "./guide/guidePage.jsx"

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
            {/* /demo is temporary */}
            <Route path="demo" element={<DemoPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="committee-archive" element={<CommitteeArchive />} />
            <Route path="sponsors" element={<SponsorsPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="upcoming-events" element={<UpEventPage />} />
            <Route path="past-events" element={<PastEventPage />} />
            <Route path="first-year-guide" element={<GuidePage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
