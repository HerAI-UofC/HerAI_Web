import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { NavLink } from "react-router-dom";
import "../styles/events.css";
import EventBlock from "../components/EventBlock/EventBlock";

const Events = () => {
    // const videoSrc = "https://test-grab-bucket.s3.amazonaws.com/sample-5s.mp4";
    // const pdfSrc = "https://test-grab-bucket.s3.amazonaws.com/sample.pdf";

    const [events, useEvents] = useState([
        {
            title: "Event 1",
            image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            title: "Event 2",
            image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
            descr: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        },
    ]);

    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentEventIndex((currentEventIndex + 1) % events.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [currentEventIndex, events.length]);

    return (
        <div>
            {/* <h1>EVENTS</h1>
            <video width="320" height="240" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <iframe src={pdfSrc} width="90%" height="500px" /> */}
            <div
                className="upcoming-container"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${events[currentEventIndex].image})`,
                }}
            >
                <h1>Upcoming Events</h1>
                <div className="event">
                    <h2>{events[currentEventIndex].title}</h2>
                    <p>{events[currentEventIndex].descr}</p>
                    <NavLink className="check-btn">Check Out</NavLink>
                </div>
            </div>
            <div className="dots">
                {events.map((event, index) => (
                    <span
                        key={index}
                        className="dot"
                        id={index === currentEventIndex ? "active-dot" : ""}
                        onClick={() => setCurrentEventIndex(index)}
                    ></span>
                ))}
            </div>
            <div>
                {events.map((event, index) => (
                    <EventBlock
                        key={index}
                        event={event}
                        dir={index % 2 === 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Events;
