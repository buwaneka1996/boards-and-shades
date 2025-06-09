import React, { useRef } from "react";
import "../styles/Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/packmelankasales@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been successfully delivered.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        form.reset();
      } else {
        throw new Error("Form submit failed");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to send your message. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="contact-container" style={{ cursor: "default" }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us for inquiries about our eco-friendly wooden spoons.</p>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Inquiry</button>
          </form>
        </div>

        <div className="contact-map">
          <h2>Our Location</h2>
          <p><strong>Boards & Shades Pvt Ltd,</strong></p>
          <p><strong>Canal Road, Malabe, Sri Lanka</strong></p>

          <p>
            Email:{" "}
            <strong>
              <a style={{color: '#5a5a5a', textDecoration:'none'}} 
              href="mailto:packmelankasales@gmail.com">
                packmelankasales@gmail.com
              </a>
            </strong>
          </p>

          <p>
            Phone:{" "}
            <strong>
              <a style={{color: '#5a5a5a', textDecoration:'none'}} 
              href="tel:+94772209406">
                +94 77 220 9406
              </a>
            </strong>
          </p>

          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9002512033726!2d79.96508699999998!3d6.902786625697688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25703f3eca3ad%3A0xf8e5d50d179c7514!2sHomer%20Stadium!5e0!3m2!1sen!2slk!4v1743323546497!5m2!1sen!2slk"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;