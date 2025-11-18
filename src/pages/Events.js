import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/events.css";
import EventBlock from "../components/EventBlock/EventBlock";
import { generateClient } from "aws-amplify/api";
import { listEvents } from "../graphql/queries";
import eventImg from "../img/events-img.png";

const testEvent = {
    title: "De-Stress Trivia Night",
    location: "ENGG 224",
    date: "2025-11-20T00:00:00.000Z",
    summary: "Join us for a fun De-Stress Trivia Night hosted by HerAI and AIC on November 19th from 5–8 PM in ENGG 224! Enjoy three rounds of trivia, board games, snacks, and chances to win prizes throughout the evening. Come relax, play games, and connect with others before finals!",
    isUpcoming: true, 
    header: eventImg,
    videoDescription: "This video will be available after the event.",
    pdfDescription: "The slides will be available after the event."
};



const Events = () => {
    // const videoSrc = "https://test-grab-bucket.s3.amazonaws.com/sample-5s.mp4";
    // const pdfSrc = "https://test-grab-bucket.s3.amazonaws.com/sample.pdf";

    const eventsBlockRef = useRef(null);

    const client = generateClient();


    const [events, setEvents] = useState([testEvent]);
    // const [events, setEvents] = useState([]);


    const getEvents = async () => {
        const all = await client.graphql({ query: listEvents });

        setEvents(all.data.listEvents.items);
        //console.log("ALL", events);
    };

    useEffect(() => {
        // getEvents(); 
    }, []);


    useEffect(() => {
        if (events[0] && !events[0].header) {
            const updatedEvents = events.map((e) => {
                return {
                    ...e,
                    header: `https://res.cloudinary.com/dngcyqfpe/image/upload/${e.title
                        .replace(" ", "")
                        .toLowerCase()}-head.jpg`,
                };
            });

            setEvents(updatedEvents);
        }
    }, [events]);

    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(3);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        eventsBlockRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    
    const upcomingEvents = events.filter((event) => event.isUpcoming);

    useEffect(() => {
        
        if (upcomingEvents.length > 0) {
            const timer = setInterval(() => {
                setCurrentEventIndex(
                    (prevIndex) => (prevIndex + 1) % upcomingEvents.length
                );
            }, 10000);

            return () => clearInterval(timer);
        }
    }, [currentEventIndex, upcomingEvents.length]); 

    const formattedDate = () => {
        try {
            if (!upcomingEvents[currentEventIndex]) return;

            const date = new Date(upcomingEvents[currentEventIndex].date);
            let hours = date.getHours();
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const formatted = `${
                date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()} ${hours}:${minutes} ${ampm}`;
            return formatted;
        } catch {
            return;
        }
    };
    
    if (events.length === 0) {
        return (
            <div className="no-events-section">
                <h2>Stay Tuned for Upcoming Events</h2>
                <NavLink to="/community">Explore Our Community</NavLink>
            </div>
        );
    }
    

    const hasUpcomingEvents = upcomingEvents.length > 0;

    return (
        <div>
            {/* */}
            {hasUpcomingEvents ? (
                <>
                    <div
                        className="upcoming-container"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${upcomingEvents[currentEventIndex].header})`,
                        }}
                    >
                        <h1>Upcoming Events</h1>
                        <div className="event event-card">
                            <h2>{upcomingEvents[currentEventIndex].title}</h2>
                            <h5>{upcomingEvents[currentEventIndex].location}</h5>
                            <h6>{formattedDate()}</h6>
                            <p>{upcomingEvents[currentEventIndex].summary}</p>
                            <NavLink
                                to={{
                                    pathname: `/events/${upcomingEvents[
                                        currentEventIndex
                                    ].title.replace(" ", "")}`,
                                }}
                                state={upcomingEvents[currentEventIndex]}
                                className="check-btn"
                            >
                                Check Out
                            </NavLink>
                        </div>
                    </div>
                    <div className="dots">
                        {upcomingEvents.map((event, index) => (
                            <span
                                key={index}
                                className="dot"
                                id={index === currentEventIndex ? "active-dot" : ""}
                                onClick={() => setCurrentEventIndex(index)}
                            ></span>
                        ))}
                    </div>
                </>
            ) : (
                <div className="upcoming-container" style={{minHeight: "20vh", padding: "0 100px"}}>
                     <h1>Past Events</h1>
                </div>
            )}

            {/*  */}
            <div ref={eventsBlockRef}>
                {currentEvents.map((event, index) => (
                    <EventBlock
                        key={index}
                        event={event}
                        dir={index % 2 === 1}
                    />
                ))}
            </div>
            <div className="pagination">
                {Array(Math.ceil(events.length / eventsPerPage))
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