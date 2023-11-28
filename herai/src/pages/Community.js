import "../styles/community.css";
import img from "../img/heart-logo-community.png";
import img2 from "../img/community-img.png";
import img3 from "../img/instagram-logo.png";
import img4 from "../img/discord-logo.png";
import img5 from "../img/linkedin-logo.png";

const Community = () => {

    window.addEventListener("scroll", () => {
        const txt = document.getElementById("connect");
        //console.log(txt);
        if (txt) {
            //console.log("THERE");
            const winHeight = window.innerHeight;
            const txtTop = txt.getBoundingClientRect().top;

            if (txtTop - winHeight <= 0) {
                //console.log("STARTED");
                txt.classList.add("fade-in");
            } else {
                txt.classList.remove("fade-in");
            }
        } else {
            //console.log("NOT THERE");
        }
    });

    return (
        <>
            <div className="title">
                <div className="title-column">
                    <div className="title-column-text">
                        <h1>Become a part of</h1>
                        <h1>the HerAI community</h1>
                        <img src={img} alt="heart" id="heart-img"></img>
                    </div>
                </div>
                <div className="title-column">
                    <img src={img2} alt="community-triangle" id="triangle-img"></img>
                </div>
            </div>

            <div className="sign-up">
                <h1>HerAI Member Sign-Up</h1>
                <div className="divider"></div>
                <h4>Join the community and be part of a supportive network, gain access to exclusive
                    resources and workshop content, and learn about AI/ML
                </h4>
                <a className="signUp-btn" href="/login">
                    Sign Up
                </a>
            </div>

            <div className="links-section-1">
                <div className="stay-connected">
                    <h1 id="connect">Stay Connected</h1>
                </div>
            </div>

            <div className="links-section-2">
                <div className="instagram">
                    <img src={img3} alt="instagram logo"></img>
                    <a href="https://www.instagram.com/herai_uofc/" target="_blank" rel="noreferrer"
                    title="herai_uofc">Instagram</a>
                </div>
                <div className="discord">
                    <img src={img4} alt="discord logo"></img>
                    <a href="https://discord.com/invite/HFJW7aH3PF" target="_blank" rel="noreferrer"
                     title="Discord Invite">Discord</a>
                </div>
                <div className="linkedin">
                    <img src={img5} alt="linkedin logo"></img>
                    <a href="https://www.linkedin.com/company/herai-women-in-ai-ml/mycompany/" target="_blank"
                    rel="noreferrer" title="HerAI: Women in AI/ML">LinkedIn</a>
                </div>
            </div>
        </>
    );
};

export default Community;
