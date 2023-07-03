import "./assets/css/eventPage.css";

const EventPage = (props) => {
    return (
        <div>
            <header>
                <h1 className="section-title text-center">EVENTS</h1>
            </header>

            <iframe className="airtable-embed" src="https://airtable.com/embed/shr9puuNFsGBcB5Wl?backgroundColor=pink" frameborder="0" onmousewheel="" width="100%"
                height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
            
            <h5 class="text-center py-5">
                Check out our past events <a href="">here</a>
            </h5>
        </div>
    )
}

