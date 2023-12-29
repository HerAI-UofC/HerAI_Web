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

    const testList = [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/id/238/200/300",
        "https://picsum.photos/id/239/200/300",
        "https://picsum.photos/id/240/200/300",
        "https://picsum.photos/id/241/200/300",
        "https://picsum.photos/id/242/200/300",
        "https://picsum.photos/id/243/200/300",
        "https://picsum.photos/id/244/200/300",
        "https://picsum.photos/id/245/200/300",
        "https://picsum.photos/id/246/200/300",
        "https://picsum.photos/id/247/200/300",
        "https://picsum.photos/id/248/200/300",
        "https://picsum.photos/id/249/200/300",
        "https://picsum.photos/id/250/200/300",
        "https://picsum.photos/id/251/200/300",
        "https://picsum.photos/id/252/200/300",
        "https://picsum.photos/id/253/200/300",
        "https://picsum.photos/id/254/200/300",
        "https://picsum.photos/id/255/200/300",
        "https://picsum.photos/id/256/200/300",
    ];

    const setView = () => {
        if (!signedIn && (activeOption === "vid" || activeOption === "pdf")) {
            return <AccessDeniedPane />;
        }

        if (activeOption === "vid") {
            return <VideoPane src={vidSrc} />;
        } else if (activeOption === "pdf") {
            return <SlidesPane src={pdfSrc} />;
        } else if (activeOption === "pic") {
            return <GalleryPane imgs={testList} />;
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
                    <h1 onClick={() => test()}>{event.title}</h1>
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
