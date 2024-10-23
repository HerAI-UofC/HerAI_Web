import "../styles/blog.css";
import React, { useState } from "react";
import arch from "../img/arch.png";
import img6 from "../img/traffic.png";
import img7 from "../img/leaves.png";
import img8 from "../img/laptop.png";
import img9 from "../img/robot.png";
import { NavLink } from "react-router-dom";
import topImage from "../img/sky.png";  // Adjust the path accordingly
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const images = [
    { src: img6, alt: "Computer Vision" },
    { src: img8, alt: "Internet of Things" },
    { src: img7, alt: "Deep Learning" },
    { src: img9, alt: "Machine Learning" },,
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
    if (txt) {
      const winHeight = window.innerHeight;
      const txtTop = txt.getBoundingClientRect().top;
      if (txtTop - winHeight <= 0) {
        txt.classList.add("fade-in");
      } else {
        txt.classList.remove("fade-in");
      }
    }
  });

  return (
    <>
      <div className="top-section">
        <img src={topImage} alt="Top Image" className="top-image" />
      </div>
      <div className="blog-header">
        <h1>Our First Blog</h1>
      </div>
      <div className="extra-space"></div>
      <div className="author-publish-container">
        <div className="author-label"><strong>AUTHOR</strong></div>
        <div className="publish-label">PUBLISH DATE</div>
      </div>
      <div className="blog-container">
        <h2 className="subtitle-font">This is a subtitle for your new post</h2>
        <div className="content-container">
          <div className="content-text">
            <p>
              Write about something you know. If you don’t know much about a
              specific topic, invite an expert to write about it. Having a
              variety of authors in your blog is a great way to keep visitors
              engaged. You know your audience better than anyone else, so keep
              them in mind as you write your blog posts. Write about things
              they care about. If you have a company Facebook page that gets
              lots of comments, you can look here to find topics to write
              about.
            </p>
            <p>
              Write about something you know. If you don’t know much about a
              specific topic, invite an expert to write about it. Having a
              variety of authors in your blog is a great way to keep visitors
              engaged. You know your audience better than anyone else, so keep
              them in mind as you write your blog posts. Write about things
              they care about. If you have a company Facebook page that gets
              lots of comments, you can look here to find topics to write
              about.
            </p>
          </div>
          <div className="content-image">
            <img src={arch} alt="Architecture" />
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Blog;
