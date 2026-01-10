import "../styles/contact.css";
import img from "../img/contact-logo.png";
import { Amplify } from "aws-amplify";
import { createCandidate } from "../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useState } from "react";

const Contact = () => {
    window.addEventListener("scroll", function () {
        const parallax = this.document.getElementById("scroll-effect");
        if (parallax) {
            let scrollPosition = this.window.pageYOffset;
            parallax.style.backgroundPositionY =
                scrollPosition * -0.5 + 100 + "px";
        }
    });

    // form components
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitMessage, setSubmitMessage] = useState("");

    const client = generateClient();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log("Form submitted", formData);
        const firstname = formData.firstName;
        const lastname = formData.lastName;
        const email = formData.email;
        const number = formData.phone;
        const message = formData.message;
        //console.log(firstname, message);
        await client.graphql({
            query: createCandidate,
            variables: {
                input: {
                    firstname,
                    lastname,
                    email,
                    number,
                    message,
                },
            },
        });

        setSubmitMessage("Form submitted successfully");

        // clear form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <>
            <div className="email-header">
                <div className="email-column">
                    <img src={img} alt="mail" id="contact-logo"></img>
                    <h1>
                        Don't hesitate to email us if you
                        <br />
                        have any queries about us
                    </h1>
                </div>
                <div className="email-column">
                    <h2>Let's Connect</h2>
                    <div className="email-form">
                        <form onSubmit={handleSubmit}>
                            <label>
                                First Name
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName || ""}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Last Name
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName || ""}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email || ""}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Phone Number
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone || ""}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Message
                                <textarea
                                    type="text"
                                    name="message"
                                    value={formData.message || ""}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <button type="submit">Send Message</button>
                            <p>{submitMessage}</p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="pic-divider">
                <div className="pic-scroll" id="scroll-effect"></div>
            </div>

            <div className="contact-info">
                <div className="info-section">
                    <h1>Our Contact Info</h1>
                    <p>
                        Email:{" "}
                        <span className="highlight">
                            herai.club@ucalgary.ca
                        </span>
                    </p>
                </div>
                <div className="maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040.725958257668!2d-114.13482614855928!3d51.07467887885551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f082b6a09af%3A0xdd9eb9091606afce!2sUniversity%20Of%20Calgary!5e0!3m2!1sen!2sca!4v1703576034908!5m2!1sen!2sca"
                        title="ucalgary"
                        width="600"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;
