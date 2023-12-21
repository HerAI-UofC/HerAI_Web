import "./style.css";

const GalleryPane = ({ imgs }) => {
    const columns = [[], [], []];

    if (imgs === null) {
        return <h1>NOT FOUND</h1>;
    }

    imgs.forEach((src, index) => {
        columns[index % 3].push(<img src={src} alt="" key={index} />);
    });

    return (
        <div className="gallery-section">
            <h2>Gallery</h2>
            <div className="gallery-columns">
                <div>{columns[0]}</div>
                <div>{columns[1]}</div>
                <div>{columns[2]}</div>
            </div>
        </div>
    );
};

export default GalleryPane;
