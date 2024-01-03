import { NavLink } from "react-router-dom";
import "./style.css";

const EventBlock = ({ event, dir }) => {
    //console.log(event);

    const formattedDate = () => {
        try {
            const date = new Date(event.date);
            let hours = date.getHours();
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const formatted = `${
                date.getMonth() + 1
            }/${date.getDate()}/${date.getFullYear()} ${hours}:${minutes} ${ampm}`;
            return formatted;
        } catch {
            return;
        }
    };

    const setFlexDirection = () => {
        if (window.innerWidth < 600) {
            return "column";
        }

        if (dir) {
            return "row-reverse";
        } else {
            return "row";
        }
    };

    return (
        <div
            className="event-block"
            style={{ flexDirection: setFlexDirection() }}
        >
            <div className="event-img">
                <img src={event.header}></img>
            </div>
            <div className="event-preview">
                <h2>{event.title}</h2>
                <h5>{event.location}</h5>
                <h6>{formattedDate()}</h6>
                <p>{event.summary}</p>
                <NavLink
                    to={{
                        pathname: `/HerAI_Web/events/${event.title.replace(
                            " ",
                            ""
                        )}`,
                    }}
                    state={event}
                    className={"check-btn"}
                >
                    Check Out
                </NavLink>
            </div>
        </div>
    );
};

export default EventBlock;
