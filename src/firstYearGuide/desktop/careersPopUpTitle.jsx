import PopupButton from "../components/popup/popupButton";

const CareersPopupTitle = (props) => {
    var baseAnchor = props.baseAnchor;
    var windowWidth = Math.min(window.innerWidth, 1000);
    var subtitleSize = windowWidth/65;
    return(
        <div>
            <div 
                className="desktopView__subtitle"
                style={{
                    top: `${baseAnchor.y + baseAnchor.height * 0.59}px`,
                    left: `${baseAnchor.x + baseAnchor.width * 0.24}px`,
                    fontSize: `${subtitleSize}px`,
                }}>
                CAREERS
            </div>

            <PopupButton 
                    text="Internship guide" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.1, baseAnchor.y + baseAnchor.height * 0.86],
                        maxWidth: 200,
                        //bound: false
                    }}
                >
                    <h3>INTERNSHIP GUIDES</h3>
                    <ul>
                        <li>Start early</li>
                        <ul>
                            <li>Most internship application open early of your penultimate(2nd year)</li>
                            <li>Apply to as many as you can, some students worry about getting multiple offers then having to reject one… Better than not getting any offers.</li>
                            <li>Write your resume early, and get it proofread by at least 2 people.</li>
                        </ul>
                        <li>Do hackathons: show employers that you are technically capable</li>
                        <li>Aiming for big tech: start doing leetcode at the end of your first year</li>
                        <li>Student organisations</li>
                    </ul>
                </PopupButton>

                <PopupButton 
                    text="Extra curricular" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.4, baseAnchor.y + baseAnchor.height * 0.8],
                        maxWidth: 150,
                        align: 'right'
                        //bound: false
                    }}
                >
                    <h3>EXTRA CURRICULAR</h3>
                    <ul>
                        <li>Join CISSA + UMSU club forms</li>
                        <li>Hackathon / product-a-thon</li>
                        <ul>
                            <li>Good for jobs</li>
                            <li>Forcing yourself to learn how a complete product gets built, 
                                think about the 4 stages of any project: analysis, design, 
                                development and evaluation, and what goes on in each stage. </li>
                            <li>IT project</li>
                            <li>Many of CISSA members got their first job by winning/participating in CISSA hackathon</li>
                        </ul>
                        <li>Volunteering opportunities with uni -&gt; Open day </li>
                        <ul>
                            <li>SSLC</li>
                            <li>Melbourne Plus (Tutoring opportunities available: e.g. GPN tutoring, SuperHack mentoring, and many more)</li>
                            <li>Peer mentoring</li>
                        </ul>
                    </ul>
                </PopupButton>

                <PopupButton 
                    text="Resume tips" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.1, baseAnchor.y + baseAnchor.height * 0.7],
                        maxWidth: 300,
                        align: 'right'
                        //bound: false
                    }}
                >
                    <h3>RESUME TIPS</h3>
                    <ul>
                        <li> Limit to 1 page; Max 2</li>
                        <li>Use dot points, sections and clear headings.</li>
                        <li>Don’t list your skills and don’t explain how you got them.</li>
                        <li>Don’t use abbreviations like UoM. </li>
                        <li>IMPORTANT: Do not use complicated designs. 
                            Most if not all job applications have a system that
                             automatically rejects applications 
                             that have an unreadable resume. 
                             Complicated designs could mean the 
                             system can’t read your resume, causing it to be
                              rejected before a person even looks at it.</li>
                    </ul>
                </PopupButton>

                <PopupButton 
                    text="How to start" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.3, baseAnchor.y + baseAnchor.height * 0.95],
                        maxWidth: 300,
                        //bound: false
                    }}
                >
                    <h3>HOW TO START</h3>
                    <ul>
                        <li>Join Startmate</li>
                        <li>Follow club listings for career messages</li>
                        <li>Make your own application tracker. 
                            Here is a <a target= '_blank' href="https://docs.google.com/spreadsheets/d/1g7ITVWLaG09YQWudSCBN9cvK7pVzo89BumZHMttrKtg/edit#gid=0">template</a>.</li>
                        <li>Learn about things beyond the subject</li>
                        <li>Participate in education workshops and hackathons</li>
                        <li>Talk to Academic Advisors/Mentors/Stop 1</li>
                        <li>Attend Tech talks/Panels/Industry Connect</li>
                    </ul>
                </PopupButton>
        </div>
    )
}

export default CareersPopupTitle;