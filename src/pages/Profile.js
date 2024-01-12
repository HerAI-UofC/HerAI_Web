import { useEffect, useState } from "react";
import "../styles/profile.css";
import {
    fetchUserAttributes,
    updateUserAttribute,
    confirmUserAttribute,
    deleteUser,
} from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

const Profile = () => {
    const nav = useNavigate();

    const [userAttributes, setUserAttributes] = useState(null);
    const [newEmail, setNewEmail] = useState("");
    const [code, setCode] = useState("");
    const [codeFailed, setCodeFailed] = useState(false);
    const [verificationSent, setVerificationSent] = useState(false);
    const [updateFailed, setUpdateFailed] = useState(false);

    const [askAgain, setAskAgain] = useState(false);

    const getUserAttributes = async () => {
        try {
            const attributes = await fetchUserAttributes();
            setUserAttributes(attributes);
        } catch (e) {
            console.log(e);
        }
    };

    const updateEmail = async (attributeKey, value) => {
        //console.log(userAttributes, value);
        if (value === userAttributes.email) {
            //console.log("NOPE");
            return;
        }
        try {
            const output = await updateUserAttribute({
                userAttribute: {
                    attributeKey,
                    value,
                },
            });
            setUpdateFailed(false);
            setVerificationSent(true);
        } catch (error) {
            //console.log(error);
            setUpdateFailed(true);
        }
    };

    const confirmNewEmail = async ({ userAttributeKey, confirmationCode }) => {
        try {
            await confirmUserAttribute({ userAttributeKey, confirmationCode });
            setCodeFailed(false);
            window.location.reload();
        } catch (e) {
            console.log(e);
            setCodeFailed(true);
        }
    };

    const deleteAccount = async () => {
        try {
            await deleteUser();
            nav("/");
        } catch (e) {
            console.log(e);
        }
    };

    const userSignOut = async () => {
        try {
            await signOut();
            nav("/");
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUserAttributes();
    }, []);

    return (
        <div className="profile-body">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"></img>
            <div className="profile-text">
                <h1>
                    Hello{userAttributes ? ", " + userAttributes.name : ""}!
                </h1>
                <button id="signout-btn" onClick={() => userSignOut()}>
                    Signout
                </button>
                <div className="email-section">
                    <h6>Email: </h6>
                    <div>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={(e) => {
                                setNewEmail(e.target.value);
                                setVerificationSent(false);
                                setCodeFailed(false);
                            }}
                            className={updateFailed ? "failed-form" : ""}
                            placeholder={
                                userAttributes ? userAttributes.email : ""
                            }
                        ></input>
                        {verificationSent ? (
                            <div>
                                <input
                                    type="text"
                                    id="code"
                                    name="code"
                                    placeholder="000000"
                                    className={codeFailed ? "failed-form" : ""}
                                    onChange={(e) => setCode(e.target.value)}
                                ></input>
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <button onClick={() => updateEmail("email", newEmail)}>
                            Change
                        </button>
                        {verificationSent ? (
                            <div>
                                <button
                                    onClick={() =>
                                        confirmNewEmail({
                                            userAttributeKey: "email",
                                            confirmationCode: code,
                                        })
                                    }
                                >
                                    Verify
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
                {verificationSent ? (
                    <p>A verification code was sent to your email</p>
                ) : null}
                {updateFailed ? <p>Please enter a valid email</p> : null}
                {codeFailed ? <p>Incorrect Code</p> : null}
                <button id="delete-btn" onClick={() => setAskAgain(true)}>
                    Delete Account
                </button>
                {askAgain ? (
                    <div className="delete-section">
                        <p>
                            Are you sure you want to permanently delete your
                            account, this action is irreversible
                        </p>
                        <div className="choice-section">
                            <button onClick={() => deleteAccount()}>Yes</button>
                            <button onClick={() => setAskAgain(false)}>
                                No
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Profile;
