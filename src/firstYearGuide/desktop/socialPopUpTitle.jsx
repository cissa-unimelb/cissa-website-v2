import PopupButton from "../components/popup/popupButton";

const SocialPopUpTitle = (props) => {
    var baseAnchor = props.baseAnchor;
    var windowWidth = Math.min(window.innerWidth, 1000);
    var subtitleSize = windowWidth/65;

    return(
        <div>
            <div 
                className="desktopView__subtitle"
                style={{
                    top: `${baseAnchor.y + baseAnchor.height * 0.49}px`,
                    left: `${baseAnchor.x + baseAnchor.width * 0.92}px`,
                    fontSize: `${subtitleSize}px`,
                }}>
                SOCIAL
            </div>

            <PopupButton 
                text="Making friends" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.85, baseAnchor.y + baseAnchor.height * 0.65],
                    maxWidth: 150,
                    align: 'right',
                }}
            >
                <h3>MAKING FRIENDS</h3>
                <ul>
                    <li>In-person classes</li>
                    <li>Clubs + joining committees/ subcoms</li>
                    <li>Going to tutorials/lectures and saying hi -&gt; trying to get to know people</li>
                    <li> Join a discord + first year discord links if they’re online </li>
                    <ul>
                        <li>Discord meetups etc</li>
                        <li>UMSU O-week meetups </li>
                        <li>Mixers</li>
                        <li>Pub nights</li>
                        <li>CISSA Big O-Camp</li>
                    </ul>
                </ul>

            </PopupButton>

            <PopupButton 
                text="Group mates" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.9, baseAnchor.y + baseAnchor.height * 0.8],
                    maxWidth: 200,
                }}
            >
                <h3>GROUP MATES</h3>
                <ul>
                    <li>Make friends prior to the project</li>
                    <li>JOIN CISSA!</li>
                    <li>Join clubs and societies relating to that subject</li>
                    <li>Join hackathons to meet like-minded people</li>
                    <li>Make sure your goals/grades you want to achieve are aligned</li>
                    <li>Reach out to people before the semester</li>
                </ul>
            </PopupButton>

            <PopupButton 
                text="Event list" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.8, baseAnchor.y + baseAnchor.height * 0.95],
                    maxWidth: 200,
                    align: 'right'
                }}
            >
                <h3>EVENTS</h3>
                <ul>
                    <li>Big O-camp</li>
                    <li>Hirefest</li>
                    <li>Diversi-tea</li>
                    <li>Industry Connect</li>
                    <li>Codebrew</li>
                    <li>Catalyst</li>
                    <li>Producthon</li>
                    <li>Study Sessions</li>
                    <li>Revision Workshops</li>
                </ul>
            </PopupButton>
        </div>
    )
}

export default SocialPopUpTitle;