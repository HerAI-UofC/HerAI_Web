import { useNavigate } from "react-router-dom";
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../styles/login.css";

const Login = () => {
    const navigate = useNavigate();

    // change order of fields
    const formFields = {
        signUp: {
            email: {
                order: 2,
            },
            name: {
                label: "Name",
                placeholder: "Enter your full name",
                required: true,
                order: 1,
            },
            password: {
                order: 3,
            }
        },
    };

    const redirectToProfile = () => {
        navigate("/profile");
    };
    return (
        <div style={{ margin: "50px 0" }}>
            <Authenticator formFields={formFields}>
                {({ signOut, user }) => {
                    //console.log("USER", user);
                    redirectToProfile();
                }}
            </Authenticator>
        </div>
    );
};

export default Login;
