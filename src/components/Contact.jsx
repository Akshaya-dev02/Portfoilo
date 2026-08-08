import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Contact.css";

const CONTACT = {
  email: "akshayaperala71@gmail.com",
  phone: "+91 6303386587",
  phoneHref: "tel:+916303386587",
  linkedin: "https://www.linkedin.com/in/akshaya-perala",
  github: "https://github.com/Akshaya-dev02",
};

const MAILTO_LINK = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Hello Akshaya")}&body=${encodeURIComponent("Hi Akshaya,\n\n")}`;

function Contact() {
  return (
    <section id="contact">
      <AnimateOnScroll animation="fade-down">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2>Get In Touch</h2>
          <p>Have a question or want to work together? Reach out anytime.</p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={150}>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p className="contact-info-desc">
              Feel free to reach out through any of these channels.
            </p>

            <ul className="contact-links">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="contact-link">
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>
                  </span>
                  <span>
                    <strong>Email</strong>
                    {CONTACT.email}
                  </span>
                </a>
              </li>

              <li>
                <a href={CONTACT.phoneHref} className="contact-link">
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>
                    <strong>Mobile</strong>
                    {CONTACT.phone}
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <span>
                    <strong>LinkedIn</strong>
                    akshaya-perala
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  <span>
                    <strong>GitHub</strong>
                    Akshaya-dev02
                  </span>
                </a>
              </li>
            </ul>

            <a href={MAILTO_LINK} className="btn-primary approach-btn">
              Approach Me
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default Contact;
