import { useState } from "react";
import "./assets/css/lightBox.css";



const LightBox = (props) => {
    // const [display, setDisplay] = useState(props.display);
    // const [img_src, setImgSrc] = useState(null);

    console.log(props.display);
    console.log(props.img_src);

    // setDisplay(props.display);
    // setImgSrc(props.img_src);

    if (props.display == false){
        return null;
    }

    console.log(props.display);

    return (
        <div className="lightboxContainer">
            <div className="lightboxOverlay"></div>
            <div className="lightbox">
                <img src={props.img_src} />
                <div className="lb-nav">
                    <button className="lb-prev" />
                    <button className="lb-next" />
                </div>
            </div>
        </div>
    )
}

export default LightBox