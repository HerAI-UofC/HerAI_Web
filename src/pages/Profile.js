import { useEffect, useState } from "react";
import "../styles/profile.css";
import {
    fetchUserAttributes,
    updateUserAttribute,
    confirmUserAttribute,
} from "aws-amplify/auth";

const Profile = () => {
    const [userAttributes, setUserAttributes] = useState(null);
    const [newEmail, setNewEmail] = useState("");
    const [code, setCode] = useState("");
    const [codeFailed, setCodeFailed] = useState(false);
    const [verificationSent, setVerificationSent] = useState(false);
    const [updateFailed, setUpdateFailed] = useState(false);

    const getUserAttributes = async () => {
        try {
            const attributes = await fetchUserAttributes();
            setUserAttributes(attributes);
        } catch (e) {
            console.log(e);
        }
    };

    const handleUpdateUserAttributeNextSteps = (output) => {
        const { nextStep } = output;
        console.log(nextStep);
        switch (nextStep.updateAttributeStep) {
            case "CONFIRM_ATTRIBUTE_WITH_CODE":
                const codeDeliveryDetails = nextStep.codeDeliveryDetails;
                console.log(
                    `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
                );
                // Collect the confirmation code from the user and pass to confirmUserAttribute.
                break;
            case "DONE":
                console.log(`attribute was successfully updated.`);
                break;
        }
    };

    const updateEmail = async (attributeKey, value) => {
        console.log(userAttributes, value);
        if (value === userAttributes.email) {
            console.log("NOPE");
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
            handleUpdateUserAttributeNextSteps(output);
        } catch (error) {
            console.log(error);
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

    useEffect(() => {
        getUserAttributes();
    }, []);

    // console.log("HERE", userAttributes);
    // console.log("CODE", code);
    return (
        <div>
            <h1>Hello{userAttributes ? ", " + userAttributes.name : ""}!</h1>
            <div>
                <h6>Email: </h6>
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
                    placeholder={userAttributes ? userAttributes.email : ""}
                ></input>
                <button onClick={() => updateEmail("email", newEmail)}>
                    Change
                </button>
            </div>
            {updateFailed ? <p>Please enter a valid email</p> : null}
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
                    <button
                        onClick={() =>
                            confirmNewEmail({
                                userAttributeKey: "email",
                                confirmationCode: code,
                            })
                        }
                    >
                        TEST CODE
                    </button>
                    {codeFailed ? <p>Incorrect Code</p> : null}
                </div>
            ) : null}

            <button>Delete Account</button>
        </div>
    );
};

export default Profile;
