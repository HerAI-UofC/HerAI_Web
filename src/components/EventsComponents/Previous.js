import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";


import data from "./carouselData.json"
import Carousel from "./Carousel"
import "./previous.css";

/**Temp colours*/
// const ACCENT = "#8C6D6C";
const ACCENT = "#2e353bdd";
const CARD_BG = "#f2f4efd6";

/**DateIcon component for timeline */
const DateIcon = ({date}) => (
    <div className="timeline-date-icon">
        {date}
    </div>
)

const Previous = () => {

    const events = Object.entries(data);

    return(
        <div className="previous-page">

            <VerticalTimeline
             lineColor={ACCENT}
            >
                {events.map(([key,event]) => (
                    <VerticalTimelineElement
                        key={key}
                        icon={<DateIcon date={event.date} />}
                        iconStyle={{
                            background: ACCENT,
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 0 5px #fff, 0 3px 10px rgba(0,0,0,0.2)"
                        }}
                        contentStyle={{
                            borderRadius: "18px",
                            border: `2px solid ${ACCENT}`,
                            background: CARD_BG,
                            boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
                            }}
                        contentArrowStyle={{ borderRight: `12px solid ${ACCENT}` }}
                    >
                    <Carousel
                        title={event.title}
                        description={event.description}
                        slides={event.slides}
                    />

                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
         
            
        </div>
    )
}

export default Previous;