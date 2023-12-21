import { NavLink } from "react-router-dom";
import "./style.css";

const EventBlock = ({ event, dir }) => {
    console.log(event);
    return (
        <div
            className="event-block"
            style={
                dir
                    ? { flexDirection: "row-reverse" }
                    : { flexDirection: "row" }
            }
        >
            <div className="event-img">
                <img src={event.image}></img>
            </div>
            <div className="event-preview">
                <h2>{event.title}</h2>
                <p>{event.descr}</p>
                <NavLink className={"check-btn"}>Check Out</NavLink>
            </div>
        </div>
    );
};

export default EventBlock;
