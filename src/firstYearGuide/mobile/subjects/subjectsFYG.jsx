import '../assets/css/subjectsFYG.css'
import MelbConenctBuilding from '../assets/images/mobile-Melb-Connect@2x.png'
import LampPost from '../../components/assets/images/components/mobile-lamp-post@2x.png'
import Bench from '../../components/assets/images/components/mobile-bench@2x.png'
import { useState, useRef, useEffect } from 'react'

import PopupButton from '../../components/popup/popupButton'
import Moon from '../../components/moon/moon'

const subjectsFYG = (props) => {
	const [roadOffset, setRoadOffset] = useState('')
	const buildingRef = useRef(null)
	const [anchor, setAnchor] = useState({})

	useEffect(() => {
		// Calculate road offset
		const road = document.querySelector('.navRoadContainer')
		const roadRect = road.getBoundingClientRect()
		setRoadOffset(roadRect.height - 15)

		const callback = () => {
			const buildingRect = buildingRef.current.getBoundingClientRect()
			let { x, y, width, height } = buildingRect
			x = (x + window.globalScroll) % window.innerWidth
			y = y % window.innerHeight
			setAnchor({ x, y, width, height })
		}

		// Calculate the base anchor position for speech bubbles
		const building = buildingRef.current
		building.addEventListener('load', callback)
		return () => building.removeEventListener('load', callback)
	}, [])

	return (
		<div>
			<div className="subject-fyg">
				<div className="headingText subject-fyg__heading">SUBJECTS</div>

				{/* Boom */}
				<div className="subject-fyg__moon-container">
					<Moon />
				</div>

				{/* Building */}
				<img ref={buildingRef} className="subject-fyg__building" src={MelbConenctBuilding} style={{
					bottom: roadOffset + 'px'
				}}/>

				{/* Lamp post */}
				<img className="subject-fyg__lamp-post" src={LampPost} style={{
					bottom: roadOffset + 'px'
				}}/>
				
				{/* Bench */}
				<img className="subject-fyg__bench" src={Bench} style={{
					bottom: roadOffset + 'px'
				}}/>
			</div>

			{/* Speech bubbles and pop ups */}

			{Object.keys(anchor).length && (
				<>
					<PopupButton text={<span>COURSE <br/> PLANNING</span>} speechBubble={{
						anchor: [
							anchor.x + anchor.width * 0.75,
							anchor.y + anchor.height * 0.2
						],
					}}>
						<h3>HOW TO COURSE PLAN</h3>
						<ul>
							<li>Use a <a target='_blank' href="https://course-planner.unimelb.edu.au">course planner</a></li>
							<li>Potential Pathways</li>
							<li>Difficult Level</li>
							<li>Search subject review on <a target='_blank' href="https://www.reddit.com/r/unimelb/">Reddit</a></li>
							<li>Look up reviews on  <a target='_blank' href="https://studentvip.com.au/unimelb/subjects">StudentVIP</a></li>
							<li>Network with students in upper years, get subject recommendations or study tips.</li>
							<li>You don't know what you don't know!</li>
						</ul>
						
					</PopupButton>

					<PopupButton text="RESOURCES" speechBubble={{
						anchor: [
							anchor.x + anchor.width * 0.25,
							anchor.y + anchor.height * 0.325
						],
						align: 'right'
					}}>
						<h3>RESOURCES</h3>
						<ul>
							<li>Neetcode150</li>
							<li>Hackerank</li>
							<li>CodinGame</li>
							<li>AlgoExpert</li>
							<li>FreeCodeCamp - Coding Interview Prep, Project Euler</li>
						</ul>
					</PopupButton>

					<PopupButton text="STUDY SPOTS" speechBubble={{
						anchor: [
							anchor.x + anchor.width * 0.75,
							anchor.y + anchor.height * 0.45
						],
					}}>
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

					<PopupButton text={<span>SUBJECT NOT TO <br/> DOs</span>} speechBubble={{
						anchor: [
							anchor.x + anchor.width * 0.25,
							anchor.y + anchor.height * 0.6
						],
						align: 'right'
					}}>
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
							<li>Don't avoid your lecturers. You paid to learn so don't be afraid of them.</li>
						</ul>
					</PopupButton>

					<PopupButton text="SUBJECT TO DOs" speechBubble={{
						anchor: [
							anchor.x + anchor.width * 0.65,
							anchor.y + anchor.height * 0.85
						],
					}}>
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
				</>
			)}	
		</div>
	)
}

export default subjectsFYG