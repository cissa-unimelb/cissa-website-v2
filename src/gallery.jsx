import { useState } from "react";

import "./assets/css/galleryPage.css";

import GridView from "./gridView";
import LightBox from "./lightBox";

import Im1 from "./assets/images/gallery_1.jpg";


const Gallery = (props) => {
    const [lightBoxDisplay, setLightBoxDisplay] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);    

    return (
        <div>
            <header className="black-header">
                <h1 className="section-title white-header-text">GALLERY</h1>
            </header>

            <div className="gallery">

                {
                    lightBoxDisplay? 
                    <div className="lightboxObj">
                        <LightBox img_ind={currIndex}
                            setCurrIndex={setCurrIndex} 
                            display={lightBoxDisplay}
                            setDisplay={setLightBoxDisplay}/>
                    </div>
                    :"" 
                }

                <div className="grid">
                    <GridView setLightBoxDisplay={setLightBoxDisplay}
                        setCurrIndex={setCurrIndex}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery