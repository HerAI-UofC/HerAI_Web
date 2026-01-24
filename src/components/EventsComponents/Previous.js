import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";


import data from "./carouselData.json"
import Carousel from "./Carousel"
import "./previous.css";

/**DateIcon component for timeline */

const DateIcon = ({date}) => (
    <div className="timeline-date-icon">
        {date}
    </div>
)

const Previous = ({ slides }) => {

    const events = Object.entries(data);

    return(
        <div className="previous-page">

            <VerticalTimeline
             lineColor="#8C6D6C"
            >
                {events.map(([key,event]) => (
                    <VerticalTimelineElement
                        key={key}
                        icon={<DateIcon date={event.date} />}
                        iconStyle={{
                            background: "#8C6D6C",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        contentStyle={{
                            borderRadius: "18px",
                            
                            }}
                        contentArrowStyle={{ borderRight: "7px solid #fff" }}
                    >
                    <Carousel
                        title={event.title}
                        description={event.description}
                        slides={event.slides}
                    />

                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            
         

             
                {/* {Object.entries(data).map(([key,event]) =>(
                
                <Carousel
                key ={key}
                title={event.title}
                date = {event.date}
                description={event.description}
                slides={event.slides}
                />
                ))} */}
          
           
            
        </div>
    )
}

export default Previous;