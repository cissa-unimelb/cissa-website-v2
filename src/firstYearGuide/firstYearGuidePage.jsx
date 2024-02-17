import DesktopView from "./desktop/desktopView"
import MobileView from "./mobile/mobileView"

const FirstYearGuidePage = (props) => {
    /* Check view port to display desktop or mobile view */
    if (window.innerWidth > 750){
        return <DesktopView />
    } else {
        return <MobileView />
    }
}



export default FirstYearGuidePage