import "../styles/contact.css";
import img from "../img/contact-logo.png";
// import img2 from "../img/contact-img.jpg";

const Contact = () => {

    window.addEventListener("scroll", function () {
        const parallax = this.document.getElementById("scroll-effect");
        if (parallax) {
            let scrollPosition = this.window.pageYOffset;
            parallax.style.backgroundPositionY =
                scrollPosition * -0.5 + 100 + "px";
        }
    });

    return(
        <>
            <div className="email-header">
                <div className="email-column">
                    <img src={img} alt="mail" id="contact-logo"></img>
                    <h1>Don't hesitate to email us if you 
                        <br />
                        have any queries about us
                    </h1>
                </div>
                <div className="email-column">
                    <h2>Let's Connect</h2>
                </div>
            </div>
            <div className="pic-divider">
                <div className="pic-scroll" id="scroll-effect">
                </div>
            </div>

            <div className="contact-info">
                <div className="info-section">
                    <h1>Our Contact Info</h1>
                    <p>Email: <span class="highlight">connect.herai@gmail.com</span></p>
                </div>
            </div>
        </>
    ) 
};

export default Contact;

