import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import { NavLink } from "react-router-dom";
import "../styles/events.css";
import EventBlock from "../components/EventBlock/EventBlock";

const Events = () => {
    // const videoSrc = "https://test-grab-bucket.s3.amazonaws.com/sample-5s.mp4";
    // const pdfSrc = "https://test-grab-bucket.s3.amazonaws.com/sample.pdf";

    const eventsBlockRef = useRef(null);

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
        {
            title: "Event 3",
            image: "https://www.democracy-international.org/sites/default/files/styles/image_small/public/images/gluhbirne.png?itok=93fYU6Ln",
            descr: "Event 3 description: Step into the exciting world of game development at this event. Discover the latest trends, learn from industry veterans, and get hands-on experience with cutting-edge tools. Whether you're a seasoned developer or just starting out, this event is packed with insights and opportunities.",
        },
        {
            title: "Event 4",
            image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/155457833/original/4f7bcb41ce4907038168383dd8905021470a4477/do-your-javascript-and-web-developement-assignments.jpg",
            descr: "Event 4 description: Experience the power of cloud computing in this comprehensive event. Learn about the benefits of cloud technology, understand its applications in various industries, and get a glimpse into the future of computing. This event is perfect for IT professionals and enthusiasts alike.",
        },
        {
            title: "Event 5",
            image: "https://www.herzing.edu/sites/default/files/2020-09/how-to-become-software-engineer.jpg",
            descr: "Event 5 description: Join us for a deep dive into the world of cybersecurity. Learn about the latest threats, the best prevention strategies, and how to secure your digital assets. This event is a must-attend for anyone interested in keeping their data safe in the digital age.",
        },
        {
            title: "Event 6",
            image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_02-2-850x412.jpg",
            descr: "Event 6 description: Dive into the world of AI with this engaging event. Explore the latest advancements, meet industry experts, and learn how AI is shaping the future. Don't miss out on this opportunity to broaden your knowledge and network with like-minded individuals.",
        },
    ]);

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
                    <NavLink
                        to={{
                            pathname: `/event/${events[
                                currentEventIndex
                            ].title.replace(" ", "")}`,
                        }}
                        state={events[currentEventIndex]}
                        className="check-btn"
                    >
                        Check Out
                    </NavLink>
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
