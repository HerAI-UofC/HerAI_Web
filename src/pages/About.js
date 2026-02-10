import "../styles/about.css";
import ScrollTrigger from "react-scroll-trigger";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa"

/*Import all team member images - GET PERMISSION*/
import blank from "../img/arch.png"; /*default blank placeholder*/
import team from "../img/F25-team-photo.png";
import vivian from "../img/about-viv.jpg";
import fatema from "../img/about-fatema.jpg";
import brittney from "../img/about-britt.jpg";
import habiba from "../img/about-habiba.jpg";
import cassie from "../img/about-cassie.jpg";
import tehreem from "../img/about-tehreem.jpg";
import asma from "../img/about-asma.jpg";
import ana from "../img/about-ana.jpg";
import arfa from "../img/about-arfa.jpg";
import daad from "../img/about-daad.jpg";
import hira from "../img/about-hira.jpg";
import aryam from "../img/about-aryam.jpg";
import alishaba from "../img/about-alishaba.jpg";
import zainab from "../img/about-zainab.jpg";
import ramsha from "../img/about-ramsha.png";
import northstar from "../img/northstar-background.png";

const teamMembers = [
  {
    team: "Leadership",
    members: 
    [
      { 
        name: "Vivian Ha", 
        role: "President", 
        bio: "4th Year Business Tech Management",
        linkedin: "https://www.linkedin.com/in/viviann-ha/", 
        img: vivian
      },
      { 
        name: "Fatema Chowdhury", 
        role: "Co-President", 
        bio: "5th Year Computer Science",
        linkedin: "https://www.linkedin.com/in/fatema--chowdhury/", 
        img: fatema 
      }
    ]
  },
  {
    team: "Internal",
    members: 
    [
      { 
        name: "Habiba Abuelazm", 
        role: "VP Internal", 
        bio: "4th Year Computer Science",
        linkedin: "https://www.linkedin.com/in/habiba-abuelazm/", 
        img: habiba 
      }
    ]
  },
  {
    team: "Finance",
    members:
    [
      { 
        name: "Tehreem Nadeem", 
        role: "VP Finance", 
        bio: "3rd Year Accounting Major",
        linkedin: "https://www.linkedin.com/in/tehreem-nadeem/", 
        img: tehreem 
      }
    ]
  },
  {
    team: "Events",
    members:
    [
      { 
        name: "Hira Tariq", 
        role: "VP Events", 
        bio: "4th Year Biomedical Engineering",
        linkedin: "https://www.linkedin.com/in/hirat1/", 
        img: hira
      },
      { 
        name: 
        "Asma Naz", 
        role: "VP Events", 
        bio: "4th year Biological Sciences",
        img: asma 
      }
    ]
  },
  {
    team: "Marketing",
    members:
    [
      {
        name: "Aryam Matalkeh",
        role: "VP Marketing",
        bio: "3rd year Data Science",
        linkedin: "https://www.linkedin.com/in/aryam-matalkeh/",
        img: aryam
      },
      {
        name: "Alishaba Sarwar",
        role: "VP Marketing",
        bio: "3rd year Accounting",
        img: alishaba
      }
    ]
  },
  {
    team: "Technology",
    members: 
    [
      { 
        name: "Saja Abufarha", 
        role: "VP Technology", 
        bio: "Computer Science Alumni",
        linkedin: "https://www.linkedin.com/in/saja-abufarha/", 
        github: "https://github.com/SajaAbufarha",
        img: blank 
      },
      { 
        name: "Brittney Ha", 
        role: "VP Technology", 
        bio: "3rd Year Computer Science",
        linkedin: "https://www.linkedin.com/in/brittney-ha-b199971b2/", 
        github: "https://github.com/brittneyhxh",
        img: brittney 
      },
      { 
        name: "Cassie Rodberg", 
        role: "VP Technology", 
        bio: "3rd Year Computer Science",
        linkedin: "https://www.linkedin.com/in/cassandra-rodberg/", 
        github: "https://github.com/cassierodberg",
        img: cassie 
      },
      { 
        name: "Ana Bindiu", 
        role: "VP Technology", 
        bio: "Computer Science Alumni",
        linkedin: "https://www.linkedin.com/in/ana-bindiu-073659212/", 
        github: "https://github.com/anabindiu",
        img: ana 
      },
      { 
        name: "Daad Haymour", 
        role: "VP Technology", 
        bio: "4th Year Software Engineering",
        linkedin: "https://www.linkedin.com/in/daad-haymour-ba25b3289/", 
        github: "https://github.com/daadhaymour",
        img: daad 
      },
      { 
        name: "Arfa Raja", 
        role: "VP Technology", 
        bio: "3rd Year Computer Science",
        img: arfa 
      },
      {
        name: "Zainab Saeed",
        role: "Jr. VP Technology",
        bio: "3rd Year Data Science",
        linkedin: "https://www.linkedin.com/in/zainab-saeed-zs/",
        github: "https://github.com/ZainabSaeed06",
        img: zainab
      },
      {
        name: "Ramsha Oad",
        role: "Jr. VP Technology",
        bio: "1st Year Computer Science",
        linkedin: "https://www.linkedin.com/in/ramshaoad/",
        github: "https://github.com/oadramsha",
        img: ramsha
      }
    ]
  }
];

