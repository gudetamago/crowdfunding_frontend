import "./ContactMe.css";

function ContactMe() {
    return (
        <section className="contact-me">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>Have questions or want to get in touch? I'd love to hear from you!</p>

                <div className="contact-form">
                    <h3>(Do not) Send me a message</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required
                            placeholder="This form isn't actually hooked to anything... for now."></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;