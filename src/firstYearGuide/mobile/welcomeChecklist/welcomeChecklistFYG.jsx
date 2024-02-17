import '../assets/css/welcomeChecklistFYG.css'
import BuildingImage from '../assets/images/mobile-jane-st@2x.png';

import PopupButton from '../../components/popup/popupButton';
import { useEffect, useRef, useState } from 'react'


// This is the welcome checklist section which sits inside an app frame
const welcomeChecklistFYG = (props) => {
	const [roadOffset, setRoadOffset] = useState('')
	const div = useRef(null)
	const [baseAnchor, setAnchor] = useState([])

	useEffect(() => {
		// Calculate road offset
		const road = document.querySelector('.navRoadContainer')
		const roadRect = road.getBoundingClientRect()
		setRoadOffset(roadRect.height - 10)

		const id = setInterval(() => {
			if (div.current.y) {
				callback()
				clearInterval(id)
			}
		}, 50)
  }, [])

	const callback = () => {
		const rect = div.current.getBoundingClientRect()
		let { x, y, width, height } = rect
		x = (x + window.globalScroll) % window.innerWidth
		y = y % window.innerHeight
		setAnchor({ x, y, width, height })
		console.log(x, y, width, height)
		console.log(window.globalScroll)
		// console.log(rect)
	}

	useEffect(() => {
		// callback();
		// window.addEventListener('load', callback)
		// return () => window.removeEventListener('load', callback)
	}, [])

    return (
        // store everything to return in appropriate container
        <div className='welcomeChecklistFYGContainer'>
			<div className='welcomeChecklistHeading'>WELCOME CHECKLIST</div>

			<div className="janeStreetBuilding">
				<img ref={div} src={BuildingImage} className='building' onLoad={callback}
					style={{
						bottom: roadOffset + 'px'
					}}
				/>
			</div>

			<PopupButton
			text="ALL STUDENTS" 
			speechBubble={{
				anchor: [baseAnchor.x + baseAnchor.width*0.5, baseAnchor.y + baseAnchor.height*0.15],
				bound: false
			}}

			
			>
				<h3>ALL STUDENTS</h3>
				<ol>
					<li>Accept Offer</li>
					<li>Order your student card</li>
					<li>Check your fees</li>
					<li>Compulsory module: Academic Integrity</li>
					<li>Plan your courses and create a timetable</li>
					<li>Join CISSA (and other student clubs and societies if you want)</li>
				</ol>


			</PopupButton>

			<PopupButton
			text="INTERNATIONAL STUDENTS" 
			speechBubble={{
				anchor: [baseAnchor.x + baseAnchor.width*0.2, baseAnchor.y + baseAnchor.height*0.45],
				bound: false
			}}
			>
				<h3>International Students</h3>
				<p>
					<ul>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/student-support/international-student-support/visas/applying-for-a-student-visa?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Organise your travel documents</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/student-support/international-student-support/visas/applying-for-a-student-visa?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Finalise your Visa process</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/new-students/new-student-checklist/international-student-checklist/book-your-flights?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Book your flights</a></li>
						<li><a target= '_blank' href="https://study.unimelb.edu.au/accommodation?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Find accommodation</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/new-students/new-student-checklist/international-student-checklist/international-student-welcome?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Watch international student webinars</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/new-students/new-student-checklist/international-student-checklist/international-student-welcome?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Learn about Melbourne, local culture and what to expect.</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/new-students/new-student-checklist/international-student-checklist/setting-up-a-bank-account?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Open an Australian bank account before you depart.</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/new-students/new-student-checklist/international-student-checklist/what-to-bring-to-australia?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Pack your bags</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/new-students/new-student-checklist/international-student-checklist/get-set-up-in-melbourne?in_c=sinfo-NSC%7Csource=students%7Cmedium=button">Get set up in Melbourne</a></li>
					</ul>
				</p>
			</PopupButton>

			<PopupButton
			text="UMSU SUPPORT" 
			speechBubble={{
				anchor: [baseAnchor.x + baseAnchor.width*0.7, baseAnchor.y + baseAnchor.height*0.9],
				bound: false,
				align: 'right'
			}}
			>
				<h3>Student Support</h3>
				<p>
					<ul>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/student-support/advice-and-help/stop-1">Stop 1 - general hub</a></li>
						<li><a target= '_blank' href="https://psychologicalsciences.unimelb.edu.au/psychology-clinic/home">Counselling and Psychological Services (CAPS)</a></li>
						<li><a target= '_blank' href="https://services.unimelb.edu.au/health/make-an-appointmentealth-service">University Health Service</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/student-support/scholarships-and-financial-support/financial-aid">Financial Aid</a></li>
						<li><a target= '_blank' href="https://study.unimelb.edu.au/accommodation">Accommodation</a></li>
						<li><a target= '_blank' href="https://students.unimelb.edu.au/student-support/health-and-wellbeing/faith-and-spirituality">Faith and Spiritual Care</a></li>
						<li><a target= '_blank' href="https://umsu.unimelb.edu.au/support/help-advice/">UMSU Support</a></li>
						<li><a target= '_blank' href="https://umsu.unimelb.edu.au/support/legal/">UMSU Legal Services</a></li>
					</ul>
				</p>
			</PopupButton>
        </div>
    )
}

export default welcomeChecklistFYG;