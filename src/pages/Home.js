import "../styles/home.css";
import img from "../img/titleImg.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const Home = () => {
    const ref = useRef(null);

    return (
        <>
            <div className="title-head">
                <h1>HerAI</h1>
                <h4>Women in AI/ML</h4>
            </div>
            <div className="about-blurb">
                <div className="about-bubble">
                    <h2 id="blurb" ref={ref}>
                        HerAI is a forward-thinking Women in Artificial Intelligence
                        and Machine Learning (AI/ML) start-up dedicated to amplifying
                        the voices and contributions of women in the tech landscape.
                    </h2>
                    <NavLink className="about-button" to="/about">
                        About Us <span className="arrow">→</span>
                    </NavLink>
                </div>
            </div>
            <div className="statement-img-img">
                <h1>Empowering Women in the AI Revolution</h1>
                <div className="img-container">
                    <div className="img-wrapper">
                        <img src={img2} alt="x"></img>
                    </div>
                    <div className="img-wrapper">
                        <img src={img3} alt="x"></img>
                    </div>
                </div>
            </div>
            <div className="why-join-section">
                <h1>Why Join HerAI?</h1>
                <div className="text-container">
                    <div>
                        <h6>Networking and Mentorship</h6>
                        <p>
                            Connect with like-minded professionals, engage in
                            mentorship programs, and broaden your network within
                            the AI/ML domain.
                        </p>
                    </div>
                    <div>
                        <h6>Educational Workshops and Events</h6>
                        <p>
                            Participate in enriching workshops, webinars, and
                            hands-on events to enchance your AI/ML knowledge and
                            skills.
                        </p>
                    </div>
                    <div>
                        <h6>Advocacy and Outreach</h6>
                        <p>
                            Join us in advocation for diversity and inclusion in
                            AI/ML, and contribute to community outreach programs
                            leveraging AI for societal good.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
