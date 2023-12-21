import "./style.css";

const SlidesPane = ({ src }) => {
    return (
        <div className="pdf-section">
            <h2>Content Title</h2>
            <p>Blurb</p>
            <iframe src={src}></iframe>
        </div>
    );
};

export default SlidesPane;
