import "../assets/css/about/aboutPage.css";
import CommitteeList from "./committeeCards";
import CommitteeCoverImage from '../assets/images/committee-2024.jpg';

export default function AboutPage (props) {
	console.log("About Page");
	return(
		<div>
			<header>
				<h1 className="section-title text-center">COMMITTEE</h1>
			</header>

			<div className="restrict-width about">
				<h3 className="heading">Who are we?</h3>
				<p>
					The Computing and Information Systems Students Association (CISSA) represents the IT and tech-oriented 
					student community at the University of Melbourne. For those studying Computer Science, Software Engineering, 
					Information Technology or Information Systems, we believe joining CISSA is a must, and of course  
					we welcome students from different academic backgrounds too!
				</p>
				<p>
					Since our founding in 1992, we have seen more than 
					5,000 students join the club! In 2019, CISSA saw enormous growth, welcoming over 1,300 students to our community.
					In 2022, CISSA will remain as committed as ever to fostering an accepting and warm community for students of all 
					backgrounds and identities. So don't hesitate to get into contact with us, our committee is extremely friendly and 
					approachable. We look forward to sharing the exciting year ahead of us with you!
				</p>
			</div>

			<div className="restrict-width image-wrapper">
				<img className="committee-cover" src={CommitteeCoverImage} />
			</div>

			<div className="restrict-width">
				<CommitteeList />
			</div>
		</div>
	)
}