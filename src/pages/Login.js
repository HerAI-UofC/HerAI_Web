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
                {({ signOut, user }) => {
                    //console.log("USER", user);
                    redirectToProfile();
                }}
            </Authenticator>
        </div>
    );
};

export default Login;
