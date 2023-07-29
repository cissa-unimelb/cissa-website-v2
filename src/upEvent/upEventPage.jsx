import "../assets/css/upEvent/upEventPage.css";

const UpEventPage = (props) => {
    // Needs redirecting for past events
    return (
        <div>
            <header className="black-header">
                <h1 className="section-title white-header-text">EVENTS</h1>
            </header>

            <iframe className="airtable-embed" src="https://airtable.com/embed/shr9puuNFsGBcB5Wl?backgroundColor=pink"></iframe>
            
            <h5 className="text-center py-5">
                Check out our past events <a href="">here</a>
            </h5>
        </div>
    )
}

export default UpEventPage