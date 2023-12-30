import { useLocation, useParams } from "react-router-dom";
import "../styles/event.css";
import { useEffect, useState } from "react";
import VideoPane from "../components/VideoPane/VideoPane";
import SlidesPane from "../components/SlidesPane/SlidesPane";
import GalleryPane from "../components/GalleryPane/GalleryPane";
import DetailsPane from "../components/DetailsPane/DetailsPane";
import { getUrl } from "aws-amplify/storage";
import awsconfig from "../aws-exports";
import { fetchAuthSession } from "aws-amplify/auth";
import AccessDeniedPane from "../components/AccessDeniedPane/AccessDeniedPane";

const Event = () => {
    const location = useLocation();
    const event = location.state;

    const [activeOption, setActiveOption] = useState("vid");
    const [vidSrc, setVidSrc] = useState(null);
    const [pdfSrc, setPdfSrc] = useState(null);

    const [file, setFile] = useState(null);
    const [signedIn, setSignedIn] = useState(false);

    const isUser = async () => {
        try {
            await fetchAuthSession();
            setSignedIn(true);
        } catch {
            setSignedIn(false);
        }
    };

    useEffect(() => {
        isUser();
    }, []);

    useEffect(() => {
        if (signedIn) {
            console.log("IN");
            getUrls();
        } else {
            console.log("OUT");
        }
    }, [signedIn]);

    const getUrls = async () => {
        //if()
        const getVidUrl = await getUrl({
            key: event.title.replace(" ", "").toLowerCase() + ".mp4",
        });
        const getPdfUrl = await getUrl({
            key: event.title.replace(" ", "").toLowerCase() + ".pdf",
        });
        setVidSrc(getVidUrl.url.href);
        setPdfSrc(getPdfUrl.url.href);
    };

    if (event === null) {
        return <h1>NOT FOUND</h1>;
    }

    const galleryUrls = Array.from(
        { length: 5 },
        (_, i) =>
            `https://res.cloudinary.com/dngcyqfpe/image/upload/${event.title
                .replace(" ", "")
                .toLowerCase()}-${i + 1}.jpg`
    );

    const setView = () => {
        if (!signedIn && (activeOption === "vid" || activeOption === "pdf")) {
            return <AccessDeniedPane />;
        }

        if (activeOption === "vid") {
            return <VideoPane src={vidSrc} />;
        } else if (activeOption === "pdf") {
            return <SlidesPane src={pdfSrc} />;
        } else if (activeOption === "pic") {
            return <GalleryPane imgs={galleryUrls} />;
        } else if (activeOption === "info") {
            return <DetailsPane event={event} fDate={formattedDate()} />;
        }
    };

    const formattedDate = () => {
        try {
            const date = new Date(event.date);
            let hours = date.getHours();
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const formatted = `${
                date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()} ${hours}:${minutes} ${ampm}`;
            return formatted;
        } catch {
            return;
        }
    };

    return (
        <div>
            <div
                className="event-backdrop"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${event.header})`,
                }}
            >
                <div>
                    <h1 onClick={() => test()}>{event.title}</h1>
                    <h5>{event.location}</h5>
                    <h6>{formattedDate()}</h6>
                    <p>{event.summary}</p>
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