const About = () => {

  /* tab navigation as a side pane */
  const aboutRef = useRef(null);
  const [showTabs, setShowTabs] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowTabs(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  /* scroll to top button */
  const [showButton, setShowButton] = useState(false);

  // show button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll to top or header
  const scrollToTop = () => {
    const el = document.querySelector(".about-header");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  
  return (
    <div className="about-page">
      <div className = "mission-block" style={{backgroundImage: `url(${northstar})`}}>
        <div className = "mission-column">
          <div className = "mission-left">
            <h1 className = "mission-title" > North Star </h1>
          </div>
          <div className = "mission-right">
            <h2 className = "mission-body" >Our aspiration is to make the AI/ML industry more accessible and inclusive.</h2>
            <h3 className = "mission-body-smaller" >We envision a future where anyone can learn and thrive in the world of Artificial Intelligence and Machine Learning. By creating opportunities that break down barriers and spark innovation, we’re building a movement that empowers people to learn boldly, think critically, and shape technology through their unique experiences. </h3>
          </div>
        </div>
      </div>

      {/*side tabs are conditionally shown in the about section below*/}
      {showTabs && (
        <aside
          className={`about-tabs floating-tabs ${
            showTabs ? "tabs-visible" : "tabs-hidden"
          } ${collapsed ? "collapsed" : ""}`}
        >
          {/* Collapse toggle button */}
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? ">" : "<"}
          </button>

          {/* Team tabs */}
          {!collapsed &&
            teamMembers.map((section, index) => {
              const id = section.team.toLowerCase().replace(/\s+/g, "-");
              return (
                <button
                  key={index}
                  className="about-tab"
                  onClick={() =>
                    document.getElementById(id)?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {section.team}
                </button>
              );
            })}
        </aside>
      )}

      {/*about section*/}
      <div className="about-team" ref={aboutRef}>
        <h1 className="about-title"> Meet the Team </h1>
        <img src={team} alt="Team Photo Fall 2025" className="team-img"/>

        {teamMembers.map((section, teamIndex) => (
          <div key={teamIndex} className="team-section" id={section.team.toLowerCase().replace(/\s+/g, "-")}>

            <h2 className="team-title">{section.team}</h2>

            <div className="team-grid">
              {section.members.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="card-inner">
                    {/* Front */}
                    <div className="card-front">
                      <img src={member.img} alt={member.name} />
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <h4>{member.name}</h4>
                      <div className="card-details">
                        <h4>Education</h4>
                        <p>{member.bio}</p>
                      </div>
                      <div className="social-links">
                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="linkedin-icon">
                          <FaLinkedin/>
                        </a>              
                        {
                          member.github && /*Show github icon only if member's github exists (tech team focused)*/
                          (
                          <a href={member.github} target="_blank" rel="noreferrer" className="github-icon">
                          <FaGithub/>
                          </a>  
                          )
                        }              
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    

      {/* --- Scroll to Top Button --- */}
      <button
        className={`scroll-top-btn ${showButton ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>

    </div>
  );
};

export default About;
