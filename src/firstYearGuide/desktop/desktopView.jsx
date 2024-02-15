import desktopImg from "./assets/images/FYG_Desktop.png";

const DesktopView = (props) => {
    return(
        <div style={{
            width: "100vw",
            height: "100svh",
        }}>
            <img 
                src={desktopImg}
                style={{
                    width: "100vw",
                    height: "100svh"
                }}
            />
        </div>
    )
}



export default DesktopView;