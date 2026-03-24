import "../styles/eventsRevamp.css";
import React from 'react';
import { useState } from 'react';
import UpcomingEvents from './Events';
import PreviousEvents from '../components/EventsComponents/Previous';


const EventsRevamp = () => {
    const [activeTab, setActiveTab] = useState("upcoming");

    return(
        <div className="events-container">

           <div className="event-btns">  
           <button className={`events-re ${activeTab === 'upcoming' ? "active":""}`} 
           onClick={() => setActiveTab("upcoming")} 
           >Upcoming</button>


           <button className={`events-re ${activeTab === 'previous' ? "active" : ""}`}
           onClick={() => setActiveTab("previous")}
           >Previous</button>
           </div>

           <div className="content">
            {activeTab === "upcoming" && <UpcomingEvents /> }
            {activeTab === "previous" && <PreviousEvents />}

           </div>

           
        </div>
    )
}

export default EventsRevamp;