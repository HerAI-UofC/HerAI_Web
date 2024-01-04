import React, { useState } from "react";
import "./style.css";

const GalleryPane = ({ imgs }) => {
    const [fullscreenImage, setFullscreenImage] = useState(null);
    //const columns = [[], [], []];

    if (imgs === null) {
        return <h1>NOT FOUND</h1>;
    }

    const isMobile = window.innerWidth <= 768;
    const columns = isMobile ? [[], []] : [[], [], []];

    imgs.forEach((src, index) => {
        columns[index % (isMobile ? 2 : 3)].push(
            <img
                src={src}
                alt=""
                key={index}
                onClick={() => setFullscreenImage(src)}
            />
        );
    });

    return (
        <div className="gallery-section">
            <h2>Gallery</h2>
            <div className="gallery-columns">
                <div>{columns[0]}</div>
                <div>{columns[1]}</div>
                {isMobile ? null : <div>{columns[2]}</div>}
            </div>
            {fullscreenImage && (
                <>
                    <div
                        className="fullscreen-backdrop"
                        onClick={() => setFullscreenImage(null)}
                    />
                    <img
                        src={fullscreenImage}
                        className="fullscreen-image"
                        onClick={() => setFullscreenImage(null)}
                    />
                </>
            )}
        </div>
    );
};

export default GalleryPane;
