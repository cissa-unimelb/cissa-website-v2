import "../assets/css/contact/contactPage.css";
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ContactPage (props) {
	const footerRef = useRef()
  const location = useLocation()

  useEffect(() => {
    document.body.style.backgroundColor = location.pathname === '/contact' 
      ? '#020A23'
      : ''
  })

	return(
		<div>
			<div>
				<header>
					<h1 className="section-title text-center"> CONTACT </h1>
				</header>
			</div>
			
			<div id="contactSection">
				<div class="text-center">
					Do you have any general inquiries or want to suggest awesome ideas?<br/><br/>
					Email us at <a href="mailto:executives@cissa.org.au">executives@cissa.org.au</a><br/><br/>
					Feel free to have a chat with us on <a href="https://discord.gg/qD6yd9jDpG">Discord</a> as well!
				</div>
			</div>
			
		</div>
	)
}