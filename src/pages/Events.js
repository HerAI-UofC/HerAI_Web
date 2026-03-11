import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/events.css";
import "../styles/workshops.css"; 
import EventBlock from "../components/EventBlock/EventBlock";
import { generateClient } from "aws-amplify/api";
import { listEvents } from "../graphql/queries";

const Events = () => {
    const eventsBlockRef = useRef(null);
    const client = generateClient();
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const all = await client.graphql({ query: listEvents });
        let fetchedEvents = all.data.listEvents.items;

        const staticEvents = [
            {
                id: 'static-ml-workshop',
                title: 'Intro to Machine Learning Models Workshop',
                location: 'Science Collab Space (ST 142)',
                summary: 'Join us for March Machine Learning Madness, an engaging and beginner friendly introduction to the world of Machine Learning. In this workshop, you will explore the foundations of supervised, unsupervised, and deep learning while getting a clear overview of popular models like Linear Regression, Support Vector Machines (SVMs), Random Forests, Neural Networks, and Convolutional Neural Networks (CNNs).',
                date: '2026-03-12T17:00:00-07:00',
                timeRange: '5:00–6:00 PM',
                isUpcoming: true,
                signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLScm-hZvXRgiOXrmuTh3qiAaHaoZUR2bxWJZBHlQdMfPYKpFpg/viewform'
            },
            {
                id: 'static-panel-networking',
                title: 'AI Panel & Networking Night',
                location: 'Doucette Library, Education Block #370',
                summary: 'Join HerAI and AIC for a panel discussion and networking night! Hear from panelists across energy, consulting, finance, and tech as they share how AI is transforming their fields and shaping the future.',
                date: '2026-03-17T18:00:00-07:00',
                timeRange: '6:00–8:00 PM',
                isUpcoming: true,
                signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd67ONGjSkyns1AqoCFN-nNAl--l6vwsQaj948PyOJJmEa5qg/viewform'
            }
        ];

       
        const existingTitles = new Set(fetchedEvents.map(e => e.title));
        const newStatic = staticEvents.filter(e => !existingTitles.has(e.title));
        const combined = [...fetchedEvents, ...newStatic];
        setEvents(combined);
    };

    useEffect(() => {
        getEvents();
    }, []);


    const upcomingEvents = events.filter(event => event.isUpcoming);
    const pastEvents = events.filter(event => !event.isUpcoming);

    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(3);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentPastEvents = pastEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        eventsBlockRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return "";
        }
    };

    return (
        <div className="events-page">
            {upcomingEvents.length > 0 ? (
                <div className="workshops-container">
                    
                    {upcomingEvents.map((event) => (
   <div key={event.id} className="workshop-card upcoming-card">
    <h2>{event.title}</h2>
    <div className="event-meta">
        <span className="event-date">
             {formatDate(event.date)}
        </span>
        <span className="event-time-separator">•</span>
        <span className="event-time">
             {event.timeRange}
        </span>
    </div>
    <div className="event-location">
         {event.location}
    </div>
    <p className="workshop-summary">{event.summary}</p>
    <div className="materials-links">
        <a
            href={event.signUpLink || "https://docs.google.com/forms/d/e/1FAIpQLScSFdMkfvDZG8nZWskCqaVXSQByAeEP5LsFSZ96gbHXdVWgzA/viewform"}
            target="_blank"
            rel="noopener noreferrer"
            className="material-btn slides-btn"
        >
            Sign Up
        </a>
    </div>
</div>
))}
                </div>
            ) : (
                <div className="workshops-container">
                    <h1 className="workshops-header">Upcoming Events</h1>
                    <div className="no-workshops-section">
                        <h2>Stay Tuned for Upcoming Events</h2>
                    </div>
                </div>
            )}

        
            {pastEvents.length > 0 && (
                <div className="past-events-section">
                    <h1 className="workshops-header">Past Events</h1>
                    <div ref={eventsBlockRef}>
                        {currentPastEvents.map((event, index) => (
                            <EventBlock
                                key={event.id || index}
                                event={event}
                                dir={index % 2 === 1}
                            />
                        ))}
                    </div>
                    <div className="pagination">
                        {Array(Math.ceil(pastEvents.length / eventsPerPage))
                            .fill()
                            .map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    id={currentPage === index + 1 ? "active-page" : ""}
                                >
                                    {index + 1}
                                </button>
                            ))}
                    </div>
                </div>
            )}

            
            {events.length === 0 && (
                <div className="workshops-container">
                    <h1 className="workshops-header">Events</h1>
                    <div className="no-workshops-section">
                        <h2>Stay Tuned for Upcoming Events</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;