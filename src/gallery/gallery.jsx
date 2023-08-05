import { useState } from 'react'

import '../assets/css/gallery/galleryPage.css'

import GridView from './gridView'
import LightBox from './lightBox'

const Gallery = (props) => {
  const [lightBoxDisplay, setLightBoxDisplay] = useState(false)
  const [currIndex, setCurrIndex] = useState(0)

  return (
    <div>
      <header>
        <h1 className='section-title'>GALLERY</h1>
      </header>

      <div className='gallery'>

        {
                    lightBoxDisplay
                      ? <div className='lightboxObj'>
                        <LightBox
                          img_ind={currIndex}
                          setCurrIndex={setCurrIndex}
                          display={lightBoxDisplay}
                          setDisplay={setLightBoxDisplay}
                        />
                      </div>
                      : ''
                }

        <div className='grid'>
          <GridView
            setLightBoxDisplay={setLightBoxDisplay}
            setCurrIndex={setCurrIndex}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
