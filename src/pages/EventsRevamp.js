import "../styles/eventsRevamp.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PreviousEvents from "../components/EventsComponents/Previous";

const EventsRevamp = () => {
    const [activeTab, setActiveTab] = useState("upcoming");

    const StayTuned = () => (
        <div className="stay-tuned-container">
            <div className="stay-tuned-content">

                {/* Grey card */}
                <div className="stay-tuned-card">
                    <h2>Stay Tuned for Upcoming Events</h2>
                </div>

                {/* CTA Banner */}
                <div className="cta-container">
                    <div className="cta-left">
                        <h3>
                            Interested in HerAI Events?
                            <br />
                            Sign Up to Stay Informed!
                        </h3>
                    </div>

                    <div className="cta-right">
                        <p>
                            Get access to all of our workshop content and get notified of upcoming events
                        </p>

                        <NavLink to={"/login"} className="cta-btn">
                            Sign Up
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );

    return (
        <div className="events-container">
            <div className="event-btns">
                <button
                    className={`events-re ${activeTab === "upcoming" ? "active" : ""}`}
                    onClick={() => setActiveTab("upcoming")}
                >
                    Upcoming
                </button>

                <button
                    className={`events-re ${activeTab === "previous" ? "active" : ""}`}
                    onClick={() => setActiveTab("previous")}
                >
                    Previous
                </button>
            </div>

            <div className="content">
                {activeTab === "upcoming" && <StayTuned />}
                {activeTab === "previous" && <PreviousEvents />}
            </div>
        </div>
    );
};

export default EventsRevamp;