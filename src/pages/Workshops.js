
import { useState, useEffect } from "react";
import "../styles/workshops.css";

const Workshops = () => {
    const [workshops, setWorkshops] = useState([]);

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
            // Add more workshops here as needed
        ];
        setWorkshops(workshopData);
    }, []);

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