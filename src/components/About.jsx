import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <AnimateOnScroll animation="fade-down">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2>what describes me</h2>
          <p>Get to know more about my background and interests.</p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="flip-up" delay={150}>
        <div className="about-card">
          <p>
            I am Perala Akshaya, a passionate student interested in
            Full Stack Development, Data Analytics, and Cloud Computing.
          </p>

          <p>
            I enjoy building responsive websites and learning
            new technologies to solve real-world problems.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="about-highlights">
        {["Full Stack Dev", "Data Analytics", "Cloud Computing"].map((tag, i) => (
          <AnimateOnScroll key={tag} animation="scale-up" delay={i * 120}>
            <div className="highlight-tag"><span>+</span> {tag}</div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

export default About;
