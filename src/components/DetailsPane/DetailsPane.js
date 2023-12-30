import "./style.css";

const DetailsPane = ({ event, fDate }) => {
    return (
        <div className="details-pane">
            <h2>Event Details</h2>
            <div className="details-box">
                <h6>
                    <strong>Location: </strong> {event.location}
                </h6>
                <h6>
                    <strong>Date: </strong>
                    {fDate}
                </h6>
                <h6>
                    <strong>Presenters: </strong>
                    {event.presenters}
                </h6>

                <p>{event.description}</p>
            </div>
        </div>
    );
};

export default DetailsPane;
