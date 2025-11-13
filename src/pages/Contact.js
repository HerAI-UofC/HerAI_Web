import "../styles/contact.css";
import { generateClient } from "aws-amplify/api";
import { createContactMessage } from "../graphql/mutations";
import { useState } from "react";

const client = generateClient();

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        website: "" 
    });

    const [state, setState] = useState({
        loading: false,
        ok: false,
        error: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot (bots only)
        if (formData.website) {
            setState({ loading: false, ok: true, error: "" });
            return;
        }

        if (!formData.firstName || !formData.email || !formData.message) {
            setState({
                loading: false,
                ok: false,
                error: "Please fill in the required fields."
            });
            return;
        }

        try {
            setState({ loading: true, ok: false, error: "" });

            await client.graphql({
                query: createContactMessage,
                variables: {
                    input: {
                        firstName: formData.firstName,
                        lastName: formData.lastName || null,
                        email: formData.email,
                        phone: formData.phone || null,
                        message: formData.message
                    }
                }
            });

            setState({ loading: false, ok: true, error: "" });
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                website: ""
            });
        } catch (err) {
            setState({
                loading: false,
                ok: false,
                error: err.message || "Something went wrong."
            });
        }
    };

    return (
        <>
            {/* MAIN CARD WITH IMAGE ON THE RIGHT */}
            <section className="contact-hero contact-hero-split">
                <div className="contact-container">
                    <div className="contact-card-split">
                        {/* LEFT SIDE: TITLE + FORM + CONTACT INFO */}
                        <div className="contact-left">
                            <h1 className="contact-title">Contact Us</h1>
                            <p className="contact-subtitle">
                                Have a question about HerAI? Send us a note and
                                we'll get back to you.
                            </p>

                            <form
                                className="contact-form-modern"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <label>
                                    <span>First Name</span>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Your first name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>
                                    <span>Last Name (optional)</span>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Your last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label>
                                    <span>E-mail</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>

                                <label>
                                    <span>Phone Number (optional)</span>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="555-555-5555"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label>
                                    <span>Message</span>
                                    <textarea
                                        name="message"
                                        placeholder="Write your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                    />
                                </label>

                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                    style={{
                                        position: "absolute",
                                        left: "-9999px",
                                        height: 0,
                                        width: 0
                                    }}
                                />

                                <button
                                    type="submit"
                                    className="pill-btn"
                                    disabled={state.loading}
                                >
                                    {state.loading ? "Sending…" : "Send"}
                                </button>

                                {state.ok && (
                                    <p className="success">
                                        Thanks! We'll get back to you shortly.
                                    </p>
                                )}
                                {state.error && (
                                    <p className="error">{state.error}</p>
                                )}
                            </form>

                            <div className="contact-aside contact-aside-inline">
                                <div className="aside-block">
                                    <h4>Contact</h4>
                                    <p>
                                        <a href="mailto:connect.herai@gmail.com">
                                            connect.herai@gmail.com
                                        </a>
                                    </p>
                                </div>

                                <div className="aside-block">
                                    <h4>Based in</h4>
                                    <p>Calgary, Alberta</p>
                                </div>

                                <div className="aside-socials">
                                    {/* Instagram icon */}
                                    <a
                                        href="https://www.instagram.com/herai_uofc/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Instagram"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <rect
                                                x="3"
                                                y="3"
                                                width="18"
                                                height="18"
                                                rx="5"
                                                ry="5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="4"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <circle
                                                cx="17"
                                                cy="7"
                                                r="1.3"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>

                                    {/* Discord icon */}
                                    <a
                                        href="https://discord.com/invite/HFJW7aH3PF"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Discord"
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <rect
                                                x="3.5"
                                                y="6"
                                                width="17"
                                                height="12"
                                                rx="6"
                                                ry="6"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M8.5 17c1.2-.5 2.4-.8 3.5-.8s2.3.3 3.5.8"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                            {}
                                            <circle cx="10" cy="11" r="1.3" fill="currentColor" />
                                            <circle cx="14" cy="11" r="1.3" fill="currentColor" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn icon */}
                                    <a
                                        href="https://www.linkedin.com/company/herai-women-in-ai-ml/mycompany/"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <rect
                                                x="3"
                                                y="3"
                                                width="18"
                                                height="18"
                                                rx="2"
                                                ry="2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <rect
                                                x="6"
                                                y="10"
                                                width="2.8"
                                                height="7"
                                                fill="currentColor"
                                            />
                                            <circle
                                                cx="7"
                                                cy="7"
                                                r="1.3"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12 10h2.5a3 3 0 0 1 3 3v4h-2.6v-3.7c0-.9-.5-1.4-1.3-1.4-.8 0-1.6.5-1.6 1.4V17H12z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: IMAGE */}
                        <div
                            className="contact-right-image"
                            id="scroll-effect"
                        />
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="contact-info-modern">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040.725958257668!2d-114.13482614855928!3d51.07467887885551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f082b6a09af%3A0xdd9eb9091606afce!2sUniversity%20Of%20Calgary!5e0!3m2!1sen!2sca!4v1703576034908!5m2!1sen!2sca"
                        title="University of Calgary"
                        width="600"
                        height="300"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </>
    );
};

export default Contact;
