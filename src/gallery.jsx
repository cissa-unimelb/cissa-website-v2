import { useState } from "react";

import "./assets/css/galleryPage.css";

import GridView from "./gridView";
import LightBox from "./lightBox";

import Im1 from "./assets/images/gallery_1.jpg";


const Gallery = (props) => {
    const [lightBoxDisplay, setLightBoxDisplay] = useState(true);
    const [currImg, setCurrImg] = useState(Im1);    

    return (
        <div>
            <header className="black-header">
                <h1 className="section-title white-header-text">GALLERY</h1>
            </header>

            <div className="gallery">

                {
                    lightBoxDisplay? 
                    <div className="lightboxObj">
                        <LightBox img_src={currImg} display={lightBoxDisplay}/>
                    </div>
                    :"" 
                }

                <div className="grid">
                    <GridView setCurrImg={setCurrImg} setLightBoxDisplay={setLightBoxDisplay}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery