import { Document, Page } from "react-pdf";

const Events = () => {
    const videoSrc = "https://test-grab-bucket.s3.amazonaws.com/sample-5s.mp4";
    const pdfSrc = "https://test-grab-bucket.s3.amazonaws.com/sample.pdf";

    return (
        <div>
            <h1>EVENTS</h1>
            <video width="320" height="240" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <iframe src={pdfSrc} width="90%" height="500px" />
        </div>
    );
};

export default Events;
