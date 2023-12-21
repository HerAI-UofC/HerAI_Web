import { useLocation, useParams } from "react-router-dom";
import "../styles/event.css";
import { useState } from "react";
import VideoPane from "../components/VideoPane/VideoPane";
import SlidesPane from "../components/SlidesPane/SlidesPane";
import GalleryPane from "../components/GalleryPane/GalleryPane";
import DetailsPane from "../components/DetailsPane/DetailsPane";

const Event = () => {
    const location = useLocation();
    const event = location.state;

    const [activeOption, setActiveOption] = useState("vid");

    if (event === null) {
        return <h1>NOT FOUND</h1>;
    }

    const setView = () => {
        if (activeOption === "vid") {
            return (
                <VideoPane
                    src={
                        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    }
                />
            );
        } else if (activeOption === "pdf") {
            return <SlidesPane />;
        } else if (activeOption === "pic") {
            return <GalleryPane />;
        } else if (activeOption === "info") {
            return <DetailsPane />;
        }
    };

    return (
        <div>
            <div
                className="event-backdrop"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${event.image})`,
                }}
            >
                <div>
                    <h1>{event.title}</h1>
                    <h4>December 21, 2023</h4>
                    <p>{event.descr}</p>
                </div>
            </div>
            <div className="event-options">
                <div
                    className={activeOption === "vid" ? "active" : ""}
                    onClick={() => setActiveOption("vid")}
                >
                    <img src="https://www.freeiconspng.com/thumbs/video-icon/video-icon-6.png"></img>
                    <h6>Video</h6>
                </div>
                <div
                    className={activeOption === "pdf" ? "active" : ""}
                    onClick={() => setActiveOption("pdf")}
                >
                    <img src="https://cdn-icons-png.flaticon.com/512/6595/6595195.png"></img>
                    <h6>Slides</h6>
                </div>
                <div
                    className={activeOption === "pic" ? "active" : ""}
                    onClick={() => setActiveOption("pic")}
                >
                    <img src="https://icons.iconarchive.com/icons/praveen/minimal-outline/512/gallery-icon.png"></img>
                    <h6>Gallery</h6>
                </div>
                <div
                    className={activeOption === "info" ? "active" : ""}
                    onClick={() => setActiveOption("info")}
                >
                    <img src="https://static.thenounproject.com/png/2490660-200.png"></img>
                    <h6>Details</h6>
                </div>
            </div>
            {setView()}
        </div>
    );
};

export default Event;
