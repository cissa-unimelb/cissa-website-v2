import "../assets/css/contact/contactPage.css";

const ContactPage = (props) => {
    return(
        <div>
            <div>
                <header>
                    <h1 className="section-title text-center"> CONTACT </h1>
                </header>
            </div>

            

            <div id="contactSection">
                <div class="mt-5 text-center important-text">
                    Do you have any general inquiries or want to suggest awesome ideas?
                    Email us at <a href="mailto:executives@cissa.org.au">executives@cissa.org.au</a><br/><br/>
                    Feel free to have a chat with us on <a href="https://discord.gg/qD6yd9jDpG">Discord</a> as well!
                </div>
            </div>
            
        </div>
    )
}

export default ContactPage;