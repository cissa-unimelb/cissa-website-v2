import "../assets/css/pastEvent/pastEventPage.css";

const SectionSemester = (props) => {
    return(
        <div>
            <div class="events-section py-5">
                <h1>{props.title}</h1>
            </div>
            <iframe class="airtable-embed" src={props.src}></iframe>
        </div>
    )
}

const PastEventPage = (props) => {
    const infoList = [
        {title: "Semester 2, 2023", src: "https://airtable.com/embed/shrubex6K8n6h7Sht?backgroundColor=pink"},
        {title: "Semester 1, 2023", src: "https://airtable.com/embed/shrMSywHU76Bc7DFK?backgroundColor=pink"},
        {title: "Semester 2, 2022", src: "https://airtable.com/embed/shrw0QTsy8K1FoxmF?backgroundColor=pink"}
    ]

    return(
        <div>
            <header className="black-header">
                <h1 className="section-title white-header-text">PAST EVENTS</h1>
            </header>

            {infoList.map((info) => <SectionSemester title={info.title} src={info.src}/>)}
        </div>
    )

}

export default PastEventPage;