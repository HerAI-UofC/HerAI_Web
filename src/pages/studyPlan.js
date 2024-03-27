import "../styles/studyPlan.css";
import skyImg from "../img/sky.png";
import archImg from "../img/arch.png";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const StudyPlan = () => {
    
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleList = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div class="study-header">
                <div class="title-header">
                    <h1>My Study Plan</h1>
                </div>
            </div>

            <div class="intro-section">
                <div class="intro-text">
                    <h2>Learn, Discover, Explore</h2>
                    <hr></hr>
                    <p>Embark on a journey of discovery as you unravel the mysteries of AI,
                        where algorithms meet innovation, creativity meets its outlet,
                        and curiosity fuels the quest for knowledge. <br /> <br />
                        Find your AI-generated personalized study plan here, 
                        complete with recommended online courses, books, articles and blogs, 
                        activities, and challenges about the topics that interest you. 
                        Follow along a schedule and learning style that fits your needs.</p>
                    <div class="button">
                        <NavLink className="intro-button" to="/getStarted">Get Started</NavLink>
                    </div>
                </div>
                <div class="intro-image">
                    <img src={skyImg} alt="sky" id="sky-img"></img>
                </div>
            </div>

            <div className="study-plan-container">
                <div className="study-plan">
                    <button className="toggle-button" onClick={toggleList}>
                        {isExpanded ? 'Week 1' : 'Week 1'}
                    </button>
                    {isExpanded && (
                        <ul className="list">
                            <li>
                                <h4>Day 1-2: Introduction to AI</h4>
                                <p>Gain a broad understanding of AI and its applications</p>
                                <button>Start {">>"}</button>
                            </li>
                            <hr></hr>
                            <li>
                                <h4>Day 3-4: Machine Learning Basics</h4>
                                <p>Establish a solid foundation in machine learning principles.</p>
                                <button>Start {">>"}</button>
                            </li>
                            <hr></hr>
                            <li>
                                <h4>Day 5-6: Neural Networks and Deep Learning</h4>
                                <p>Grasp the fundamentals of neural networks and their applications.</p>
                                <button>Start {">>"}</button>
                            </li>
                            <hr></hr>
                            <li>
                                <h4>Day 7: Python Programming for AI</h4>
                                <p>Develop proficiency in Python for AI programming.</p>
                                <button>Start {">>"}</button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            <div class="motivate-section">
                <div class="motivate-image">
                    <img src={archImg} alt="classic architecture" id="arch-img"></img>
                </div>
                <div class="motivate-text">
                    <h2>Make learning fun</h2>
                    <p>Make learning enjoyable by setting achievable goals and celebrating small victories along the way.
                        <br /> <br />
                        Remember to take breaks, ask questions, explore interesting activities and avenues of thought.
                        <br /> <br />
                        All the best on your learning journey!</p>
                </div>
            </div>
        </>
    )

};

export default StudyPlan;