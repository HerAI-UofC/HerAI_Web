import React, { useState } from "react";
import data from "./carouselData.json"
import Carousel from "./Carousel"
import "./previous.css";


const Previous = ({ slides }) => {

    return(
        <div>
            {Object.entries(data).map(([key,event]) =>(
                <Carousel
                key ={key}
                title={event.title}
                description={event.description}
                slides={event.slides}
                />
            ))}
        </div>
    )
}

export default Previous;