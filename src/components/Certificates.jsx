import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Certificates.css";

const certificates = [
  {
    title: "Deloitte Technology Job Simulation",
    org: "Deloitte",
    image: "/certificates/DELOITTE.png",
    coverClass: "cover-deloitte",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5zm0 7l-7.5-3.75L2 19l10 5 10-5-7.5-3.75L12 16z" />
      </svg>
    ),
  },
  {
    title: "TATA Data Visualization",
    org: "TATA",
    image: "/certificates/TATA.png",
    coverClass: "cover-tata",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-6 4 3 5-7" />
      </svg>
    ),
  },
  {
    title: "AWS Cloud Foundations",
    org: "AWS",
    image: "/certificates/AWS-CLOUD.png",
    coverClass: "cover-aws",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 18c.83 0 1.5-.67 1.5-1.5S7.33 15 6.5 15 5 15.67 5 16.5 5.67 18 6.5 18zm11 0c.83 0 1.5-.67 1.5-1.5S18.33 15 17.5 15 16 15.67 16 16.5 16.67 18 17.5 18zM5.5 12h13l-1.2-4H6.7L5.5 12z" />
      </svg>
    ),
  },
  {
    title: "Cisco Networking Essentials",
    org: "Cisco",
    image: "/certificates/CISCO.png",
    coverClass: "cover-cisco",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Microsoft Certification",
    org: "Microsoft",
    image: "/certificates/MICROSOFT.png",
    coverClass: "cover-microsoft",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
      </svg>
    ),
  },
];

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <AnimateOnScroll animation="fade-down">
          <div className="section-header">
            <span className="section-label">Certificates</span>
            <h2>My Certificates</h2>
            <p>Professional certifications and achievements.</p>
          </div>
        </AnimateOnScroll>

        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <AnimateOnScroll
              key={cert.title}
              animation="flip-up"
              delay={index * 100}
            >
              <div className="certificate-card">
                <div className={`certificate-cover ${cert.coverClass}`}>
                  <span className="cover-badge">Certificate</span>
                  <span className="cover-icon">{cert.icon}</span>
                  <span className="cover-org">{cert.org}</span>
                </div>

                <div className="certificate-content">
                  <h3>{cert.title}</h3>

                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
