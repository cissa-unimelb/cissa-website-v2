import PopupButton from "../components/popup/popupButton";

const InterviewTipsPopupTitle = (props) => {
    var baseAnchor = props.baseAnchor;
    var windowWidth = Math.min(window.innerWidth, 1000);
    var subtitleSize = windowWidth/65;
    return(
        <div>
            <div 
                className="desktopView__subtitle"
                style={{
                    top: `${baseAnchor.y + baseAnchor.height * 0.41}px`,
                    left: `${baseAnchor.x + baseAnchor.width * 0.58}px`,
                    fontSize: `${subtitleSize}px`,
                }}>
                INTERVIEW TIPS
            </div>

            <PopupButton 
                text="Interview Tips 1" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.52, baseAnchor.y + baseAnchor.height * 0.6],
                    maxWidth: 200,
                    //bound: false
                }}
            >
                <h3>INTERVIEW TIPS 1</h3>
                <ul>
                    <li>Elaborate on your answers but don’t rattle on</li>
                    <li>Display enthusiasm towards your work and don’t give the impression that you need a job for the money.</li>
                    <li>
                    Great qualities to display:
                    <ul>
                        <li>Willingness to learn and grow</li>
                        <li>Ability to collaborate with others as well as be independent</li>
                    </ul>
                    </li>
                    <li>Stop, think, then talk. Show the interviewer that you’re thoughtful and not reckless.</li>
                    <li>Be professional
                    <ul>
                        <li>Speak clearly and loudly, don’t mumble or shout. Speak with enthusiasm and change your tone to keep the interviewer engaged. Remember, they probably do 10 interviews per day and are likely bored to death.</li>
                        <li>Dress well. Being overdressed over being underdressed. Best to wear a white shirt, suit pants, and dress shoes.</li>
                        <li>Be friendly, not friends. Don’t use jargon, slang or phrases like “Hey bro” or “what’s up mate”.</li>
                    </ul>
                    </li>
                </ul>
            </PopupButton>


            <PopupButton 
                text="Interview Tips 2" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.65, baseAnchor.y + baseAnchor.height * 0.75],
                    maxWidth: 200,
                    align: 'right',
                    //bound: false
                }}
            >
                <h3>INTERVIEW TIPS 2</h3>
                    <ul>
                        <li>Prepare 2-3 questions</li>
                        <li>Don’t ask about graduate opportunities or full-time offers. It is still too soon, secure the internship first then worry about grad roles.</li>
                        <li>Don’t sound needy or demanding</li>
                        <li>Don’t complain, e.g. you ask about current projects at the company and they don’t list any that interest you, in that case don’t say something like “I don’t like any of these. Do you have other stuff happening?”</li>
                        <li>Don’t overcomplicate questions</li>
                        <li>Think about what you want to get out of the internship. Interviewers like to know your goals.</li>
                    </ul>
            </PopupButton>

            <PopupButton 
                text="Interview Tips 3" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.55, baseAnchor.y + baseAnchor.height * 0.9],
                    maxWidth: 200,
                    //bound: false
                }}
            >
                <h3>INTERVIEW TIPS 3</h3>
                <ul>
                    <li>Strengths and weaknesses are key. The interviewer might not ask you directly, but they will be paying attention to these during the interview.</li>
                    <li>Ensure your strengths aren’t things like: teamwork, communication, attention to detail. Opt for things like: continuous learning, critical thinking, organisation and planning.</li>
                    <li>Don’t use a cliché for weaknesses like: “I’m a perfectionist”. Go for something like “I pressure myself to get work done, and so I have been scheduling breaks for myself, and setting a schedule to ensure I don’t overwork myself” or “I struggle to network with individuals I haven’t known for a long time.</li>
                    <li>Always list your solution, what you are currently doing to deal with this weakness.</li>
                </ul>
            </PopupButton>
    </div>
    )
}

export default InterviewTipsPopupTitle;