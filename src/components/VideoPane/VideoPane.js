import "./style.css";

const VideoPane = ({ src }) => {
    console.log(src);
    return (
        <div className="vid-container">
            <h2>Video Title</h2>
            <p>Some Info</p>
            <video width="90%" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPane;
