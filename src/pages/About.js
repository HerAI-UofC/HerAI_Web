import "../styles/about.css";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    const [isVisible, setVisible] = useState(false);

    const onEnterView = () => {
        setVisible(true);
        console.log("CALLED");
    };

    // window.addEventListener("scroll", function () {
    //     const parallax = this.document.getElementById("scroll-effect");
    //     if (parallax) {
    //         let scrollPosition = this.window.pageYOffset;
    //         parallax.style.backgroundPositionY =
    //             scrollPosition * -0.75 + 1000 + "px";
    //     }
    // });

    return (
        <>
            <div className="body-header">
                <h1>Building AI Leaders, Igniting Change.</h1>
            </div>
            <div className="about-section">
                <h3>About HerAI</h3>
                <p>
                    Welcome to HerAI, a pioneering community dedicated to
                    empowering and advancing women in the exciting realms of
                    Artificial Intelligence (AI) and Machine Learning (ML). Our
                    mission is to break barriers, foster inclusivity, and create
                    a platform where women thrive in the rapidly evolving tech
                    landscape.
                </p>
            </div>

            <ScrollTrigger
                onEnter={onEnterView}
                style={{ backgroundColor: "#F4F4F4" }}
            >
                <div className="vision-section">
                    <h2 className={`${isVisible ? "slide-in" : ""}`}>
                        Our Vision
                    </h2>
                    <p className={`${isVisible ? "slide-in" : ""}`}>
                        To lead a paradigm shift by amplifying the presence of
                        women in AI/ML, envisioning a future where their
                        contributions shape the forefront of technological
                        innovation.
                    </p>
                </div>
            </ScrollTrigger>
            <div className="contact-section">
                <div className="scroll-img-container" id="scroll-effect">
                    <div className="txt-container">
                        <h4>
                            Women
                            <br />
                            Empowered
                        </h4>
                        <p>
                            Join us and be at the forefront of innovation, where
                            diverse perspectives power the future of technology.
                        </p>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
