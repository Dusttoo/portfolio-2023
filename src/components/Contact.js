import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Reset form or show a success message
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } else {
      // Handle errors
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        If you'd like to chat about a project or just say hi, fill out the form
        below or{" "}
        <a className="contact-email" href="mailto:your-email@example.com">
          send an email
        </a>
        .
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
