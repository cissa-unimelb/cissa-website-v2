import PopupButton from "../components/popup/popupButton";

const Subjects = (props) => {
    var baseAnchor = props.baseAnchor;
    var windowWidth = Math.min(window.innerWidth, 1000);
    var subtitleSize = windowWidth/65;
    return(
        <div>
            <div 
                className="desktopView__subtitle"
                style={{
                    top: `${baseAnchor.y + baseAnchor.height * 0.05}px`,
                    left: `${baseAnchor.x + baseAnchor.width * 0.1}px`,
                    fontSize: `${subtitleSize}px`,
                }}>
                Subjects
            </div>



                <PopupButton 
                    text="Coruse Planning" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.24, baseAnchor.y + baseAnchor.height * 0.24],
                        maxWidth: 150,
                        align: 'right'
                        //bound: false
                    }}
                >
                    <h3>HOW TO COURSE PLAN</h3>
						<ul>
							<li>Use a <a target='_blank' href="https://course-planner.unimelb.edu.au">course planner</a></li>
							<li>Potential Pathways</li>
							<li>Difficulty Level</li>
							<li>Search subject review on <a target='_blank' href="https://www.reddit.com/r/unimelb/">Reddit</a></li>
							<li>Look up reviews on  <a target='_blank' href="https://studentvip.com.au/unimelb/subjects">StudentVIP</a></li>
							<li>Network with students in upper years, get subject recommendations or study tips.</li>
							<li>You don't know what you don't know!</li>
						</ul>
                </PopupButton>

                <PopupButton 
                    text="Resources" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.14, baseAnchor.y + baseAnchor.height * 0.35],
                        maxWidth: 300,
                        align: 'right'
                        //bound: false
                    }}
                >
                    <h3>RESOURCES</h3>
						<ul>
							<li>Neetcode150</li>
							<li>Hackerank</li>
							<li>CodinGame</li>
							<li>AlgoExpert</li>
							<li>FreeCodeCamp - Coding Interview Prep, Project Euler</li>
						</ul>
                </PopupButton>

                <PopupButton 
                    text="STUDY SPOTS" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.24, baseAnchor.y + baseAnchor.height * 0.4],
                        maxWidth: 300,
                        //bound: false
                    }}
                >
                    <h3>STUDY SPOTS</h3>
						<ul>
							<li>Baillieu library
								<ul>
									<li>(basement for group work)</li>
									<li>Recording studio</li>
								</ul>
							</li>
							<li>Arts West</li>
							<li>EEE labs</li>
							<li>Student Pavilion</li>
							<li>UMSU Building</li>
							<li>ERC Library</li>
							<li>Glyn Davis Building (MSD)</li>
							<li>Arts & Cultural Building</li>
						</ul>
                </PopupButton>

                <PopupButton 
                    text="SUBJECTS NOT TO DOs" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.05, baseAnchor.y + baseAnchor.height * 0.52],
                        maxWidth: 300,
                        //bound: false
                    }}
                >
                    <h3>SUBJECT NOT TO DOs</h3>
						<ul>
							<li>Don't buy notes, writing your own is more valuable than reading them.</li>
							<li>Don't cram, instead:
								<ul>
									<li>Set a deadline for each workshop review, notes revision or practice question in an exercise booklet.</li>
									<li>Get an accountability buddy to review lectures together weekly</li>
									<li>Break down each project to smaller more achievable tasks</li>
								</ul>
							</li>
							<li>Don't underestimate an assignment from the specs. START EARLY!</li>
							<li>Don't avoid your lecturers. You paid to learn from them so don't be avoid of them.</li>
						</ul>
                </PopupButton>

                <PopupButton 
                    text="STUDY TO DOs" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.2, baseAnchor.y + baseAnchor.height * 0.6],
                        maxWidth: 300,
                        //bound: false
                    }}
                >
                    <h3>SUBJECT TO DOs</h3>
						<ul>
							<li>Start early and revise regularly</li>
							<li>Study to understand and expand your knowledge, not to pass.</li>
							<li>Rest is not earned, it's needed.</li>
							<li>Make your study more enjoyable</li>
							<li>Use the Feynman technique,: teach a rubber duck complicated concepts that even a 10-year-old can understand. </li>
							<li>Reward yourself.</li>
							<li>Study with friends when you struggle to understand concepts.</li>
						</ul>
                </PopupButton>
        </div>
    )
}

export default Subjects;