import "../assets/css/guide/guidePage.css";
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function GuidePage (props) {
  const location = useLocation()

  useEffect(() => {
    document.body.style.backgroundColor = location.pathname === '/first-year-guide' 
      ? '#020A23'
      : ''
  })

	return(
		<div>
			<div>
				<header>
					<h1 className="section-title text-center"> First Year Guide </h1>
				</header>
			</div>
			
			<div id="guideSection">
				<div class="text-center">
					Here is a guide...<br/><br/>
					Be wise...<br/><br/>
					Come say hi!<br/><br/>
				</div>
			</div>
			
		</div>
	)
}