import "./style.css";

const SlidesPane = ({ src, descr }) => {
    return (
        <div className="pdf-section">
            <h2>Content Title</h2>
            <p>{descr}</p>
            <iframe src={src}></iframe>
        </div>
    );
};

export default SlidesPane;
