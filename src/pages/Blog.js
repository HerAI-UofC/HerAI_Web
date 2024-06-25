import "../styles/blog.css";
import img from "../img/traffic.png";
import img2 from "../img/leaves.png";
import img3 from "../img/laptop.png";
import img4 from "../img/robot.png";
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {

    const images = [
        { src: img, alt: 'Computer Vision' },
        { src: img3, alt: 'Internet of Things' },
        { src: img2, alt: 'Deep Learning' },
        { src: img4, alt: 'Machine Learning' }
      ];
  
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const openModal = (index) => {
        setCurrentIndex(index);
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    
      const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      };
    
      const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
      };
  
  window.addEventListener("scroll", () => {
    const txt = document.getElementById("connect");
    //console.log(txt);
    if (txt) {
      //console.log("THERE");
      const winHeight = window.innerHeight;
      const txtTop = txt.getBoundingClientRect().top;

      if (txtTop - winHeight <= 0) {
        //console.log("STARTED");
        txt.classList.add("fade-in");
      } else {
        txt.classList.remove("fade-in");
      }
    } else {
      //console.log("NOT THERE");
    }
  });

  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div className="grid-item" key={index} onClick={() => openModal(index)}>
          <img src={image.src} alt={image.alt} />
          <div className="overlay">{image.alt}</div>
        </div>
      ))}

      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <button className="prev-button" onClick={prevSlide}>&#10094;</button>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="modal-image" />
            <button className="next-button" onClick={nextSlide}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Blog;
