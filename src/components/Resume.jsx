import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Resume.css";

function Resume() {
  return (
    <section id="resume">
      <AnimateOnScroll animation="fade-down">
        <div className="section-header">
          <span className="section-label">Resume</span>
          <h2>My Resume</h2>
          <p>Download or view my full resume to learn more about my experience.</p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-up" delay={200}>
        <div className="resume-box">
          <p>
            Take a look at my qualifications, education, and project experience.
          </p>

          <div className="resume-actions">
            <a
              href="/resume/PERALA_AKSHAYA_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View Resume
            </a>

            <a
              href="/resume/PERALA_AKSHAYA_RESUME.pdf"
              download
              className="btn-outline-dark"
            >
              Download Resume
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default Resume;
