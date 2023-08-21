import {Route, Routes} from "react-router-dom"; 

import './assets/css/header_footer/header_footer.css'
import './assets/css/main.css'

import Header from './header_footer/Header'
import Footer from './header_footer/Footer'
import Gallery from './gallery/gallery'
import AboutPage from './about/aboutPage.jsx'
import UpEventPage from './upEvent/upEventPage'
import PastEventPage from './pastEvent/pastEventPage'
import HeroPage from './hero/heroPage'
import ContactPage from './contact/contactPage'

import SharedLayout from './sharedLayout/sharedLayout'
import CommitteeArchive from './committeeArchive/CommitteeArchive'
import './assets/css/main.css'


function App(){
  return(
    <>
      <Header mobileBreakpoint={1000} />
      <Routes>
          <Route path="/" element={<HeroPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/events" element={<UpEventPage />} />

          <Route path="/past_events" element={<PastEventPage />} />

          <Route path="/gallery" element={<Gallery />}/>

          <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>

// function App() {
//   return (
//     <div>
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<SharedLayout />}>
//             <Route index element={<HeroPage />}></Route>
//             <Route path="about" element={<AboutPage />} />
//             <Route path="committee-archive" element={<CommitteeArchive />} />
//             <Route path="gallery" element={<Gallery />} />
//             <Route path="contact" element={<ContactPage />} />
//             <Route path="upcoming-events" element={<UpEventPage />} />
//             <Route path="previous-events" element={<PastEventPage />} />
//             <Route path="*" element={<Error />} />
//           </Route>
//         </Routes>
//       </HashRouter>
//     </div>
  )
}

export default App
