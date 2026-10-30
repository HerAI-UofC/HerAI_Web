import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/events.css";
import "../styles/workshops.css"; 
import EventBlock from "../components/EventBlock/EventBlock";
import { generateClient } from "aws-amplify/api";
import { listEvents } from "../graphql/queries";


const staticEvents = [
    // EXAMPLE BELOW:
    // {
    //     id: 'static-ml-workshop',
    //     title: 'Intro to Machine Learning Models Workshop',
    //     location: 'Science Collab Space (ST 142)',
    //     summary: 'Join us for March Machine Learning Madness, an engaging and beginner friendly introduction to the world of Machine Learning. In this workshop, you will explore the foundations of supervised, unsupervised, and deep learning while getting a clear overview of popular models like Linear Regression, Support Vector Machines (SVMs), Random Forests, Neural Networks, and Convolutional Neural Networks (CNNs).',
    //     date: '2026-03-12T17:00:00-07:00',
    //     timeRange: '5:00–6:00 PM',
    //     isUpcoming: true,
    //     signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLScm-hZvXRgiOXrmuTh3qiAaHaoZUR2bxWJZBHlQdMfPYKpFpg/viewform'
    // },
    {
        id: 'halloween-workshop-2026',
        title: 'Halloween with HerAI - Tricks & Terminals',
        location: 'HNSC 124A',
        summary: 'Face your fears of the terminal. Join HerAI for a Halloween-themed escape room where every puzzle is solved with real Linux commands. Brave the dark by yourself or in teams to explore the terminal, uncover its secrets, and outsmart the ghost in the shell. No prior command line experience is needed, and the challenges ramp up as you go.',
        date: '2026-10-28T17:00:00-07:00',
        timeRange: '5:00–6:00 PM',
        isUpcoming: true,
        signUpLink: 'https://forms.gle/K7H2ue4h2GDx9jtF9'
    },
    {
        id: 'bytes-blazers-2026',
        title: 'Bytes & Blazers Panel + Networking Night',
        location: 'HNSC 330',
        summary: 'Join HerAI for Bytes and Blazers, a panel discussion and networking evening exploring the intersection of business and technology. Hear industry professionals share insights on career pathways, emerging trends, and leadership, followed by audience Q&A, networking, and dinner with students and professionals.',
        date: '2026-11-05T18:00:00-07:00',
        timeRange: '6:00–9:00 PM',
        isUpcoming: true,
        signUpLink: 'https://docs.google.com/forms/d/e/1FAIpQLScZB57uU37Ro2yXWOCsRnh9Qa7R9-cgEIn01yrBqMQP4ex3aQ/viewform?usp=sharing&ouid=112205518221091536952'
    }
];

const client = generateClient();

// sad computer graphic for when there are no events
const SadComputer = () => (
    <svg
        className="sad-computer"
        viewBox="0 0 200 160"
        role="img"
        aria-label="A sad computer"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* monitor */}
        <rect x="30" y="10" width="140" height="105" rx="14" fill="#8C6D6C" />
        <rect x="42" y="22" width="116" height="81" rx="8" fill="#FFF2EB" />
        {/* stand */}
        <rect x="90" y="115" width="20" height="22" fill="#8C6D6C" />
        <rect x="65" y="135" width="70" height="12" rx="6" fill="#8C6D6C" />
        {/* eyes */}
        <circle cx="80" cy="58" r="6" fill="#2e353b" />
        <circle cx="120" cy="58" r="6" fill="#2e353b" />
        {/* sad brows (inner ends raised) */}
        <path d="M68 50 L91 42" stroke="#2e353b" strokeWidth="4" strokeLinecap="round" />
        <path d="M132 50 L109 42" stroke="#2e353b" strokeWidth="4" strokeLinecap="round" />
        {/* frown */}
        <path d="M84 92 Q100 80 116 92" stroke="#2e353b" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* tear */}
        <path d="M126 66 Q132 76 126 80 Q120 76 126 66 Z" fill="#7FB8E8" />
    </svg>
);

let cachedEvents = null;

const Events = () => {
    const eventsBlockRef = useRef(null);
    const [events, setEvents] = useState(cachedEvents || staticEvents);
    const [loading, setLoading] = useState(!cachedEvents);

    const getEvents = async () => {
        try {
            const all = await client.graphql({ query: listEvents });
            let fetchedEvents = all.data.listEvents.items;
        
            const existingTitles = new Set(fetchedEvents.map(e => e.title));
            const newStatic = staticEvents.filter(e => !existingTitles.has(e.title));
            const combined = [...fetchedEvents, ...newStatic];
            setEvents(combined);
        } catch (err) {
            console.error("Error fetching events:", err);
        } finally {
            setLoading(false);
        }

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
                    {loading ? (
                        <div className="workshop-card events-skeleton" aria-hidden="true" />
                    ) : (
                        <div className="workshop-card no-events-card">
                            <SadComputer />
                            <h2>Stay Tuned for Upcoming Events</h2>
                            <p>Nothing is scheduled right now. Check back soon!</p>
                        </div>
                    )}
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

        

           <div className="sign-up-container">
                <div className="sign-up-container-head">
                    <h3>
                        Interested in HerAI Events?
                        <br />
                        Sign Up to Stay Informed!
                    </h3>
                </div>
                <div className="sign-up-container-body">
                    <p>
                        Get access to all of our workshop content and get
                        notified of upcoming events
                    </p>
                    <NavLink to={"/login"} className={"check-btn"}>
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Events;