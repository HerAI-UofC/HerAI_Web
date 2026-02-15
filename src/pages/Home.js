import "../styles/home.css";
import homeTitle from "../img/home-title.png";
import womenSTEM from "../img/women-in-stem.png";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faLinktree } from '@fortawesome/free-brands-svg-icons';


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
                        <div id="socials">
                            <a href="https://www.instagram.com/herai_uofc/">
                                <FontAwesomeIcon className="icon" icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/company/herai-women-in-ai-ml/">
                                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                            </a>
                            <a href="https://discord.com/invite/FXvjg9jUga">
                                <FontAwesomeIcon className="icon" icon={faDiscord} />
                            </a>
                            <a href="https://linktr.ee/HerAI_Women_in_AIML?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGniBxV0skNiZdWuGcoXv86g5too3czNwbRzpehLW70d69TsG6X2AhoK2__xp0_aem_huijswr1K4xE9SRWoEZ3wQ">
                                <FontAwesomeIcon className="icon" icon={faLinktree} />
                            </a>
                        </div>
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
