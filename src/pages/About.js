import "../styles/about.css";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"

/*Import all team member images - GET PERMISSION*/
import blank from "../img/arch.png"; /*default blank placeholder*/
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
    team: "Internal Operations",
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
    team: "Finance Team",
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
    team: "Event Leads",
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
    team: "Technology Team",
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
      }
    ]
  }
];

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">Meet the Team</h1>

      {teamMembers.map((section, teamIndex) => (
        <div key={teamIndex} className="team-section">

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
  );
};

export default About;
