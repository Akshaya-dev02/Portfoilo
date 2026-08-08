import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Python",
    "C",
    "Power BI",
    "MySQL",
    "Numpy",
  ];

  return (
    <section id="skills">
      <AnimateOnScroll animation="fade-down">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2>Technical Skills</h2>
          <p>Technologies and languages I work with.</p>
        </div>
      </AnimateOnScroll>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <AnimateOnScroll
            key={skill}
            animation="scale-up"
            delay={index * 70}
          >
            <div className="skill-card">
              <span>{skill}</span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

export default Skills;
