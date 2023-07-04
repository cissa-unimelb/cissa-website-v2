import "./assets/css/gridView.css";
import all_image from "./imgArr";



const GridView = (props) => {
    return (
        <div>
            <div className="gallery-image">
                {all_image.map((image, index) => {
                    return (
                        <div className="img-box" key={index}>
                            <img src={image} alt="1" 
                            onClick={() => {
                                props.setCurrImg(image);
                                props.setLightBoxDisplay(true);
                            }}/>
                        </div>
                    );
                })}
                
            </div>
        </div>
    )
}

export default GridView;