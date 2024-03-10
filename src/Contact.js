    import React from 'react';
    import './style/contact.css'; // Import CSS file for styling

    const Contact = () => {
        return (
            <section id="contact" className="contact-section">
                <div className="container">
                    <h2 className="contact-heading">Contact</h2>
                    <div className="contact-info">
                        <p><a href="mailto:V.venckas@gmail.com" className="contact-link">V.venckas@gmail.com</a></p>
                        <p><a href="tel:07549351267" className="contact-link">07549351267</a></p>
                        <p><a href="https://github.com/Dustek" className="contact-link">https://github.com/Dustek</a></p>
                    </div>
                </div>
            </section>
        );
    }

    export default Contact;