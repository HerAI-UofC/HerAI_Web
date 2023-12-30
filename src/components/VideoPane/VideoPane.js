import "./style.css";

const VideoPane = ({ src, descr }) => {
    console.log(src);
    return (
        <div className="vid-container">
            <h2>Workshop Video</h2>
            <p>{descr}</p>
            <video width="90%" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPane;
