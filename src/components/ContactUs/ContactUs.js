import { useState } from "react";

export default function ContactUs() {
    const [message, setMessage] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleEmailChange = (event) => {
        event.persist();
        setMessage((message) => ({
            ...message,
            email: event.target.value,
        }));
    };

    const handleSubjectChange = (event) => {
        event.persist();
        setMessage((message) => ({
            ...message,
            subject: event.target.value,
        }));
    };

    const handleMessageChange = (event) => {
        event.persist();
        setMessage((message) => ({
            ...message,
            message: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage((message) => ({
            email: "",
            subject: "",
            message: "",
        }));
    };

    return (
        <div className="background">
            <div className="contact-us">
                <div className="contact-us--message-container">
                    <h1 className="contact-us--title">contact us</h1>
                    <p className="feedback--text">
                        We are available to get hired. If you would like to work
                        with us on any project, please try to provide some
                        details about it.
                    </p>
                </div>
                <div className="contact-us--message-container-form">
                    <form className="contact-us--form" onSubmit={handleSubmit}>
                        <input
                            className="contact-us--form-input"
                            type="email"
                            name="email"
                            placeholder="Your e-mail..."
                            required
                            value={message.email}
                            onChange={handleEmailChange}
                        />
                        <br />
                        <input
                            className="contact-us--form-input"
                            type="text"
                            name="subject"
                            placeholder="Subject..."
                            required
                            value={message.subject}
                            onChange={handleSubjectChange}
                        />
                        <br />
                        <textarea
                            className="contact-us--form-message"
                            name="message"
                            rows="3"
                            placeholder="Your message..."
                            required
                            value={message.message}
                            onChange={handleMessageChange}
                        ></textarea>
                        <br />
                        <button
                            className="contact-us--form-submit"
                            type="submit"
                        >
                            send message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
