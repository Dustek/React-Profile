import React from 'react';

const Contact = () => {
    const handleSubmit = (event) => {
        // Handle form submission logic
        event.preventDefault();
        // Example: You can log form data or send it to a server
        console.log('Form submitted!');
    };

    return (
        <section id="contact">
            <div className="container">
                <h2>Contact</h2>
                <div className="contact-info">
                    <p>Email: example@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;