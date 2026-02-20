
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAuthSession } from "aws-amplify/auth";
import "../styles/workshops.css";

const Workshops = () => {
    const [workshops, setWorkshops] = useState([]);
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

    useEffect(() => {
        const workshopData = [
            {
                id: 1,
                title: "AI Sentiment Analysis Workshop",
                date: "2026-02-12",
                summary: "Learn how to build a sentiment analysis model to understand emotions in text. This hands-on workshop covers data preprocessing, model building, and deployment basics.",
                materials: {
                    slides: "https://docs.google.com/presentation/d/19cC3qcCpg6ngKm4YOpS9fJ0_nukdzZRs/edit?usp=sharing&ouid=112205518221091536952&rtpof=true&sd=true",
                    notebook: "https://colab.research.google.com/drive/1KB7gjxGRGk1LGshpS4KBXEbtUeo2YLeq"
                }
            },
         
        ];
        setWorkshops(workshopData);
    }, []);

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
        return null; // Will redirect before rendering
    }

    return (
        <div className="workshops-container">
            <h1 className="workshops-header">Workshop Materials</h1>
            
            {workshops.length > 0 ? (
                workshops.map((workshop) => (
                    <div key={workshop.id} className="workshop-card">
                        <h2>{workshop.title}</h2>
                        <p className="workshop-date">{workshop.date}</p>
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
                    <h2>Stay Tuned for Upcoming Workshops</h2>
                </div>
            )}
        </div>
    );
};

export default Workshops;