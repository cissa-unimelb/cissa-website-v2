import "./scrollButton.css";

const ScrollButton = (props) => {
    let floatDirection = "left";
    let buttonType = "scrollButtonLeft";

    if (props.direction == "Right"){
        floatDirection = "right";
        buttonType = "scrollButtonRight";
    }

    return(
        <button className={`scrollButton ${buttonType}`}
            onClick={props.onClickFunc}
            style={{
                float: floatDirection
            }}>
        </button>
    )
}

export default ScrollButton;