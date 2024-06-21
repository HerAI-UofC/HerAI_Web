import "../styles/blog.css";
import img from "../img/heart-logo-community.png";
import img2 from "../img/community-img.png";
import img3 from "../img/instagram-logo.png";
import img4 from "../img/discord-logo.png";
import img5 from "../img/linkedin-logo.png";
import { NavLink } from "react-router-dom";

const Blog = () => {
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
    <>
      <div className="grid-container">
        <div className="grid-item">
          <img src={img} alt="Computer Vision" />
          <div className="overlay">Computer Vision</div>
        </div>
        <div className="grid-item">
          <img src={img} alt="Internet of Things" />
          <div className="overlay">Internet of Things</div>
        </div>
        <div className="grid-item">
          <img src={img} alt="Deep Learning" />
          <div className="overlay">Deep Learning</div>
        </div>
        <div className="grid-item">
          <img src={img}
            alt="Machine Learning"
          />
          <div className="overlay">Machine Learning</div>
        </div>
      </div>
    </>
  );
};

export default Blog;
