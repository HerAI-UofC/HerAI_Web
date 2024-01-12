import { NavLink } from "react-router-dom";
import "./style.css";

const AccessDeniedPane = () => {
    return (
        <div className="access-denied-pane">
            <h1>Oops!</h1>
            <p>You need to be signed in to view this content.</p>
            <NavLink id={"access-btn"} to="/login">
                Sign In
            </NavLink>
        </div>
    );
};

export default AccessDeniedPane;
