import { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      alert("⚠️ Please fill all fields");
      return;
    }

    alert("✅ Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section"
    >
      <h2>Contact Us</h2>

      <div className="grid">

        <div className="card">
          <FaMapMarkerAlt
            size={35}
            style={{ color: "#ff9800" }}
          />

          <h3>Address</h3>

          <p>
            Blue Tokai Coffee Roasters
            <br />
            100 Feet Road, Indiranagar
            <br />
            Bengaluru, Karnataka 560038
          </p>
        </div>

        <div className="card">
          <FaPhoneAlt
            size={35}
            style={{ color: "#ff9800" }}
          />

          <h3>Phone</h3>

          <p>
            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </p>

          <br />

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="card">
          <FaEnvelope
            size={35}
            style={{ color: "#ff9800" }}
          />

          <h3>Email</h3>

          <p>
            <a href="mailto:hello@brewhavencafe.com">
              hello@brewhavencafe.com
            </a>
          </p>
        </div>

      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;