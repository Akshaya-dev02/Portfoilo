import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="floating-orb orb-1" aria-hidden="true" />
      <div className="floating-orb orb-2" aria-hidden="true" />
      <div className="floating-orb orb-3" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-animate hero-d1">
            Hello, I'm <span className="name-highlight">Akshaya</span>
          </h1>

          <h3 className="hero-animate hero-d2">
            Aspiring <span>Full Stack Developer</span>
          </h3>

          <p className="hero-animate hero-d3">
            Passionate about web development, data analytics,
            and creating innovative solutions.
          </p>

          <div className="buttons hero-animate hero-d4">
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a
              href="/resume/PERALA_AKSHAYA_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="profile-wrapper hero-animate hero-d5">
          <img
            src="/profile.jpeg"
            alt="Perala Akshaya"
            className="profile-image"
          />
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>Scroll</span>
      </a>
    </section>
  );
}

export default Home;
