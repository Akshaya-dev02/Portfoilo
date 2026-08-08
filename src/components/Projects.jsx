import { useEffect, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import "../styles/Projects.css";

const localDemo = (path) => `/projects/${path}`;

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React showcasing my projects, skills, and experience.",
    icon: "💻",
    github: "https://github.com/Akshaya-dev02/Portfoilo",
    demo: localDemo("portfolio/index.html"),
    techStack: ["React", "Vite", "Portfolio"],
    highlights: ["Single-page experience", "Responsive design", "Project spotlight"],
  },
  {
    title: "AI Quiz Generator",
    description: "AI-powered quiz platform with user and admin dashboards for creating and taking assessments.",
    icon: "🤖",
    github: "https://github.com/Akshaya-dev02/quiz_platform",
    demo: localDemo("quiz_platform/public/index.html"),
    techStack: ["React", "AI", "Dashboard"],
    highlights: ["Interactive quiz creation", "Admin and learner views", "Modern UI experience"],
  },
  {
    title: "Civic Issues",
    description: "Platform for reporting and tracking civic issues to improve community services.",
    icon: "🏛️",
    github: "https://github.com/Akshaya-dev02/civic_issues",
    demo: localDemo("civic_issues/INDEX.html"),
    techStack: ["Web App", "Issue Tracking", "Community"],
    highlights: ["Report civic concerns", "Track issue progress", "Neighborhood-focused flow"],
  },
  {
    title: "Event Management",
    description: "Full-stack web application for planning, organizing, and managing events efficiently.",
    icon: "📅",
    github: "https://github.com/Akshaya-dev02/EVENT_MANAGEMENT",
    demo: localDemo("event_management/frontend/index.html"),
    techStack: ["Full-Stack", "Events", "Planning"],
    highlights: ["Event planning workflow", "Organized scheduling", "User-friendly interface"],
  },
  {
    title: "Maternal Health Risk Predictor",
    description: "Machine learning system to predict maternal health risks and support early intervention.",
    icon: "❤️",
    github: "https://github.com/Akshaya-dev02/MATERNAL_HEALTH_RISK_PREDICTOR",
    demo: localDemo("maternal_health_risk_predictor/index.html"),
    techStack: ["Python", "ML", "Data Science"],
    highlights: ["Risk prediction model", "Healthcare-focused analysis", "Notebook-based showcase"],
  },
  {
    title: "Food Delivery Website",
    description: "Online food ordering application with customer, restaurant, and delivery dashboards.",
    icon: "🍕",
    github: "https://github.com/Akshaya-dev02/food_order",
    demo: localDemo("food_order/frontend/login.html"),
    techStack: ["E-commerce", "Dashboards", "UI"],
    highlights: ["Order experience", "Restaurant operations", "Delivery tracking"],
  },
  {
    title: "Cafe Website",
    description: "Responsive website for a cafe, showcasing menu, services, and contact information.",
    icon: "☕",
    github: "https://github.com/Akshaya-dev02/cafe",
    demo: localDemo("cafe/frontend/dist/index.html"),
    techStack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Modern design", "User-friendly interface", "Contact information"],
  },
  {
    title: "Data Analytics Dashboard",
    description: "Retail sales forecasting dashboard with seasonal analysis and interactive visualizations.",
    icon: "📊",
    github: "https://github.com/Akshaya-dev02/Retail_Sales_Forcasting",
    demo: localDemo("Retail_Sales_Forcasting/seasonal_dashboard.html"),
    techStack: ["Analytics", "Charts", "Forecasting"],
    highlights: ["Seasonal analysis", "Interactive visuals", "Business reporting"],
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return;

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [activeProject]);

  return (
    <section id="projects">
      <AnimateOnScroll animation="fade-down">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2>Featured Projects</h2>
          <p>A selection of work I've built and contributed to.</p>
        </div>
      </AnimateOnScroll>

      <div className="project-container">
        {projects.map((project, index) => (
          <AnimateOnScroll
            key={project.title}
            animation="fade-up"
            delay={index * 150}
          >
            <div className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
                {project.demo && (
                  <button
                    type="button"
                    className="project-btn project-btn-demo"
                    onClick={() => setActiveProject(project)}
                  >
                    Live Demo
                  </button>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-github"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {activeProject && (
        <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project showcase"
            >
              ×
            </button>

            <div className="project-modal-content">
              <div className="project-modal-details">
                <span className="project-modal-label">Project showcase</span>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.description}</p>

                <div className="project-modal-tags">
                  {(activeProject.techStack || ["Web Project"]).map((tech) => (
                    <span key={tech} className="project-modal-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="project-modal-highlights">
                  {(activeProject.highlights || ["Built as a polished web experience."]).map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>

                <div className="project-modal-actions">
                  {activeProject.demo && !activeProject.demo.startsWith("#") && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-demo"
                    >
                      Open full project
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-github"
                    >
                      View GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="project-modal-preview">
                {activeProject.demo && !activeProject.demo.startsWith("#") ? (
                  <iframe
                    src={activeProject.demo}
                    title={`${activeProject.title} preview`}
                    loading="lazy"
                  />
                ) : (
                  <div className="project-preview-placeholder">
                    <h4>Preview unavailable</h4>
                    <p>This project does not currently have a local preview page.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Projects;
