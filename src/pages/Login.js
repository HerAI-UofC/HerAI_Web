import { useNavigate } from "react-router-dom";
import React from "react";
import "@aws-amplify/ui-react/styles.css";
import "../styles/login.css";
import { Authenticator } from "@aws-amplify/ui-react";

const Login = () => {
    const navigate = useNavigate();
    const redirectToProfile = () => {
        navigate("/profile");
    };
    return (
        <div style={{ margin: "50px 0" }}>
            <Authenticator>
                {({ signOut, user }) =>
                    //what shows after login - Probably direct whats inside here to another page file
                    // <main className="main">
                    //     <h1>Hello {user.username}</h1>
                    //     <button onClick={signOut}>Sign out</button>
                    // </main>
                    {
                        console.log("USER", user);
                        redirectToProfile();
                    }
                }
            </Authenticator>
        </div>
    );
};

export default Login;
