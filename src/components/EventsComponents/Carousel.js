import React, { useState } from "react";
import "./previous.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

const Carousel = ({slides, title, description}) =>{

        const [slide, setSlide] = useState(0);
    
        const nextSlide = () => {
            setSlide(slide===slides.length -1 ? 0 : slide+1);
    
        }
    
        const prevSilde = () => {
            setSlide(slide === 0 ? slides.length-1 : slide-1);
    
        }
    
        return(
            <div className="prev-container">
    
            <div className="carousel-description">
                <h3>{title}</h3>
                <p>{description}</p>
            </div> 
            <div className="carousel">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSilde}/>
                {slides.map((item, idx) => {
                return <img src= {item.src} alt={item.alt} key={idx} className={slide===idx ? "slide" : "slide slide-hidden"}/>
            })}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {slides.map((_, idx) => {
                    return <button key={idx} className={slide=== idx ? "indicator": "indicator indicator-inactive"}></button>
                })}
            </span>
            </div>
    
            
            </div>
        )

};
export default Carousel;