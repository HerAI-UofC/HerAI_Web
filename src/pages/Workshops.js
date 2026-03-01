import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAuthSession } from "aws-amplify/auth";
import "../styles/workshops.css";

// ---------- Upcoming Workshops ----------
const UpcomingWorkshops = () => {
    const upcoming = [
        {
            id: 2,
            title: "Intro to Machine Learning Models",
            date: "2026-03-12T17:00", 
            duration: "1 hour",
            location: "Science Collab Space (ST 142)",
            summary: "Get ready for some March Machine-Learning Madness! Explore the foundations of Machine Learning in this easy-to-follow workshop, and learn the essentials of supervised, unsupervised, and deep learning while getting a simple overview of models like Linear Regression, SVMs, Random Forests, Neural Networks, and CNNs.",
            registrationLink: "https://docs.google.com/forms" // replace with actual form
        }
    ];

    const formatDateTime = (dateStr) => {
        const date = new Date(dateStr);
        const options = { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true 
        };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className="workshops-upcoming">
            {upcoming.map(workshop => (
                <div key={workshop.id} className="workshop-card upcoming">
                    <h2>{workshop.title}</h2>
                    <p className="workshop-date">{formatDateTime(workshop.date)}</p>
                    <p className="workshop-duration">Duration: {workshop.duration}</p>
                    <p className="workshop-location">Location: {workshop.location}</p>
                    <p className="workshop-summary">{workshop.summary}</p>
                    <a 
                        href={workshop.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="register-btn"
                    >
                        Register Now
                    </a>
                </div>
            ))}
        </div>
    );
};

// ---------- Previous Workshops ----------
const PreviousWorkshops = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        const pastWorkshops = [
            {
                id: 1,
                title: "AI Sentiment Analysis Workshop",
                date: "2026-02-12",
                summary: "Learn how to build a sentiment analysis model to understand emotions in text. This hands-on workshop covers data preprocessing, model building, and deployment basics.",
                materials: {
                    slides: "https://docs.google.com/presentation/d/19cC3qcCpg6ngKm4YOpS9fJ0_nukdzZRs/edit?usp=sharing&ouid=112205518221091536952&rtpof=true&sd=true",
                    notebook: "https://colab.research.google.com/drive/1KB7gjxGRGk1LGshpS4KBXEbtUeo2YLeq"
                }
            }
        ];
        setWorkshops(pastWorkshops);
    }, []);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="workshops-previous">
            {workshops.length > 0 ? (
                workshops.map(workshop => (
                    <div key={workshop.id} className="workshop-card previous">
                        <h2>{workshop.title}</h2>
                        <p className="workshop-date">{formatDate(workshop.date)}</p>
                        <p className="workshop-summary">{workshop.summary}</p>
                        <div className="materials-links">
                            <a 
                                href={workshop.materials.slides} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="material-btn slides-btn"
                            >
                                View Presentation Slides
                            </a>
                            <a 
                                href={workshop.materials.notebook} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="material-btn notebook-btn"
                            >
                                Open Code Notebook
                            </a>
                        </div>
                    </div>
                ))
            ) : (
                <div className="no-workshops-section">
                    <h2>No past workshops yet</h2>
                </div>
            )}
        </div>
    );
};

const Workshops = () => {
    const [activeTab, setActiveTab] = useState("upcoming");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await fetchAuthSession();
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
                navigate('/login');
            } finally {
                setIsCheckingAuth(false);
            }
        };
        checkAuth();
    }, [navigate]);

    if (isCheckingAuth) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                fontSize: '18px'
            }}>
                Loading...
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="workshops-container">
            <h1 className="workshops-header">Workshops</h1>

            <div className="workshops-tabs">
                <button 
                    className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                    onClick={() => setActiveTab('upcoming')}
                >
                    Upcoming
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'previous' ? 'active' : ''}`}
                    onClick={() => setActiveTab('previous')}
                >
                    Previous
                </button>
            </div>

            <div className="workshops-content">
                {activeTab === 'upcoming' && <UpcomingWorkshops />}
                {activeTab === 'previous' && <PreviousWorkshops />}
            </div>
        </div>
    );
};

export default Workshops;