import "../styles/home.css";
import homeTitle from "../img/home-title.png";
import womenSTEM from "../img/women-in-stem.png";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

const Home = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".fade-section");

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);

                // Stagger effect: delay each section by index * 200ms
                setTimeout(() => {
                entry.target.classList.add("visible");
                }, index * 200);

                observer.unobserve(entry.target); // animate only once
            }
            });
        },
        { threshold: 0.2 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);


    const ref = useRef(null);

    return (
        <>
            <div className="title-img" style={{backgroundImage: `url(${homeTitle})`}}>
                <div className="title-head">
                    <h1>HerAI</h1>
                </div>
                <div className="about-blurb">
                    <div className="about-bubble">
                        <h2 id="blurb" ref={ref}>
                            HerAI is a forward-thinking student club dedicated to amplifying
                            the voices and contributions of underrepresented groups in the tech landscape.
                        </h2>
                        <NavLink className="about-button" to="/about">
                            About Us <span className="arrow">→</span>
                        </NavLink>
                    </div>
                </div>
            </div>
      
            <div className="mission-statement">
                <h1>Our Mission</h1>
                <div className="mission-container">
                    <div className="text-container">
                        <div className="fade-section">
                            <h6>EMPOWER</h6><p>
                                by upskilling students through AI workshops and projects
                            </p>
                        </div>
                        <div className="fade-section">
                            <h6>DEVELOP</h6>
                            <p>
                                a centralized resource and tool that students can use to learn more about AI 
                            </p>
                        </div>
                        <div className="fade-section">
                            <h6>CONNECT</h6>
                            <p>
                                students with industry professionals through events that allow for visibility, networking, and engagement.
                            </p>
                        </div>
                    </div>

                    <div className="women-in-stem-img">
                        <img src={womenSTEM}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
